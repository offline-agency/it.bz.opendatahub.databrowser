import { computed, Ref } from 'vue';
import { PathParams } from '../../datasetConfig/types';
import { useMetaData } from './useMetaData';
import * as R from 'ramda';
import { stringifyParameter } from '../../api';

type Query = Record<string, string | null | (string | null)[]>;

export const useCurrentMetaData = (
  pathParams: Ref<PathParams>,
  query: Ref<Query>
) => {
  const metaData = useMetaData();

  const currentMetaData = computed(() => {
    return (metaData.data.value ?? []).find((md) => {
      if (!pathsMatch(pathParams.value, md.pathParam)) {
        return false;
      }

      const queryAsObject = queryToObject(query.value);
      return queriesMatch(queryAsObject, md.apiFilter);
    });
  });

  return { currentMetaData };
};

const pathsMatch = (path1: PathParams, path2: PathParams) =>
  JSON.stringify(path1).localeCompare(JSON.stringify(path2)) === 0;

const queryToObject = (query: Query) =>
  Object.entries(query).reduce<Record<string, string>>(
    (prev, [key, value]) => ({ ...prev, [key]: stringifyParameter(value) }),
    {}
  );

const queriesMatch = (
  value: Record<string, string>,
  apiFilter: Record<string, string> | undefined
) => {
  return R.equals(value, apiFilter);
};
