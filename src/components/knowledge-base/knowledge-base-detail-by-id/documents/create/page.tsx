import React from 'react';
import {KnowledgeBaseUpdateAndCreateForm} from '../../../create-v2';
// import DatasetUpdateForm from '@/app/components/datasets/create'

export type IProps = {
  params: {datasetId: string};
};

const Create = async ({params: {datasetId}}: IProps) => {
  return <KnowledgeBaseUpdateAndCreateForm datasetId={datasetId} />;
};

export default Create;
