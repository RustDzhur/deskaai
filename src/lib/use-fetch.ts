import {useEffect, useReducer, useRef} from 'react';

interface State<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

type Action<T> =
  | {type: 'loading'}
  | {type: 'fetched'; payload: T}
  | {type: 'error'; payload: Error};

function useFetch<T = unknown>(
  key: string | string[],
  fetchFunc: () => Promise<T>
): State<T> & {loading: boolean} {
  let fetchKey = Array.isArray(key) ? key.join('/') : key;

  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return {...state, loading: true};
      case 'fetched':
        return {...state, loading: false, data: action.payload};
      case 'error':
        return {...state, loading: false, error: action.payload};
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({type: 'loading'});

      try {
        const data = await fetchFunc();
        if (cancelRequest.current) return;

        dispatch({type: 'fetched', payload: data});
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({type: 'error', payload: error as Error});
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {...state, loading: state.loading};
}

export default useFetch;
