import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit';

// THIS NOT WORK ON RN BCS LOCALSTORAGE IS ASYNC
function persistenceInitialState<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const local = null;
  // localStorage.getItem(`persistence_redux_${options.name}`) || null;
  if (local) {
    const json = JSON.parse(local);
    options.initialState = { ...options.initialState, ...json };
  }
  const baseInitalState = { ...options.initialState };
  const saveLocalState = (state: any) => {
    const newLocalState: any = {};
    for (const keyprop of Object.keys(baseInitalState as any)) {
      newLocalState[keyprop] = state[keyprop];
    }
    // localStorage.setItem(
    //   `persistence_redux_${options.name}`,
    //   JSON.stringify(newLocalState)
    // );
  };

  for (const keyfn of Object.keys(options.reducers)) {
    const fn: any = options.reducers[keyfn];
    const newfn: any = (state: any, action: any) => {
      // console.log("custom action", action);
      fn(state, action);
      saveLocalState(state);
    };
    (options.reducers as any)[keyfn] = newfn;
  }
  return options;
}

export default persistenceInitialState;
