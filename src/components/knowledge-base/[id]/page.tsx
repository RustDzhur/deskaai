import React from 'react';
// import Main from '@/app/components/datasets/documents'
import {KnowledgeBaseDocuments as KnowledgeBaseDocumentsContent} from './shared/documents/documents';
import Layout from './shared/layout';
import {useParams} from 'react-router';

export type IProps = {};

const KnowledgeBaseDocuments = () => {
  const {collectionId} = useParams<{collectionId: string}>();
  return (
    <Layout
      params={{
        collectionId: collectionId,
      }}
    >
      <KnowledgeBaseDocumentsContent collectionId={collectionId} />
    </Layout>
  );
};

export {KnowledgeBaseDocuments};
