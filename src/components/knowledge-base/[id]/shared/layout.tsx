'use client';
import type {FC} from 'react';
import React, {useEffect} from 'react';
// import { usePathname } from 'next/navigation'
// equivalent in react-router-dom
import {useLocation, Link} from 'react-router-dom';
import useSWR from 'swr';

import {Cog8ToothIcon, DocumentTextIcon} from '@heroicons/react/24/outline';
import {
  Cog8ToothIcon as Cog8ToothSolidIcon,
  // CommandLineIcon as CommandLineSolidIcon,
  DocumentTextIcon as DocumentTextSolidIcon,
} from '@heroicons/react/24/solid';
// import Link from 'next/link'
import s from './style.module.css';
// import { fetchDataDetail, fetchDatasetRelatedApps } from '@/service/datasets'
// import type { RelatedApp } from '@/models/datasets'
// import { getLocaleOnClient } from '@/i18n/client'
import AppSideBar from '../../../common/app-sidebar';
import Divider from '../../../common/base/divider';
import Indicator from '../../../common/header/indicator';
import AppIcon from '../../../common/base/app-icon';
import Loading from '../../../common/base/loading';
import {DatasetDetailContext} from './dataset-detail-context';
import {KnowledgeBaseLayout} from '../../knowledge-base-layout';
import {useKnowledgeBaseStore} from '../../../../store/knowledge-base.store';

// mock fetchDataDetail and fetchDataRelatedApps and return a promise
const fetchDataDetail = (collectionId: string) => {
  return new Promise();
};

const fetchDatasetRelatedApps = (collectionId: string) => {
  return new Promise();
};

export type IAppDetailLayoutProps = {
  children: React.ReactNode;
  params: {collectionId: string};
};

const LikedItem: FC<{
  type?: 'plugin' | 'app';
  appStatus?: boolean;
  detail: RelatedApp;
}> = ({type = 'app', appStatus = true, detail}) => {
  return (
    <Link className={s.itemWrapper} to={`/app/${detail?.id}/overview`}>
      <div className={s.iconWrapper}>
        <AppIcon size="tiny" />
        {type === 'app' && (
          <div className={s.statusPoint}>
            <Indicator color={appStatus ? 'green' : 'gray'} />
          </div>
        )}
      </div>
      <div className={s.appInfo}>{detail?.name || '--'}</div>
    </Link>
  );
};

const DatasetDetailLayout: FC<IAppDetailLayoutProps> = (props) => {
  const {
    children,
    params: {collectionId},
  } = props;
  console.log('here');
  const location = useLocation();
  // const pathname = usePathname()
  const pathname = location.pathname;
  const hideSideBar = /knowledge-base\/create$/.test(pathname);

  // const { data: datasetRes, error } = useSWR(
  //   {
  //     action: 'fetchDataDetail',
  //     collectionId,
  //   },
  //   (apiParams) => fetchDataDetail(apiParams.collectionId)
  // );

  const {data: relatedApps} = useSWR(
    {
      action: 'fetchDatasetRelatedApps',
      collectionId,
    },
    (apiParams) => fetchDatasetRelatedApps(apiParams.collectionId)
  );

  const navigation = [
    {
      name: 'Documents',
      href: `/knowledge-base/${collectionId}`,
      icon: DocumentTextIcon,
      selectedIcon: DocumentTextSolidIcon,
    },
    // {
    //   name: 'common.datasetMenus.hitTesting',
    //   href: `/datasets/${collectionId}/hitTesting`,
    //   icon: TargetIcon,
    //   selectedIcon: TargetSolidIcon,
    // },
    // { name: 'api & webhook', href: `/datasets/${collectionId}/api`, icon: CommandLineIcon, selectedIcon: CommandLineSolidIcon },
    {
      name: 'Integrations',
      href: `/knowledge-base/${collectionId}/integrations`,
      icon: Cog8ToothIcon,
      selectedIcon: Cog8ToothSolidIcon,
    },
  ];

  // useEffect(() => {
  //   if (datasetRes) document.title = `${datasetRes?.name || 'Dataset'} - Dify`;
  // }, [datasetRes]);

  const ExtraInfo: FC = () => {
    // const locale = getLocaleOnClient()

    return (
      <div className="w-full">
        <Divider className="mt-5" />
        {relatedApps?.data?.length ? (
          <>
            <div className={s.subTitle}>
              {relatedApps?.total || '--'} {'common.datasetMenus.relatedApp'}
            </div>
            {relatedApps?.data?.map((item) => (
              <LikedItem detail={item} />
            ))}
          </>
        ) : (
          <div className="mt-5 p-3">
            {/* TODO: dipslay all integration on this side */}
            {/* <div className="flex items-center justify-start gap-2">
              <div className={s.emptyIconDiv}>
                <Squares2X2Icon className="w-3 h-3 text-gray-500" />
              </div>
              <div className={s.emptyIconDiv}>
                <PuzzlePieceIcon className="w-3 h-3 text-gray-500" />
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {'common.datasetMenus.emptyTip'}
            </div>
            <a
              className="inline-flex items-center text-xs text-primary-600 mt-2 cursor-pointer"
              href={`https://docs.dify.ai`}
              target="_blank"
              rel="noreferrer"
            >
              <BookOpenIcon className="mr-1" />
              {'common.datasetMenus.viewDoc'}
            </a> */}
          </div>
        )}
      </div>
    );
  };

  const datasetRes = useKnowledgeBaseStore(
    (state) => state.collections?.[collectionId]
  );

  // if (!datasetRes) return <Loading />;

  return (
    <KnowledgeBaseLayout bodyClassName="px-0">
      <div className="flex h-full">
        {!hideSideBar && (
          <AppSideBar
            title={datasetRes?.name || '--'}
            icon={
              datasetRes?.icon ||
              'https://static.dify.ai/images/dataset-default-icon.png'
            }
            icon_background={datasetRes?.icon_background || '#F5F5F5'}
            desc={datasetRes?.description || '--'}
            navigation={navigation}
            extraInfo={<ExtraInfo />}
            iconType="dataset"
          />
        )}
        <DatasetDetailContext.Provider
          value={{indexingTechnique: datasetRes?.indexing_technique}}
        >
          <div className="bg-bg grow">{children}</div>
        </DatasetDetailContext.Provider>
      </div>
    </KnowledgeBaseLayout>
  );
};
export default DatasetDetailLayout;
