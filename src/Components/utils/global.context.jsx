import { createContext, useMemo, useContext, useReducer, useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState)
export const useGlobalContext = () => useContext(ContextGlobal);

const contextReducer = (state, action) => {
  const themeAndUpdate ={
    'toggle': {...state, theme: state.theme === 'light'?'dark':'light'},
    'update': {...state, data: [...state.data, action.payload]}
  }
  return themeAndUpdate[action.type] ? themeAndUpdate[action.type] : state
};

const initialContextReducer = () =>({
  theme: 'light',
  data: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
})

export const ContextGlobalProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(contextReducer, initialState, initialContextReducer)
  const globalContextMemo = useMemo(() => {
    localStorage.setItem('favorites', JSON.stringify(state.data))
    return{state, dispatch}
    },[state])
  useEffect(() => {
    if (state.theme === 'dark' || (!('theme' in state) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [state])


  return (
    <ContextGlobal.Provider value={globalContextMemo}>
      {children}
    </ContextGlobal.Provider>
  );
};
