'use client';
import React, {FC} from 'react';

interface IAppUnavailableProps {
  code?: number;
  isUnknwonReason?: boolean;
  unknownReason?: string;
}

const AppUnavailable: FC<IAppUnavailableProps> = ({
  code = 404,
  isUnknwonReason,
  unknownReason,
}) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <h1
        className="mr-5 h-[50px] leading-[50px] pr-5 text-[24px] font-medium"
        style={{
          borderRight: '1px solid rgba(0,0,0,.3)',
        }}
      >
        {code}
      </h1>
      <div className="text-sm">
        {unknownReason || (isUnknwonReason ? 'Unknown error' : 'Unavailable')}
      </div>
    </div>
  );
};
export default React.memo(AppUnavailable);
