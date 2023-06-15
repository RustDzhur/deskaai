import {useEffect, useState} from 'react';

type UseAsyncReturn<T> = {
  isLoading: boolean;
  data: T | null;
  error: any;
}; // [isLoading, data, error]

export function useAsync<T>(
  asyncFn: () => Promise<T>,
  onSuccess: (value: T) => void
): UseAsyncReturn<T> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    let isActive = true;

    asyncFn()
      .then((data) => {
        if (isActive) {
          onSuccess(data);
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isActive) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, []);

  return {
    isLoading,
    data,
    error,
  };
}
