import React,{createContext,useState} from 'react';


export const Context = createContext();


export const ContextProvider = (props) => {
    const [data,setData] = useState({height:0,width:0});

    const onChangeHeight = (e) => {
    setData({...data,height:e.target.value});
    }

const onChangeWidth = (e) => {
    setData({...data,width:e.target.value});
}

  return (
    <Context.Provider value={{data,onChangeHeight,onChangeWidth,setData}}>
      {props.children}
    </Context.Provider>
  )
}





