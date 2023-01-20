import { ListViewConfig } from '../../../domain/datasetConfig/types';
import {
  CellComponent,
  FilterComponent,
} from '../../../domain/cellComponents/types';
import {
  EDITED_TABLE_CONFIG,
  IMAGE_TABLE_CONFIG,
  LANGUAGE_TABLE_CONFIG,
} from '../configBuilder';

export const wineAwardListView: ListViewConfig = {
  elements: [
    { ...IMAGE_TABLE_CONFIG },
    {
      title: 'Name/Title',
      component: CellComponent.StringCell,
      class: 'w-48',
      fields: {
        text: 'Detail.{language}.Title',
      },
    },
    {
      title: 'Header',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'Detail.{language}.Header',
      },
    },
    {
      title: 'Vintage',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'Vintage',
      },
    },
    {
      title: 'Award Year',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'Awardyear',
      },
    },
    {
      title: 'Awards',
      component: CellComponent.ArrayCell,
      class: 'w-40',
      fields: {
        items: 'Awards',
      },
      params: {
        separator: ', ',
      },
    },
    { ...LANGUAGE_TABLE_CONFIG },
    { ...EDITED_TABLE_CONFIG },
    {
      title: 'Source',
      component: CellComponent.StringCell,
      class: 'w-36',
      fields: {
        text: '_Meta.Source',
      },
    },
    {
      title: 'Open Data Hub state',
      component: CellComponent.StateCell,
      class: 'w-36',
      fields: {
        state: 'OdhActive',
      },
    },
  ],
};
