import React from 'react';
// import Main from '@/app/components/datasets/documents'
import {KnowledgeBaseDocuments as KnowledgeBaseDocumentsContent} from '../../[id]/shared/documents/documents';
import Layout from '../layout';

export type IProps = {
  params: {datasetId: string};
};

const KnowledgeBaseDocuments = ({params: {datasetId}}: IProps) => {
  return (
    // <Main datasetId={datasetId} />
    <Layout
      params={{
        datasetId: datasetId,
      }}
    >
      <KnowledgeBaseDocumentsContent datasetId={datasetId} />
    </Layout>
  );
};

export {KnowledgeBaseDocuments};
