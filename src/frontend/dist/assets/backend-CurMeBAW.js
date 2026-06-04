var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _QueryObserver_instances, executeFetch_fn, updateStaleTimeout_fn, computeRefetchInterval_fn, updateRefetchInterval_fn, updateTimers_fn, clearStaleTimeout_fn, clearRefetchInterval_fn, updateQuery_fn, notify_fn, _a;
import { a3 as Subscribable, ab as pendingThenable, ac as resolveEnabled, a4 as shallowEqualObjects, ad as resolveStaleTime, a9 as noop, ae as environmentManager, af as isValidTimeout, ag as timeUntilStale, ah as timeoutManager, ai as focusManager, aj as fetchState, ak as replaceData, a7 as notifyManager, j as reactExports, aa as shouldThrowError, a8 as useQueryClient, Z as useInternetIdentity, al as createActorWithConfig, am as Record, an as Nat, ao as Text, ap as Variant, aq as Null, ar as Int, as as Principal, at as Opt, au as Vec, av as Bool, aw as Service, ax as Func, ay as HttpAgent, az as Actor } from "./index-CqRCuDMS.js";
var QueryObserver = (_a = class extends Subscribable {
  constructor(client, options) {
    super();
    __privateAdd(this, _QueryObserver_instances);
    __privateAdd(this, _client);
    __privateAdd(this, _currentQuery);
    __privateAdd(this, _currentQueryInitialState);
    __privateAdd(this, _currentResult);
    __privateAdd(this, _currentResultState);
    __privateAdd(this, _currentResultOptions);
    __privateAdd(this, _currentThenable);
    __privateAdd(this, _selectError);
    __privateAdd(this, _selectFn);
    __privateAdd(this, _selectResult);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    __privateAdd(this, _lastQueryWithDefinedData);
    __privateAdd(this, _staleTimeoutId);
    __privateAdd(this, _refetchIntervalId);
    __privateAdd(this, _currentRefetchInterval);
    __privateAdd(this, _trackedProps, /* @__PURE__ */ new Set());
    this.options = options;
    __privateSet(this, _client, client);
    __privateSet(this, _selectError, null);
    __privateSet(this, _currentThenable, pendingThenable());
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      __privateGet(this, _currentQuery).addObserver(this);
      if (shouldFetchOnMount(__privateGet(this, _currentQuery), this.options)) {
        __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
      } else {
        this.updateResult();
      }
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(
      __privateGet(this, _currentQuery),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
    __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
    __privateGet(this, _currentQuery).removeObserver(this);
  }
  setOptions(options) {
    const prevOptions = this.options;
    const prevQuery = __privateGet(this, _currentQuery);
    this.options = __privateGet(this, _client).defaultQueryOptions(options);
    if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== "boolean") {
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    }
    __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
    __privateGet(this, _currentQuery).setOptions(this.options);
    if (prevOptions._defaulted && !shallowEqualObjects(this.options, prevOptions)) {
      __privateGet(this, _client).getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: __privateGet(this, _currentQuery),
        observer: this
      });
    }
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(
      __privateGet(this, _currentQuery),
      prevQuery,
      this.options,
      prevOptions
    )) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
    this.updateResult();
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || resolveStaleTime(this.options.staleTime, __privateGet(this, _currentQuery)) !== resolveStaleTime(prevOptions.staleTime, __privateGet(this, _currentQuery)))) {
      __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
    }
    const nextRefetchInterval = __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this);
    if (mounted && (__privateGet(this, _currentQuery) !== prevQuery || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) !== resolveEnabled(prevOptions.enabled, __privateGet(this, _currentQuery)) || nextRefetchInterval !== __privateGet(this, _currentRefetchInterval))) {
      __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result)) {
      __privateSet(this, _currentResult, result);
      __privateSet(this, _currentResultOptions, this.options);
      __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    }
    return result;
  }
  getCurrentResult() {
    return __privateGet(this, _currentResult);
  }
  trackResult(result, onPropTracked) {
    return new Proxy(result, {
      get: (target, key) => {
        this.trackProp(key);
        onPropTracked == null ? void 0 : onPropTracked(key);
        if (key === "promise") {
          this.trackProp("data");
          if (!this.options.experimental_prefetchInRender && __privateGet(this, _currentThenable).status === "pending") {
            __privateGet(this, _currentThenable).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            );
          }
        }
        return Reflect.get(target, key);
      }
    });
  }
  trackProp(key) {
    __privateGet(this, _trackedProps).add(key);
  }
  getCurrentQuery() {
    return __privateGet(this, _currentQuery);
  }
  refetch({ ...options } = {}) {
    return this.fetch({
      ...options
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = __privateGet(this, _client).defaultQueryOptions(options);
    const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), defaultedOptions);
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    return __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this, {
      ...fetchOptions,
      cancelRefetch: fetchOptions.cancelRefetch ?? true
    }).then(() => {
      this.updateResult();
      return __privateGet(this, _currentResult);
    });
  }
  createResult(query, options) {
    var _a2;
    const prevQuery = __privateGet(this, _currentQuery);
    const prevOptions = this.options;
    const prevResult = __privateGet(this, _currentResult);
    const prevResultState = __privateGet(this, _currentResultState);
    const prevResultOptions = __privateGet(this, _currentResultOptions);
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : __privateGet(this, _currentQueryInitialState);
    const { state } = query;
    let newState = { ...state };
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        newState = {
          ...newState,
          ...fetchState(state.data, query.options)
        };
      }
      if (options._optimisticResults === "isRestoring") {
        newState.fetchStatus = "idle";
      }
    }
    let { error, errorUpdatedAt, status } = newState;
    data = newState.data;
    let skipSelect = false;
    if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
      let placeholderData;
      if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
        skipSelect = true;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(
          (_a2 = __privateGet(this, _lastQueryWithDefinedData)) == null ? void 0 : _a2.state.data,
          __privateGet(this, _lastQueryWithDefinedData)
        ) : options.placeholderData;
      }
      if (placeholderData !== void 0) {
        status = "success";
        data = replaceData(
          prevResult == null ? void 0 : prevResult.data,
          placeholderData,
          options
        );
        isPlaceholderData = true;
      }
    }
    if (options.select && data !== void 0 && !skipSelect) {
      if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === __privateGet(this, _selectFn)) {
        data = __privateGet(this, _selectResult);
      } else {
        try {
          __privateSet(this, _selectFn, options.select);
          data = options.select(data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          __privateSet(this, _selectResult, data);
          __privateSet(this, _selectError, null);
        } catch (selectError) {
          __privateSet(this, _selectError, selectError);
        }
      }
    }
    if (__privateGet(this, _selectError)) {
      error = __privateGet(this, _selectError);
      data = __privateGet(this, _selectResult);
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = newState.fetchStatus === "fetching";
    const isPending = status === "pending";
    const isError = status === "error";
    const isLoading = isPending && isFetching;
    const hasData = data !== void 0;
    const result = {
      status,
      fetchStatus: newState.fetchStatus,
      isPending,
      isSuccess: status === "success",
      isError,
      isInitialLoading: isLoading,
      isLoading,
      data,
      dataUpdatedAt: newState.dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: newState.fetchFailureCount,
      failureReason: newState.fetchFailureReason,
      errorUpdateCount: newState.errorUpdateCount,
      isFetched: query.isFetched(),
      isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isPending,
      isLoadingError: isError && !hasData,
      isPaused: newState.fetchStatus === "paused",
      isPlaceholderData,
      isRefetchError: isError && hasData,
      isStale: isStale(query, options),
      refetch: this.refetch,
      promise: __privateGet(this, _currentThenable),
      isEnabled: resolveEnabled(options.enabled, query) !== false
    };
    const nextResult = result;
    if (this.options.experimental_prefetchInRender) {
      const hasResultData = nextResult.data !== void 0;
      const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
      const finalizeThenableIfPossible = (thenable) => {
        if (isErrorWithoutData) {
          thenable.reject(nextResult.error);
        } else if (hasResultData) {
          thenable.resolve(nextResult.data);
        }
      };
      const recreateThenable = () => {
        const pending = __privateSet(this, _currentThenable, nextResult.promise = pendingThenable());
        finalizeThenableIfPossible(pending);
      };
      const prevThenable = __privateGet(this, _currentThenable);
      switch (prevThenable.status) {
        case "pending":
          if (query.queryHash === prevQuery.queryHash) {
            finalizeThenableIfPossible(prevThenable);
          }
          break;
        case "fulfilled":
          if (isErrorWithoutData || nextResult.data !== prevThenable.value) {
            recreateThenable();
          }
          break;
        case "rejected":
          if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) {
            recreateThenable();
          }
          break;
      }
    }
    return nextResult;
  }
  updateResult() {
    const prevResult = __privateGet(this, _currentResult);
    const nextResult = this.createResult(__privateGet(this, _currentQuery), this.options);
    __privateSet(this, _currentResultState, __privateGet(this, _currentQuery).state);
    __privateSet(this, _currentResultOptions, this.options);
    if (__privateGet(this, _currentResultState).data !== void 0) {
      __privateSet(this, _lastQueryWithDefinedData, __privateGet(this, _currentQuery));
    }
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    __privateSet(this, _currentResult, nextResult);
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const { notifyOnChangeProps } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !__privateGet(this, _trackedProps).size) {
        return true;
      }
      const includedProps = new Set(
        notifyOnChangePropsValue ?? __privateGet(this, _trackedProps)
      );
      if (this.options.throwOnError) {
        includedProps.add("error");
      }
      return Object.keys(__privateGet(this, _currentResult)).some((key) => {
        const typedKey = key;
        const changed = __privateGet(this, _currentResult)[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    __privateMethod(this, _QueryObserver_instances, notify_fn).call(this, { listeners: shouldNotifyListeners() });
  }
  onQueryUpdate() {
    this.updateResult();
    if (this.hasListeners()) {
      __privateMethod(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
  }
}, _client = new WeakMap(), _currentQuery = new WeakMap(), _currentQueryInitialState = new WeakMap(), _currentResult = new WeakMap(), _currentResultState = new WeakMap(), _currentResultOptions = new WeakMap(), _currentThenable = new WeakMap(), _selectError = new WeakMap(), _selectFn = new WeakMap(), _selectResult = new WeakMap(), _lastQueryWithDefinedData = new WeakMap(), _staleTimeoutId = new WeakMap(), _refetchIntervalId = new WeakMap(), _currentRefetchInterval = new WeakMap(), _trackedProps = new WeakMap(), _QueryObserver_instances = new WeakSet(), executeFetch_fn = function(fetchOptions) {
  __privateMethod(this, _QueryObserver_instances, updateQuery_fn).call(this);
  let promise = __privateGet(this, _currentQuery).fetch(
    this.options,
    fetchOptions
  );
  if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) {
    promise = promise.catch(noop);
  }
  return promise;
}, updateStaleTimeout_fn = function() {
  __privateMethod(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
  const staleTime = resolveStaleTime(
    this.options.staleTime,
    __privateGet(this, _currentQuery)
  );
  if (environmentManager.isServer() || __privateGet(this, _currentResult).isStale || !isValidTimeout(staleTime)) {
    return;
  }
  const time = timeUntilStale(__privateGet(this, _currentResult).dataUpdatedAt, staleTime);
  const timeout = time + 1;
  __privateSet(this, _staleTimeoutId, timeoutManager.setTimeout(() => {
    if (!__privateGet(this, _currentResult).isStale) {
      this.updateResult();
    }
  }, timeout));
}, computeRefetchInterval_fn = function() {
  return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(__privateGet(this, _currentQuery)) : this.options.refetchInterval) ?? false;
}, updateRefetchInterval_fn = function(nextInterval) {
  __privateMethod(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
  __privateSet(this, _currentRefetchInterval, nextInterval);
  if (environmentManager.isServer() || resolveEnabled(this.options.enabled, __privateGet(this, _currentQuery)) === false || !isValidTimeout(__privateGet(this, _currentRefetchInterval)) || __privateGet(this, _currentRefetchInterval) === 0) {
    return;
  }
  __privateSet(this, _refetchIntervalId, timeoutManager.setInterval(() => {
    if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
      __privateMethod(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }
  }, __privateGet(this, _currentRefetchInterval)));
}, updateTimers_fn = function() {
  __privateMethod(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
  __privateMethod(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, __privateMethod(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this));
}, clearStaleTimeout_fn = function() {
  if (__privateGet(this, _staleTimeoutId)) {
    timeoutManager.clearTimeout(__privateGet(this, _staleTimeoutId));
    __privateSet(this, _staleTimeoutId, void 0);
  }
}, clearRefetchInterval_fn = function() {
  if (__privateGet(this, _refetchIntervalId)) {
    timeoutManager.clearInterval(__privateGet(this, _refetchIntervalId));
    __privateSet(this, _refetchIntervalId, void 0);
  }
}, updateQuery_fn = function() {
  const query = __privateGet(this, _client).getQueryCache().build(__privateGet(this, _client), this.options);
  if (query === __privateGet(this, _currentQuery)) {
    return;
  }
  const prevQuery = __privateGet(this, _currentQuery);
  __privateSet(this, _currentQuery, query);
  __privateSet(this, _currentQueryInitialState, query.state);
  if (this.hasListeners()) {
    prevQuery == null ? void 0 : prevQuery.removeObserver(this);
    query.addObserver(this);
  }
}, notify_fn = function(notifyOptions) {
  notifyManager.batch(() => {
    if (notifyOptions.listeners) {
      this.listeners.forEach((listener) => {
        listener(__privateGet(this, _currentResult));
      });
    }
    __privateGet(this, _client).getQueryCache().notify({
      query: __privateGet(this, _currentQuery),
      type: "observerResultsUpdated"
    });
  });
}, _a);
function shouldLoadOnMount(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (resolveEnabled(options.enabled, query) !== false && resolveStaleTime(options.staleTime, query) !== "static") {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return (query !== prevQuery || resolveEnabled(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return resolveEnabled(options.enabled, query) !== false && query.isStaleByTime(resolveStaleTime(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}
var IsRestoringContext = reactExports.createContext(false);
var useIsRestoring = () => reactExports.useContext(IsRestoringContext);
IsRestoringContext.Provider;
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = reactExports.createContext(createValue());
var useQueryErrorResetBoundary = () => reactExports.useContext(QueryErrorResetBoundaryContext);
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query) => {
  const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? shouldThrowError(options.throwOnError, [query.state.error, query]) : options.throwOnError;
  if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
    if (!errorResetBoundary.isReset()) {
      options.retryOnMount = false;
    }
  }
};
var useClearResetErrorBoundary = (errorResetBoundary) => {
  reactExports.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
};
var getHasError = ({
  result,
  errorResetBoundary,
  throwOnError,
  query,
  suspense
}) => {
  return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || shouldThrowError(throwOnError, [result.error, query]));
};
var ensureSuspenseTimers = (defaultedOptions) => {
  if (defaultedOptions.suspense) {
    const MIN_SUSPENSE_TIME_MS = 1e3;
    const clamp = (value) => value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
    const originalStaleTime = defaultedOptions.staleTime;
    defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args) => clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
    if (typeof defaultedOptions.gcTime === "number") {
      defaultedOptions.gcTime = Math.max(
        defaultedOptions.gcTime,
        MIN_SUSPENSE_TIME_MS
      );
    }
  }
};
var willFetch = (result, isRestoring) => result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result) => (defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary) => observer.fetchOptimistic(defaultedOptions).catch(() => {
  errorResetBoundary.clearReset();
});
function useBaseQuery(options, Observer, queryClient) {
  var _a2, _b, _c, _d;
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const client = useQueryClient();
  const defaultedOptions = client.defaultQueryOptions(options);
  (_b = (_a2 = client.getDefaultOptions().queries) == null ? void 0 : _a2._experimental_beforeQuery) == null ? void 0 : _b.call(
    _a2,
    defaultedOptions
  );
  const query = client.getQueryCache().get(defaultedOptions.queryHash);
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  ensureSuspenseTimers(defaultedOptions);
  ensurePreventErrorBoundaryRetry(defaultedOptions, errorResetBoundary, query);
  useClearResetErrorBoundary(errorResetBoundary);
  const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
  const [observer] = reactExports.useState(
    () => new Observer(
      client,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  const shouldSubscribe = !isRestoring && options.subscribed !== false;
  reactExports.useSyncExternalStore(
    reactExports.useCallback(
      (onStoreChange) => {
        const unsubscribe = shouldSubscribe ? observer.subscribe(notifyManager.batchCalls(onStoreChange)) : noop;
        observer.updateResult();
        return unsubscribe;
      },
      [observer, shouldSubscribe]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  reactExports.useEffect(() => {
    observer.setOptions(defaultedOptions);
  }, [defaultedOptions, observer]);
  if (shouldSuspend(defaultedOptions, result)) {
    throw fetchOptimistic(defaultedOptions, observer, errorResetBoundary);
  }
  if (getHasError({
    result,
    errorResetBoundary,
    throwOnError: defaultedOptions.throwOnError,
    query,
    suspense: defaultedOptions.suspense
  })) {
    throw result.error;
  }
  (_d = (_c = client.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null ? void 0 : _d.call(
    _c,
    defaultedOptions,
    result
  );
  if (defaultedOptions.experimental_prefetchInRender && !environmentManager.isServer() && willFetch(result, isRestoring)) {
    const promise = isNewCacheEntry ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      fetchOptimistic(defaultedOptions, observer, errorResetBoundary)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      query == null ? void 0 : query.promise
    );
    promise == null ? void 0 : promise.catch(noop).finally(() => {
      observer.updateResult();
    });
  }
  return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
function useQuery(options, queryClient) {
  return useBaseQuery(options, QueryObserver);
}
const ACTOR_QUERY_KEY = "actor";
function useActor(createActor2) {
  const { identity, isAuthenticated } = useInternetIdentity();
  const queryClient = useQueryClient();
  const actorQuery = useQuery({
    queryKey: [ACTOR_QUERY_KEY, identity == null ? void 0 : identity.getPrincipal().toString()],
    queryFn: async () => {
      if (!isAuthenticated) {
        return await createActorWithConfig(createActor2);
      }
      const actor = await createActorWithConfig(createActor2, {
        agentOptions: { identity }
      });
      return actor;
    },
    // Only refetch when identity changes
    staleTime: Number.POSITIVE_INFINITY,
    // This will cause the actor to be recreated when the identity changes
    enabled: true
  });
  reactExports.useEffect(() => {
    if (actorQuery.data) {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
      queryClient.refetchQueries({
        predicate: (query) => {
          return !query.queryKey.includes(ACTOR_QUERY_KEY);
        }
      });
    }
  }, [actorQuery.data, queryClient]);
  return {
    actor: actorQuery.data || null,
    isFetching: actorQuery.isFetching
  };
}
const AddOn = Record({
  "name": Text,
  "pricePerPerson": Nat
});
const PaymentStatus = Variant({
  "Paid": Null,
  "Cancelled": Null,
  "Pending": Null
});
const UserId = Principal;
const Timestamp = Int;
const MealPreference = Variant({
  "Veg": Null,
  "NonVeg": Null
});
const TravelerInfo = Record({
  "age": Nat,
  "mealPreference": MealPreference,
  "name": Text,
  "medicalConditions": Text,
  "emergencyContact": Text,
  "gender": Text,
  "tshirtSize": Text
});
const Slug = Text;
const BookingPublic = Record({
  "id": Nat,
  "paymentStatus": PaymentStatus,
  "userId": UserId,
  "createdAt": Timestamp,
  "travelers": Vec(TravelerInfo),
  "totalAmount": Nat,
  "addOns": Vec(AddOn),
  "trekSlug": Slug,
  "batchId": Nat,
  "stripeSessionId": Opt(Text)
});
const LoyaltyTier = Variant({
  "SummitMaster": Null,
  "Explorer": Null,
  "Trailblazer": Null
});
const UserProfilePublic = Record({
  "principal": UserId,
  "referralCode": Text,
  "city": Text,
  "name": Text,
  "createdAt": Timestamp,
  "email": Text,
  "phone": Text,
  "wishlist": Vec(Slug),
  "referralCredits": Nat,
  "loyaltyTier": LoyaltyTier,
  "totalTreksCompleted": Nat
});
const Difficulty = Variant({
  "Easy": Null,
  "Extreme": Null,
  "Difficult": Null,
  "Moderate": Null
});
const Trek = Record({
  "id": Nat,
  "region": Text,
  "durationDays": Nat,
  "startingPoint": Text,
  "tagline": Text,
  "durationNights": Nat,
  "difficulty": Difficulty,
  "name": Text,
  "bestTime": Text,
  "slug": Slug,
  "heroImage": Text,
  "nearestAirport": Text,
  "trekDistance": Nat,
  "shortDescription": Text,
  "isFeatured": Bool,
  "maxAltitude": Nat,
  "basePrice": Nat,
  "nearestRailhead": Text
});
const Yatra = Record({
  "id": Nat,
  "durationDays": Nat,
  "tagline": Text,
  "name": Text,
  "slug": Slug,
  "heroImage": Text,
  "shortDescription": Text,
  "category": Text,
  "basePrice": Nat,
  "nextDeparture": Text
});
const BatchStatus = Variant({
  "Full": Null,
  "Open": Null,
  "Cancelled": Null,
  "Completed": Null
});
const BatchPublic = Record({
  "id": Nat,
  "status": BatchStatus,
  "endDate": Text,
  "guideId": Text,
  "pricePerPerson": Nat,
  "totalSeats": Nat,
  "bookedSeats": Nat,
  "isSoldOut": Bool,
  "trekSlug": Slug,
  "seatsAvailable": Nat,
  "startDate": Text
});
const BatchAvailability = Record({
  "isSoldOut": Bool,
  "batchId": Nat,
  "seatsAvailable": Nat
});
const BlogCategory = Variant({
  "Stories": Null,
  "Gear": Null,
  "TrekTips": Null,
  "YatraGuides": Null
});
const BlogPostPublic = Record({
  "id": Nat,
  "title": Text,
  "content": Text,
  "views": Nat,
  "slug": Slug,
  "tags": Vec(Text),
  "publishedAt": Timestamp,
  "author": Text,
  "readTime": Nat,
  "heroImage": Text,
  "excerpt": Text,
  "category": BlogCategory
});
const CorporateLead = Record({
  "id": Nat,
  "contactName": Text,
  "createdAt": Timestamp,
  "headcount": Nat,
  "email": Text,
  "preferredDates": Text,
  "message": Text,
  "preferredTrek": Text,
  "companyName": Text,
  "phone": Text
});
const FaqVotesPublic = Record({
  "notHelpful": Nat,
  "helpful": Nat
});
const ReviewPublic = Record({
  "id": Nat,
  "userCity": Text,
  "userName": Text,
  "foodRating": Nat,
  "verified": Bool,
  "userId": UserId,
  "createdAt": Timestamp,
  "reviewText": Text,
  "trekSlug": Slug,
  "safetyRating": Nat,
  "rating": Nat,
  "helpfulVotes": Nat,
  "guideRating": Nat
});
const NewsletterPreference = Variant({
  "BlogPosts": Null,
  "Offers": Null,
  "WeatherAlerts": Null,
  "NewBatches": Null
});
Service({
  "addToWishlist": Func([Text], [Bool], []),
  "calculateGroupPrice": Func(
    [Text, Nat, Vec(AddOn), Nat],
    [Nat],
    ["query"]
  ),
  "cancelBooking": Func(
    [Nat],
    [Variant({ "ok": Text, "err": Text })],
    []
  ),
  "confirmBookingPayment": Func(
    [Nat, Text],
    [Variant({ "ok": BookingPublic, "err": Text })],
    []
  ),
  "createBooking": Func(
    [Nat, Nat, Vec(AddOn), Vec(TravelerInfo), Bool],
    [
      Variant({
        "ok": Record({
          "bookingId": Nat,
          "checkoutUrl": Text,
          "sessionId": Text
        }),
        "err": Text
      })
    ],
    []
  ),
  "createOrUpdateProfile": Func(
    [Text, Text, Text, Text],
    [UserProfilePublic],
    []
  ),
  "getAllTreks": Func([], [Vec(Trek)], ["query"]),
  "getAllYatras": Func([], [Vec(Yatra)], ["query"]),
  "getAvailability": Func(
    [Nat],
    [
      Record({
        "total": Nat,
        "reserved": Nat,
        "available": Nat,
        "soldOut": Bool,
        "percentFilled": Nat
      })
    ],
    ["query"]
  ),
  "getAvailableBatches": Func([], [Vec(BatchPublic)], ["query"]),
  "getAverageRating": Func([Text], [Nat], ["query"]),
  "getBatchAvailability": Func(
    [Nat],
    [Opt(BatchAvailability)],
    ["query"]
  ),
  "getBatchById": Func([Nat], [Opt(BatchPublic)], ["query"]),
  "getBatchesByTrek": Func([Text], [Vec(BatchPublic)], ["query"]),
  "getBlogByCategory": Func(
    [BlogCategory],
    [Vec(BlogPostPublic)],
    ["query"]
  ),
  "getBlogBySlug": Func([Text], [Opt(BlogPostPublic)], ["query"]),
  "getBlogPosts": Func([], [Vec(BlogPostPublic)], ["query"]),
  "getBookingById": Func([Nat], [Opt(BookingPublic)], ["query"]),
  "getBookingsByUser": Func([], [Vec(BookingPublic)], ["query"]),
  "getCorporateLeads": Func([], [Vec(CorporateLead)], []),
  "getFaqVotes": Func([Text, Nat], [FaqVotesPublic], ["query"]),
  "getFeaturedTreks": Func([], [Vec(Trek)], ["query"]),
  "getReviewsByTrek": Func([Text], [Vec(ReviewPublic)], ["query"]),
  "getStripePublicKey": Func([], [Text], ["query"]),
  "getSubscriberCount": Func([], [Nat], ["query"]),
  "getTrekBySlug": Func([Text], [Opt(Trek)], ["query"]),
  "getTreksByDifficulty": Func([Difficulty], [Vec(Trek)], ["query"]),
  "getUserProfile": Func([], [Opt(UserProfilePublic)], ["query"]),
  "getYatraBySlug": Func([Text], [Opt(Yatra)], ["query"]),
  "incrementBlogViews": Func([Text], [Bool], []),
  "removeFromWishlist": Func([Text], [Bool], []),
  "setStripeSecretKey": Func([Text, Text], [], []),
  "submitCorporateLead": Func(
    [
      Text,
      Text,
      Text,
      Text,
      Nat,
      Text,
      Text,
      Text
    ],
    [CorporateLead],
    []
  ),
  "submitReview": Func(
    [
      Text,
      Text,
      Text,
      Nat,
      Nat,
      Nat,
      Nat,
      Text
    ],
    [ReviewPublic],
    []
  ),
  "subscribe": Func(
    [Text, Vec(NewsletterPreference)],
    [Bool],
    []
  ),
  "unsubscribe": Func([Text], [Bool], []),
  "updatePaymentStatus": Func([Nat, PaymentStatus], [Bool], []),
  "voteFaq": Func([Text, Nat, Bool], [Bool], []),
  "voteHelpful": Func([Nat], [Bool], [])
});
const idlFactory = ({ IDL }) => {
  const AddOn2 = IDL.Record({ "name": IDL.Text, "pricePerPerson": IDL.Nat });
  const PaymentStatus2 = IDL.Variant({
    "Paid": IDL.Null,
    "Cancelled": IDL.Null,
    "Pending": IDL.Null
  });
  const UserId2 = IDL.Principal;
  const Timestamp2 = IDL.Int;
  const MealPreference2 = IDL.Variant({ "Veg": IDL.Null, "NonVeg": IDL.Null });
  const TravelerInfo2 = IDL.Record({
    "age": IDL.Nat,
    "mealPreference": MealPreference2,
    "name": IDL.Text,
    "medicalConditions": IDL.Text,
    "emergencyContact": IDL.Text,
    "gender": IDL.Text,
    "tshirtSize": IDL.Text
  });
  const Slug2 = IDL.Text;
  const BookingPublic2 = IDL.Record({
    "id": IDL.Nat,
    "paymentStatus": PaymentStatus2,
    "userId": UserId2,
    "createdAt": Timestamp2,
    "travelers": IDL.Vec(TravelerInfo2),
    "totalAmount": IDL.Nat,
    "addOns": IDL.Vec(AddOn2),
    "trekSlug": Slug2,
    "batchId": IDL.Nat,
    "stripeSessionId": IDL.Opt(IDL.Text)
  });
  const LoyaltyTier2 = IDL.Variant({
    "SummitMaster": IDL.Null,
    "Explorer": IDL.Null,
    "Trailblazer": IDL.Null
  });
  const UserProfilePublic2 = IDL.Record({
    "principal": UserId2,
    "referralCode": IDL.Text,
    "city": IDL.Text,
    "name": IDL.Text,
    "createdAt": Timestamp2,
    "email": IDL.Text,
    "phone": IDL.Text,
    "wishlist": IDL.Vec(Slug2),
    "referralCredits": IDL.Nat,
    "loyaltyTier": LoyaltyTier2,
    "totalTreksCompleted": IDL.Nat
  });
  const Difficulty2 = IDL.Variant({
    "Easy": IDL.Null,
    "Extreme": IDL.Null,
    "Difficult": IDL.Null,
    "Moderate": IDL.Null
  });
  const Trek2 = IDL.Record({
    "id": IDL.Nat,
    "region": IDL.Text,
    "durationDays": IDL.Nat,
    "startingPoint": IDL.Text,
    "tagline": IDL.Text,
    "durationNights": IDL.Nat,
    "difficulty": Difficulty2,
    "name": IDL.Text,
    "bestTime": IDL.Text,
    "slug": Slug2,
    "heroImage": IDL.Text,
    "nearestAirport": IDL.Text,
    "trekDistance": IDL.Nat,
    "shortDescription": IDL.Text,
    "isFeatured": IDL.Bool,
    "maxAltitude": IDL.Nat,
    "basePrice": IDL.Nat,
    "nearestRailhead": IDL.Text
  });
  const Yatra2 = IDL.Record({
    "id": IDL.Nat,
    "durationDays": IDL.Nat,
    "tagline": IDL.Text,
    "name": IDL.Text,
    "slug": Slug2,
    "heroImage": IDL.Text,
    "shortDescription": IDL.Text,
    "category": IDL.Text,
    "basePrice": IDL.Nat,
    "nextDeparture": IDL.Text
  });
  const BatchStatus2 = IDL.Variant({
    "Full": IDL.Null,
    "Open": IDL.Null,
    "Cancelled": IDL.Null,
    "Completed": IDL.Null
  });
  const BatchPublic2 = IDL.Record({
    "id": IDL.Nat,
    "status": BatchStatus2,
    "endDate": IDL.Text,
    "guideId": IDL.Text,
    "pricePerPerson": IDL.Nat,
    "totalSeats": IDL.Nat,
    "bookedSeats": IDL.Nat,
    "isSoldOut": IDL.Bool,
    "trekSlug": Slug2,
    "seatsAvailable": IDL.Nat,
    "startDate": IDL.Text
  });
  const BatchAvailability2 = IDL.Record({
    "isSoldOut": IDL.Bool,
    "batchId": IDL.Nat,
    "seatsAvailable": IDL.Nat
  });
  const BlogCategory2 = IDL.Variant({
    "Stories": IDL.Null,
    "Gear": IDL.Null,
    "TrekTips": IDL.Null,
    "YatraGuides": IDL.Null
  });
  const BlogPostPublic2 = IDL.Record({
    "id": IDL.Nat,
    "title": IDL.Text,
    "content": IDL.Text,
    "views": IDL.Nat,
    "slug": Slug2,
    "tags": IDL.Vec(IDL.Text),
    "publishedAt": Timestamp2,
    "author": IDL.Text,
    "readTime": IDL.Nat,
    "heroImage": IDL.Text,
    "excerpt": IDL.Text,
    "category": BlogCategory2
  });
  const CorporateLead2 = IDL.Record({
    "id": IDL.Nat,
    "contactName": IDL.Text,
    "createdAt": Timestamp2,
    "headcount": IDL.Nat,
    "email": IDL.Text,
    "preferredDates": IDL.Text,
    "message": IDL.Text,
    "preferredTrek": IDL.Text,
    "companyName": IDL.Text,
    "phone": IDL.Text
  });
  const FaqVotesPublic2 = IDL.Record({
    "notHelpful": IDL.Nat,
    "helpful": IDL.Nat
  });
  const ReviewPublic2 = IDL.Record({
    "id": IDL.Nat,
    "userCity": IDL.Text,
    "userName": IDL.Text,
    "foodRating": IDL.Nat,
    "verified": IDL.Bool,
    "userId": UserId2,
    "createdAt": Timestamp2,
    "reviewText": IDL.Text,
    "trekSlug": Slug2,
    "safetyRating": IDL.Nat,
    "rating": IDL.Nat,
    "helpfulVotes": IDL.Nat,
    "guideRating": IDL.Nat
  });
  const NewsletterPreference2 = IDL.Variant({
    "BlogPosts": IDL.Null,
    "Offers": IDL.Null,
    "WeatherAlerts": IDL.Null,
    "NewBatches": IDL.Null
  });
  return IDL.Service({
    "addToWishlist": IDL.Func([IDL.Text], [IDL.Bool], []),
    "calculateGroupPrice": IDL.Func(
      [IDL.Text, IDL.Nat, IDL.Vec(AddOn2), IDL.Nat],
      [IDL.Nat],
      ["query"]
    ),
    "cancelBooking": IDL.Func(
      [IDL.Nat],
      [IDL.Variant({ "ok": IDL.Text, "err": IDL.Text })],
      []
    ),
    "confirmBookingPayment": IDL.Func(
      [IDL.Nat, IDL.Text],
      [IDL.Variant({ "ok": BookingPublic2, "err": IDL.Text })],
      []
    ),
    "createBooking": IDL.Func(
      [IDL.Nat, IDL.Nat, IDL.Vec(AddOn2), IDL.Vec(TravelerInfo2), IDL.Bool],
      [
        IDL.Variant({
          "ok": IDL.Record({
            "bookingId": IDL.Nat,
            "checkoutUrl": IDL.Text,
            "sessionId": IDL.Text
          }),
          "err": IDL.Text
        })
      ],
      []
    ),
    "createOrUpdateProfile": IDL.Func(
      [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
      [UserProfilePublic2],
      []
    ),
    "getAllTreks": IDL.Func([], [IDL.Vec(Trek2)], ["query"]),
    "getAllYatras": IDL.Func([], [IDL.Vec(Yatra2)], ["query"]),
    "getAvailability": IDL.Func(
      [IDL.Nat],
      [
        IDL.Record({
          "total": IDL.Nat,
          "reserved": IDL.Nat,
          "available": IDL.Nat,
          "soldOut": IDL.Bool,
          "percentFilled": IDL.Nat
        })
      ],
      ["query"]
    ),
    "getAvailableBatches": IDL.Func([], [IDL.Vec(BatchPublic2)], ["query"]),
    "getAverageRating": IDL.Func([IDL.Text], [IDL.Nat], ["query"]),
    "getBatchAvailability": IDL.Func(
      [IDL.Nat],
      [IDL.Opt(BatchAvailability2)],
      ["query"]
    ),
    "getBatchById": IDL.Func([IDL.Nat], [IDL.Opt(BatchPublic2)], ["query"]),
    "getBatchesByTrek": IDL.Func(
      [IDL.Text],
      [IDL.Vec(BatchPublic2)],
      ["query"]
    ),
    "getBlogByCategory": IDL.Func(
      [BlogCategory2],
      [IDL.Vec(BlogPostPublic2)],
      ["query"]
    ),
    "getBlogBySlug": IDL.Func(
      [IDL.Text],
      [IDL.Opt(BlogPostPublic2)],
      ["query"]
    ),
    "getBlogPosts": IDL.Func([], [IDL.Vec(BlogPostPublic2)], ["query"]),
    "getBookingById": IDL.Func([IDL.Nat], [IDL.Opt(BookingPublic2)], ["query"]),
    "getBookingsByUser": IDL.Func([], [IDL.Vec(BookingPublic2)], ["query"]),
    "getCorporateLeads": IDL.Func([], [IDL.Vec(CorporateLead2)], []),
    "getFaqVotes": IDL.Func([IDL.Text, IDL.Nat], [FaqVotesPublic2], ["query"]),
    "getFeaturedTreks": IDL.Func([], [IDL.Vec(Trek2)], ["query"]),
    "getReviewsByTrek": IDL.Func(
      [IDL.Text],
      [IDL.Vec(ReviewPublic2)],
      ["query"]
    ),
    "getStripePublicKey": IDL.Func([], [IDL.Text], ["query"]),
    "getSubscriberCount": IDL.Func([], [IDL.Nat], ["query"]),
    "getTrekBySlug": IDL.Func([IDL.Text], [IDL.Opt(Trek2)], ["query"]),
    "getTreksByDifficulty": IDL.Func([Difficulty2], [IDL.Vec(Trek2)], ["query"]),
    "getUserProfile": IDL.Func([], [IDL.Opt(UserProfilePublic2)], ["query"]),
    "getYatraBySlug": IDL.Func([IDL.Text], [IDL.Opt(Yatra2)], ["query"]),
    "incrementBlogViews": IDL.Func([IDL.Text], [IDL.Bool], []),
    "removeFromWishlist": IDL.Func([IDL.Text], [IDL.Bool], []),
    "setStripeSecretKey": IDL.Func([IDL.Text, IDL.Text], [], []),
    "submitCorporateLead": IDL.Func(
      [
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Nat,
        IDL.Text,
        IDL.Text,
        IDL.Text
      ],
      [CorporateLead2],
      []
    ),
    "submitReview": IDL.Func(
      [
        IDL.Text,
        IDL.Text,
        IDL.Text,
        IDL.Nat,
        IDL.Nat,
        IDL.Nat,
        IDL.Nat,
        IDL.Text
      ],
      [ReviewPublic2],
      []
    ),
    "subscribe": IDL.Func(
      [IDL.Text, IDL.Vec(NewsletterPreference2)],
      [IDL.Bool],
      []
    ),
    "unsubscribe": IDL.Func([IDL.Text], [IDL.Bool], []),
    "updatePaymentStatus": IDL.Func([IDL.Nat, PaymentStatus2], [IDL.Bool], []),
    "voteFaq": IDL.Func([IDL.Text, IDL.Nat, IDL.Bool], [IDL.Bool], []),
    "voteHelpful": IDL.Func([IDL.Nat], [IDL.Bool], [])
  });
};
function record_opt_to_undefined(arg) {
  return arg == null ? void 0 : arg;
}
class Backend {
  constructor(actor, _uploadFile, _downloadFile, processError) {
    this.actor = actor;
    this._uploadFile = _uploadFile;
    this._downloadFile = _downloadFile;
    this.processError = processError;
  }
  async addToWishlist(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.addToWishlist(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.addToWishlist(arg0);
      return result;
    }
  }
  async calculateGroupPrice(arg0, arg1, arg2, arg3) {
    if (this.processError) {
      try {
        const result = await this.actor.calculateGroupPrice(arg0, arg1, arg2, arg3);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.calculateGroupPrice(arg0, arg1, arg2, arg3);
      return result;
    }
  }
  async cancelBooking(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.cancelBooking(arg0);
        return from_candid_variant_n1(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.cancelBooking(arg0);
      return from_candid_variant_n1(this._uploadFile, this._downloadFile, result);
    }
  }
  async confirmBookingPayment(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.confirmBookingPayment(arg0, arg1);
        return from_candid_variant_n2(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.confirmBookingPayment(arg0, arg1);
      return from_candid_variant_n2(this._uploadFile, this._downloadFile, result);
    }
  }
  async createBooking(arg0, arg1, arg2, arg3, arg4) {
    if (this.processError) {
      try {
        const result = await this.actor.createBooking(arg0, arg1, arg2, to_candid_vec_n13(this._uploadFile, this._downloadFile, arg3), arg4);
        return from_candid_variant_n18(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.createBooking(arg0, arg1, arg2, to_candid_vec_n13(this._uploadFile, this._downloadFile, arg3), arg4);
      return from_candid_variant_n18(this._uploadFile, this._downloadFile, result);
    }
  }
  async createOrUpdateProfile(arg0, arg1, arg2, arg3) {
    if (this.processError) {
      try {
        const result = await this.actor.createOrUpdateProfile(arg0, arg1, arg2, arg3);
        return from_candid_UserProfilePublic_n19(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.createOrUpdateProfile(arg0, arg1, arg2, arg3);
      return from_candid_UserProfilePublic_n19(this._uploadFile, this._downloadFile, result);
    }
  }
  async getAllTreks() {
    if (this.processError) {
      try {
        const result = await this.actor.getAllTreks();
        return from_candid_vec_n23(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAllTreks();
      return from_candid_vec_n23(this._uploadFile, this._downloadFile, result);
    }
  }
  async getAllYatras() {
    if (this.processError) {
      try {
        const result = await this.actor.getAllYatras();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAllYatras();
      return result;
    }
  }
  async getAvailability(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getAvailability(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAvailability(arg0);
      return result;
    }
  }
  async getAvailableBatches() {
    if (this.processError) {
      try {
        const result = await this.actor.getAvailableBatches();
        return from_candid_vec_n28(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAvailableBatches();
      return from_candid_vec_n28(this._uploadFile, this._downloadFile, result);
    }
  }
  async getAverageRating(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getAverageRating(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getAverageRating(arg0);
      return result;
    }
  }
  async getBatchAvailability(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getBatchAvailability(arg0);
        return from_candid_opt_n33(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBatchAvailability(arg0);
      return from_candid_opt_n33(this._uploadFile, this._downloadFile, result);
    }
  }
  async getBatchById(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getBatchById(arg0);
        return from_candid_opt_n34(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBatchById(arg0);
      return from_candid_opt_n34(this._uploadFile, this._downloadFile, result);
    }
  }
  async getBatchesByTrek(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getBatchesByTrek(arg0);
        return from_candid_vec_n28(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBatchesByTrek(arg0);
      return from_candid_vec_n28(this._uploadFile, this._downloadFile, result);
    }
  }
  async getBlogByCategory(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getBlogByCategory(to_candid_BlogCategory_n35(this._uploadFile, this._downloadFile, arg0));
        return from_candid_vec_n37(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBlogByCategory(to_candid_BlogCategory_n35(this._uploadFile, this._downloadFile, arg0));
      return from_candid_vec_n37(this._uploadFile, this._downloadFile, result);
    }
  }
  async getBlogBySlug(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getBlogBySlug(arg0);
        return from_candid_opt_n42(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBlogBySlug(arg0);
      return from_candid_opt_n42(this._uploadFile, this._downloadFile, result);
    }
  }
  async getBlogPosts() {
    if (this.processError) {
      try {
        const result = await this.actor.getBlogPosts();
        return from_candid_vec_n37(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBlogPosts();
      return from_candid_vec_n37(this._uploadFile, this._downloadFile, result);
    }
  }
  async getBookingById(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getBookingById(arg0);
        return from_candid_opt_n43(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBookingById(arg0);
      return from_candid_opt_n43(this._uploadFile, this._downloadFile, result);
    }
  }
  async getBookingsByUser() {
    if (this.processError) {
      try {
        const result = await this.actor.getBookingsByUser();
        return from_candid_vec_n44(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getBookingsByUser();
      return from_candid_vec_n44(this._uploadFile, this._downloadFile, result);
    }
  }
  async getCorporateLeads() {
    if (this.processError) {
      try {
        const result = await this.actor.getCorporateLeads();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getCorporateLeads();
      return result;
    }
  }
  async getFaqVotes(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.getFaqVotes(arg0, arg1);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getFaqVotes(arg0, arg1);
      return result;
    }
  }
  async getFeaturedTreks() {
    if (this.processError) {
      try {
        const result = await this.actor.getFeaturedTreks();
        return from_candid_vec_n23(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getFeaturedTreks();
      return from_candid_vec_n23(this._uploadFile, this._downloadFile, result);
    }
  }
  async getReviewsByTrek(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getReviewsByTrek(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getReviewsByTrek(arg0);
      return result;
    }
  }
  async getStripePublicKey() {
    if (this.processError) {
      try {
        const result = await this.actor.getStripePublicKey();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getStripePublicKey();
      return result;
    }
  }
  async getSubscriberCount() {
    if (this.processError) {
      try {
        const result = await this.actor.getSubscriberCount();
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getSubscriberCount();
      return result;
    }
  }
  async getTrekBySlug(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getTrekBySlug(arg0);
        return from_candid_opt_n45(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getTrekBySlug(arg0);
      return from_candid_opt_n45(this._uploadFile, this._downloadFile, result);
    }
  }
  async getTreksByDifficulty(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getTreksByDifficulty(to_candid_Difficulty_n46(this._uploadFile, this._downloadFile, arg0));
        return from_candid_vec_n23(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getTreksByDifficulty(to_candid_Difficulty_n46(this._uploadFile, this._downloadFile, arg0));
      return from_candid_vec_n23(this._uploadFile, this._downloadFile, result);
    }
  }
  async getUserProfile() {
    if (this.processError) {
      try {
        const result = await this.actor.getUserProfile();
        return from_candid_opt_n48(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getUserProfile();
      return from_candid_opt_n48(this._uploadFile, this._downloadFile, result);
    }
  }
  async getYatraBySlug(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.getYatraBySlug(arg0);
        return from_candid_opt_n49(this._uploadFile, this._downloadFile, result);
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.getYatraBySlug(arg0);
      return from_candid_opt_n49(this._uploadFile, this._downloadFile, result);
    }
  }
  async incrementBlogViews(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.incrementBlogViews(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.incrementBlogViews(arg0);
      return result;
    }
  }
  async removeFromWishlist(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.removeFromWishlist(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.removeFromWishlist(arg0);
      return result;
    }
  }
  async setStripeSecretKey(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.setStripeSecretKey(arg0, arg1);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.setStripeSecretKey(arg0, arg1);
      return result;
    }
  }
  async submitCorporateLead(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    if (this.processError) {
      try {
        const result = await this.actor.submitCorporateLead(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.submitCorporateLead(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
      return result;
    }
  }
  async submitReview(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    if (this.processError) {
      try {
        const result = await this.actor.submitReview(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.submitReview(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
      return result;
    }
  }
  async subscribe(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.subscribe(arg0, to_candid_vec_n50(this._uploadFile, this._downloadFile, arg1));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.subscribe(arg0, to_candid_vec_n50(this._uploadFile, this._downloadFile, arg1));
      return result;
    }
  }
  async unsubscribe(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.unsubscribe(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.unsubscribe(arg0);
      return result;
    }
  }
  async updatePaymentStatus(arg0, arg1) {
    if (this.processError) {
      try {
        const result = await this.actor.updatePaymentStatus(arg0, to_candid_PaymentStatus_n53(this._uploadFile, this._downloadFile, arg1));
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.updatePaymentStatus(arg0, to_candid_PaymentStatus_n53(this._uploadFile, this._downloadFile, arg1));
      return result;
    }
  }
  async voteFaq(arg0, arg1, arg2) {
    if (this.processError) {
      try {
        const result = await this.actor.voteFaq(arg0, arg1, arg2);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.voteFaq(arg0, arg1, arg2);
      return result;
    }
  }
  async voteHelpful(arg0) {
    if (this.processError) {
      try {
        const result = await this.actor.voteHelpful(arg0);
        return result;
      } catch (e) {
        this.processError(e);
        throw new Error("unreachable");
      }
    } else {
      const result = await this.actor.voteHelpful(arg0);
      return result;
    }
  }
}
function from_candid_BatchPublic_n29(_uploadFile, _downloadFile, value) {
  return from_candid_record_n30(_uploadFile, _downloadFile, value);
}
function from_candid_BatchStatus_n31(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n32(_uploadFile, _downloadFile, value);
}
function from_candid_BlogCategory_n40(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n41(_uploadFile, _downloadFile, value);
}
function from_candid_BlogPostPublic_n38(_uploadFile, _downloadFile, value) {
  return from_candid_record_n39(_uploadFile, _downloadFile, value);
}
function from_candid_BookingPublic_n3(_uploadFile, _downloadFile, value) {
  return from_candid_record_n4(_uploadFile, _downloadFile, value);
}
function from_candid_Difficulty_n26(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n27(_uploadFile, _downloadFile, value);
}
function from_candid_LoyaltyTier_n21(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n22(_uploadFile, _downloadFile, value);
}
function from_candid_MealPreference_n10(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n11(_uploadFile, _downloadFile, value);
}
function from_candid_PaymentStatus_n5(_uploadFile, _downloadFile, value) {
  return from_candid_variant_n6(_uploadFile, _downloadFile, value);
}
function from_candid_TravelerInfo_n8(_uploadFile, _downloadFile, value) {
  return from_candid_record_n9(_uploadFile, _downloadFile, value);
}
function from_candid_Trek_n24(_uploadFile, _downloadFile, value) {
  return from_candid_record_n25(_uploadFile, _downloadFile, value);
}
function from_candid_UserProfilePublic_n19(_uploadFile, _downloadFile, value) {
  return from_candid_record_n20(_uploadFile, _downloadFile, value);
}
function from_candid_opt_n12(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_opt_n33(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_opt_n34(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_BatchPublic_n29(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n42(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_BlogPostPublic_n38(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n43(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_BookingPublic_n3(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n45(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_Trek_n24(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n48(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : from_candid_UserProfilePublic_n19(_uploadFile, _downloadFile, value[0]);
}
function from_candid_opt_n49(_uploadFile, _downloadFile, value) {
  return value.length === 0 ? null : value[0];
}
function from_candid_record_n20(_uploadFile, _downloadFile, value) {
  return {
    principal: value.principal,
    referralCode: value.referralCode,
    city: value.city,
    name: value.name,
    createdAt: value.createdAt,
    email: value.email,
    phone: value.phone,
    wishlist: value.wishlist,
    referralCredits: value.referralCredits,
    loyaltyTier: from_candid_LoyaltyTier_n21(_uploadFile, _downloadFile, value.loyaltyTier),
    totalTreksCompleted: value.totalTreksCompleted
  };
}
function from_candid_record_n25(_uploadFile, _downloadFile, value) {
  return {
    id: value.id,
    region: value.region,
    durationDays: value.durationDays,
    startingPoint: value.startingPoint,
    tagline: value.tagline,
    durationNights: value.durationNights,
    difficulty: from_candid_Difficulty_n26(_uploadFile, _downloadFile, value.difficulty),
    name: value.name,
    bestTime: value.bestTime,
    slug: value.slug,
    heroImage: value.heroImage,
    nearestAirport: value.nearestAirport,
    trekDistance: value.trekDistance,
    shortDescription: value.shortDescription,
    isFeatured: value.isFeatured,
    maxAltitude: value.maxAltitude,
    basePrice: value.basePrice,
    nearestRailhead: value.nearestRailhead
  };
}
function from_candid_record_n30(_uploadFile, _downloadFile, value) {
  return {
    id: value.id,
    status: from_candid_BatchStatus_n31(_uploadFile, _downloadFile, value.status),
    endDate: value.endDate,
    guideId: value.guideId,
    pricePerPerson: value.pricePerPerson,
    totalSeats: value.totalSeats,
    bookedSeats: value.bookedSeats,
    isSoldOut: value.isSoldOut,
    trekSlug: value.trekSlug,
    seatsAvailable: value.seatsAvailable,
    startDate: value.startDate
  };
}
function from_candid_record_n39(_uploadFile, _downloadFile, value) {
  return {
    id: value.id,
    title: value.title,
    content: value.content,
    views: value.views,
    slug: value.slug,
    tags: value.tags,
    publishedAt: value.publishedAt,
    author: value.author,
    readTime: value.readTime,
    heroImage: value.heroImage,
    excerpt: value.excerpt,
    category: from_candid_BlogCategory_n40(_uploadFile, _downloadFile, value.category)
  };
}
function from_candid_record_n4(_uploadFile, _downloadFile, value) {
  return {
    id: value.id,
    paymentStatus: from_candid_PaymentStatus_n5(_uploadFile, _downloadFile, value.paymentStatus),
    userId: value.userId,
    createdAt: value.createdAt,
    travelers: from_candid_vec_n7(_uploadFile, _downloadFile, value.travelers),
    totalAmount: value.totalAmount,
    addOns: value.addOns,
    trekSlug: value.trekSlug,
    batchId: value.batchId,
    stripeSessionId: record_opt_to_undefined(from_candid_opt_n12(_uploadFile, _downloadFile, value.stripeSessionId))
  };
}
function from_candid_record_n9(_uploadFile, _downloadFile, value) {
  return {
    age: value.age,
    mealPreference: from_candid_MealPreference_n10(_uploadFile, _downloadFile, value.mealPreference),
    name: value.name,
    medicalConditions: value.medicalConditions,
    emergencyContact: value.emergencyContact,
    gender: value.gender,
    tshirtSize: value.tshirtSize
  };
}
function from_candid_variant_n1(_uploadFile, _downloadFile, value) {
  return "ok" in value ? {
    __kind__: "ok",
    ok: value.ok
  } : "err" in value ? {
    __kind__: "err",
    err: value.err
  } : value;
}
function from_candid_variant_n11(_uploadFile, _downloadFile, value) {
  return "Veg" in value ? "Veg" : "NonVeg" in value ? "NonVeg" : value;
}
function from_candid_variant_n18(_uploadFile, _downloadFile, value) {
  return "ok" in value ? {
    __kind__: "ok",
    ok: value.ok
  } : "err" in value ? {
    __kind__: "err",
    err: value.err
  } : value;
}
function from_candid_variant_n2(_uploadFile, _downloadFile, value) {
  return "ok" in value ? {
    __kind__: "ok",
    ok: from_candid_BookingPublic_n3(_uploadFile, _downloadFile, value.ok)
  } : "err" in value ? {
    __kind__: "err",
    err: value.err
  } : value;
}
function from_candid_variant_n22(_uploadFile, _downloadFile, value) {
  return "SummitMaster" in value ? "SummitMaster" : "Explorer" in value ? "Explorer" : "Trailblazer" in value ? "Trailblazer" : value;
}
function from_candid_variant_n27(_uploadFile, _downloadFile, value) {
  return "Easy" in value ? "Easy" : "Extreme" in value ? "Extreme" : "Difficult" in value ? "Difficult" : "Moderate" in value ? "Moderate" : value;
}
function from_candid_variant_n32(_uploadFile, _downloadFile, value) {
  return "Full" in value ? "Full" : "Open" in value ? "Open" : "Cancelled" in value ? "Cancelled" : "Completed" in value ? "Completed" : value;
}
function from_candid_variant_n41(_uploadFile, _downloadFile, value) {
  return "Stories" in value ? "Stories" : "Gear" in value ? "Gear" : "TrekTips" in value ? "TrekTips" : "YatraGuides" in value ? "YatraGuides" : value;
}
function from_candid_variant_n6(_uploadFile, _downloadFile, value) {
  return "Paid" in value ? "Paid" : "Cancelled" in value ? "Cancelled" : "Pending" in value ? "Pending" : value;
}
function from_candid_vec_n23(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_Trek_n24(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n28(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_BatchPublic_n29(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n37(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_BlogPostPublic_n38(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n44(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_BookingPublic_n3(_uploadFile, _downloadFile, x));
}
function from_candid_vec_n7(_uploadFile, _downloadFile, value) {
  return value.map((x) => from_candid_TravelerInfo_n8(_uploadFile, _downloadFile, x));
}
function to_candid_BlogCategory_n35(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n36(_uploadFile, _downloadFile, value);
}
function to_candid_Difficulty_n46(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n47(_uploadFile, _downloadFile, value);
}
function to_candid_MealPreference_n16(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n17(_uploadFile, _downloadFile, value);
}
function to_candid_NewsletterPreference_n51(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n52(_uploadFile, _downloadFile, value);
}
function to_candid_PaymentStatus_n53(_uploadFile, _downloadFile, value) {
  return to_candid_variant_n54(_uploadFile, _downloadFile, value);
}
function to_candid_TravelerInfo_n14(_uploadFile, _downloadFile, value) {
  return to_candid_record_n15(_uploadFile, _downloadFile, value);
}
function to_candid_record_n15(_uploadFile, _downloadFile, value) {
  return {
    age: value.age,
    mealPreference: to_candid_MealPreference_n16(_uploadFile, _downloadFile, value.mealPreference),
    name: value.name,
    medicalConditions: value.medicalConditions,
    emergencyContact: value.emergencyContact,
    gender: value.gender,
    tshirtSize: value.tshirtSize
  };
}
function to_candid_variant_n17(_uploadFile, _downloadFile, value) {
  return value == "Veg" ? {
    Veg: null
  } : value == "NonVeg" ? {
    NonVeg: null
  } : value;
}
function to_candid_variant_n36(_uploadFile, _downloadFile, value) {
  return value == "Stories" ? {
    Stories: null
  } : value == "Gear" ? {
    Gear: null
  } : value == "TrekTips" ? {
    TrekTips: null
  } : value == "YatraGuides" ? {
    YatraGuides: null
  } : value;
}
function to_candid_variant_n47(_uploadFile, _downloadFile, value) {
  return value == "Easy" ? {
    Easy: null
  } : value == "Extreme" ? {
    Extreme: null
  } : value == "Difficult" ? {
    Difficult: null
  } : value == "Moderate" ? {
    Moderate: null
  } : value;
}
function to_candid_variant_n52(_uploadFile, _downloadFile, value) {
  return value == "BlogPosts" ? {
    BlogPosts: null
  } : value == "Offers" ? {
    Offers: null
  } : value == "WeatherAlerts" ? {
    WeatherAlerts: null
  } : value == "NewBatches" ? {
    NewBatches: null
  } : value;
}
function to_candid_variant_n54(_uploadFile, _downloadFile, value) {
  return value == "Paid" ? {
    Paid: null
  } : value == "Cancelled" ? {
    Cancelled: null
  } : value == "Pending" ? {
    Pending: null
  } : value;
}
function to_candid_vec_n13(_uploadFile, _downloadFile, value) {
  return value.map((x) => to_candid_TravelerInfo_n14(_uploadFile, _downloadFile, x));
}
function to_candid_vec_n50(_uploadFile, _downloadFile, value) {
  return value.map((x) => to_candid_NewsletterPreference_n51(_uploadFile, _downloadFile, x));
}
function createActor(canisterId, _uploadFile, _downloadFile, options = {}) {
  const agent = options.agent || HttpAgent.createSync({
    ...options.agentOptions
  });
  if (options.agent && options.agentOptions) {
    console.warn("Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent.");
  }
  const actor = Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions
  });
  return new Backend(actor, _uploadFile, _downloadFile, options.processError);
}
export {
  useQuery as a,
  createActor as c,
  useActor as u
};
