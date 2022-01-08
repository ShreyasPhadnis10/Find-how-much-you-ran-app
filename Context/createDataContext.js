import React, { useReducer } from "react";

export default (reducer, action, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundAction = {};

    for (let key in action) {
      boundAction[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundAction }}>
        {children}
      </Context.Provider>
    );
  };

  return { Provider, Context };
};
