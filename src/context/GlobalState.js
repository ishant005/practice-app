 import React,{createContext,useReducer} from 'react'
 import AppReducer from "./AppReducer";
//  Initial State
const InitialState={
   transactions:
   [
     {id:1,text:'FLower',amount:-20},
     {id:2,text:'Salary',amount:200},
     {id:3,text:'Book',amount:-10},
     {id:4,text:'Camera',amount:150},
   ]
}
// Create context
export const GlobalContext=createContext(InitialState);

// Provider Component
export const GlobalProvider=({children})=>{
  const [state,dispatch]=useReducer(AppReducer,InitialState)
 
//  Actions
function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    }) ;
}

function addTransaction(transaction){
  dispatch({
     type:"ADD_TRANSACTION",
     payload:transaction
  });
}
 
  return (
   <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
   }}>
     {children}
     </GlobalContext.Provider>
 )
}