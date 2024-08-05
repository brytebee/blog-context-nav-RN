// createDataContext.ts
import React, { useReducer, ReactNode, Dispatch } from "react";

type Action = { type: string; payload?: any };
type State = any;
type Actions = {
  [key: string]: (dispatch: Dispatch<Action>) => (...args: any[]) => void;
};

interface ProviderProps {
  children: ReactNode;
}

const createDataContext = (
  reducer: (state: State, action: Action) => State,
  actions: Actions,
  initState: State
) => {
  const Context = React.createContext<{
    state: State;
    dispatch: Dispatch<Action>;
  }>({ state: initState, dispatch: () => null });

  const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const boundActions: { [key: string]: any } = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, dispatch, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
