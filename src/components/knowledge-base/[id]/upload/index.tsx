'use client';
import React, {useState, useCallback, useEffect} from 'react';

import {useBoolean} from 'ahooks';
// import type { DataSet, File, createDocumentResponse } from '@/models/datasets'
// import { fetchTenantInfo } from '@/service/common'
// import { fetchDataDetail } from '@/service/datasets'

// import StepsNavBar from './steps-nav-bar';
// import StepOne from './step-one';
// import StepTwo from './step-two';
// import StepThree from './step-three';
// import AccountSetting from '@/app/components/header/account-setting'
import AppUnavailable from '../../../common/base/app-unavailable';
import StepOne from './step-one';
import {KnowledgeBaseLayout} from '../../knowledge-base-layout';
import StepsNavBar from './steps-nav-bar';

type DatasetUpdateFormProps = {
  datasetId?: string;
};

const fetchTenantInfo = () => Promise.resolve({providers: []});
const fetchDataDetail = () => Promise.resolve({});

const KnowledgeBaseUpdateAndCreateForm = ({
  datasetId,
}: DatasetUpdateFormProps) => {
  const [hasSetAPIKEY, setHasSetAPIKEY] = useState(true);
  const [isShowSetAPIKey, {setTrue: showSetAPIKey, setFalse: hideSetAPIkey}] =
    useBoolean();
  const [step, setStep] = useState(1);
  const [indexingTypeCache, setIndexTypeCache] = useState('');
  const [file, setFile] = useState<File | undefined>();
  const [result, setResult] = useState<createDocumentResponse | undefined>();
  const [hasError, setHasError] = useState(false);

  console.log('KnowledgeBaseUpdateAndCreateForm', {datasetId});
  const updateFile = (file?: File) => {
    setFile(file);
  };
  const updateIndexingTypeCache = (type: string) => {
    setIndexTypeCache(type);
  };
  const updateResultCache = (res?: createDocumentResponse) => {
    setResult(res);
  };

  const nextStep = useCallback(() => {
    setStep(step + 1);
  }, [step, setStep]);

  const changeStep = useCallback(
    (delta: number) => {
      setStep(step + delta);
    },
    [step, setStep]
  );

  const checkAPIKey = async () => {
    const data = await fetchTenantInfo({url: '/info'});
    const hasSetKey = data.providers.some(({is_valid}) => is_valid);
    setHasSetAPIKEY(hasSetKey);
  };

  useEffect(() => {
    checkAPIKey();
  }, []);

  const [detail, setDetail] = useState<DataSet | null>(null);
  useEffect(() => {
    (async () => {
      if (datasetId) {
        try {
          const detail = await fetchDataDetail(datasetId);
          setDetail(detail);
        } catch (e) {
          setHasError(true);
        }
      }
    })();
  }, [datasetId]);

  if (hasError) {
    return (
      <AppUnavailable
        code={500}
        unknownReason={'datasetCreation.error.unavailable' as string}
      />
    );
  }

  return (
    <KnowledgeBaseLayout>
      <div className="flex">
        {/* <StepsNavBar /> */}
        <div className="grow bg-background">
          <StepOne
            datasetId={datasetId}
            file={file}
            updateFile={updateFile}
            onStepChange={nextStep}
          />
        </div>
      </div>
    </KnowledgeBaseLayout>
  );
};

export {KnowledgeBaseUpdateAndCreateForm};
