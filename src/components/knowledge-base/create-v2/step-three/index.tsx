'use client';
import React from 'react';

// import type { createDocumentResponse } from '@/models/datasets'
// import EmbeddingDetail from '../../documents/detail/embedding'

import cn from 'classnames';
import s from './index.module.css';

type StepThreeProps = {
  datasetId?: string;
  datasetName?: string;
  indexingType?: string;
  creationCache?: createDocumentResponse;
};

const StepThree = ({
  datasetId,
  datasetName,
  indexingType,
  creationCache,
}: StepThreeProps) => {
  return (
    <div className="flex w-full h-full">
      <div className={'h-full w-full overflow-y-scroll px-16'}>
        <div className="max-w-[636px]">
          {!datasetId && (
            <>
              <div className={s.creationInfo}>
                <div className={s.title}>
                  {'datasetCreation.stepThree.creationTitle'}
                </div>
                <div className={s.content}>
                  {'datasetCreation.stepThree.creationContent'}
                </div>
                <div className={s.label}>
                  {'datasetCreation.stepThree.label'}
                </div>
                <div className={s.datasetName}>
                  {datasetName || creationCache?.dataset?.name}
                </div>
              </div>
              <div className={s.dividerLine} />
            </>
          )}
          {datasetId && (
            <div className={s.creationInfo}>
              <div className={s.title}>
                {'datasetCreation.stepThree.additionTitle'}
              </div>
              <div
                className={s.content}
              >{`${'datasetCreation.stepThree.additionP1'} ${
                datasetName || creationCache?.dataset?.name
              } ${'datasetCreation.stepThree.additionP2'}`}</div>
            </div>
          )}
          {/* <EmbeddingDetail
            datasetId={datasetId || creationCache?.dataset?.id}
            documentId={creationCache?.document.id}
            indexingType={indexingType || creationCache?.dataset?.indexing_technique}
            stopPosition='bottom'
            detail={creationCache?.document}
          /> */}
        </div>
      </div>
      <div className={cn(s.sideTip)}>
        <div className={s.tipCard}>
          <span className={s.icon} />
          <div className={s.title}>
            {'datasetCreation.stepThree.sideTipTitle'}
          </div>
          <div className={s.content}>
            {'datasetCreation.stepThree.sideTipContent'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
