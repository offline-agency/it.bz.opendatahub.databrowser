import { ListViewConfig } from '../../../domain/datasetConfig/types';
import { CellComponent } from '../../../domain/cellComponents/types';
import { ID_READONLY_CONFIG } from '../configBuilderListView';

export const accommodationTypesListView: ListViewConfig = {
  elements: [
    ID_READONLY_CONFIG,
    {
      title: 'Key',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'Key',
      },
    },
    {
      title: 'Type',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'Type',
      },
    },
    {
      title: 'TypeDesc',
      component: CellComponent.StringCell,
      class: 'w-40',
      fields: {
        text: 'TypeDesc.{language}',
      },
    },
  ],
};
