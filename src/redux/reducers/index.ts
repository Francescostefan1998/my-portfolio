// src/redux/reducers/index.ts

export interface State {
  // state interface
}
// src/redux/reducers/index.ts

const initialState: State = {
  // initial state
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    // cases

    default:
      return state;
  }
};
