'use client';

import {useEffect, useRef} from 'react';
import useSWRInfinite from 'swr/infinite';
// import { debounce } from 'lodash-es';
// import { DataSetListResponse } from '@/models/datasets';
import NewDatasetCard from './NewDatasetCard';
import DatasetCard from './DatasetCard';
// import Button from '../common/base/button';
import {Button} from '../common/deska-kit-base/button';
// import { fetchDatasets } from '@/service/datasets';
import {TbMessage} from 'react-icons/tb';
import {KnowledgeBaseLayout} from './knowledge-base-layout';
// import { useSelector } from '@/context/app-context';
import useSWR from 'swr';
import * as API from '../../api';
import {useKnowledgeBaseApi} from '../../store/knowledge-base.store';
import useFetch from '../../lib/use-fetch';
const fetchDatasets = () =>
  Promise.resolve({
    data: [
      {
        id: '19f3e085-0d72-4098-aad8-507b2a96919a',
        name: 'test',
        description: null,
        provider: 'vendor',
        permission: 'only_me',
        data_source_type: 'upload_file',
        indexing_technique: null,
        app_count: 0,
        document_count: 0,
        word_count: 0,
        created_by: '65d92250-5a0d-4cd6-bee1-763f4ee40c34',
        created_at: 1685517602,
        updated_by: '65d92250-5a0d-4cd6-bee1-763f4ee40c34',
        updated_at: 1685517602,
      },
      {
        id: 'e09a98a2-9b39-49d4-8432-c116f9da3658',
        name: 'ICEBE_2018_paper_6...',
        description:
          'useful for when you want to answer queries about the ICEBE_2018_paper_68.pdf',
        provider: 'vendor',
        permission: 'only_me',
        data_source_type: 'upload_file',
        indexing_technique: 'high_quality',
        app_count: 0,
        document_count: 2,
        word_count: 105146,
        created_by: '65d92250-5a0d-4cd6-bee1-763f4ee40c34',
        created_at: 1685516879,
        updated_by: null,
        updated_at: 1685516879,
      },
    ],
    has_more: false,
    limit: 20,
    total: 2,
    page: 1,
  });

const getKey = (pageIndex: number, previousPageData: DataSetListResponse) => {
  if (!pageIndex || previousPageData.has_more)
    return {url: 'datasets', params: {page: pageIndex + 1, limit: 30}};
  return null;
};

export const KnowledgeCollections = () => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const {fetchKnowledgeBase, collections, deleteKnowledgeBase} =
    useKnowledgeBaseApi();

  // const {
  //   data,
  //   error,
  //   loading,
  // } = useFetch('/collections', fetchKnowledgeBase);

  useEffect(() => {
    fetchKnowledgeBase();
  }, []);

  return (
    <KnowledgeBaseLayout className="">
      <h2 className=" text-lg font-semibold tracking-tight mt-6">
        Knowledge Base Collections
      </h2>
      <div className="grid content-start grid-cols-1 gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-4 grow shrink-0">
        {collections?.map((collection) => (
          <DatasetCard
            key={collection.id}
            collection={collection}
            onDelete={() => deleteKnowledgeBase(collection.id)}
          />
        ))}
        <NewDatasetCard ref={anchorRef} />
      </div>
    </KnowledgeBaseLayout>
  );
};
