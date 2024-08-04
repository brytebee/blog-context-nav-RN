// import React, { useReducer } from "react";

// export default (reducer, actions, initState) => {
//   const [state, dispatch] = useReducer(reducer, initState);
//   const Context = React.createContext({});

//   // actions == { addBlog= (dispatch)=> return dispatch({}) }
//   const boundActions = {};
//   for (let key in actions) {
//     boundActions[key] = actions[key](dispatch);
//   }

//   const Provider = ({ children }) => {
//     return (
//       <Context.Provider value={{ state, ...boundActions }}>
//         {children}
//       </Context.Provider>
//     );
//   };

//   return { Context, Provider };
// };

// createDataContext.ts
import React, { useReducer, ReactNode, Dispatch } from "react";

// Define the type for the action
type Action = { type: string; payload?: any };

// Define the type for the state
type State = any;

// Define the type for the actions
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

    // Bind all actions with the dispatch
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
