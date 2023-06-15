export function useNoOpMutation(mutation: any, options?: any): any {
  // This is your no-op function.
  const mutateFunction = async () => {
    console.log("Mutation function was called, but it's a no-op.");
    return {};
  };

  // This is the dummy state.
  const result = {
    loading: false,
    called: false,
    client: null as any,
    data: null as any,
    error: null,
    variables: null as any,
  };

  return [mutateFunction, result];
}

export function useNoOpSubscription(
  subscription: any,
  options?: any
): {
  variables: any | undefined;
  loading: boolean;
  data?: any | undefined;
  error?: any | undefined;
} {
  // This is your dummy state.
  return {
    loading: false,
    data: null,
    error: null,
    variables: options?.variables || null,
  };
}
export function useNoOpQuery(
  query: any,
  options?: any
): {
  loading: boolean;
  error?: any | undefined;
  data: any | undefined;
  variables: any | undefined;
  refetch: () => void;
  fetchMore: () => void;
  startPolling: () => void;
  stopPolling: () => void;
  updateQuery: () => void;
  networkStatus: number;
} {
  // This is your dummy state.
  return {
    loading: false,
    error: null,
    data: null,
    variables: options?.variables || null,
    refetch: () => console.log("Refetch was called, but it's a no-op."),
    fetchMore: () => console.log("FetchMore was called, but it's a no-op."),
    startPolling: () =>
      console.log("startPolling was called, but it's a no-op."),
    stopPolling: () => console.log("stopPolling was called, but it's a no-op."),
    updateQuery: () => console.log("updateQuery was called, but it's a no-op."),
    networkStatus: 0,
  };
}
