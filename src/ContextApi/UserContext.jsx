import { Children, createContext, useReducer } from "react";


export let UserContextApi = createContext();


const ContextProvider = ({children})=>{
    let intialState = {
        users:null,
        isLoading:false
    }
 
let[users,dispatch] = useReducer(intialState)








    return(
        <UserContextApi.Provider>
            {children}
        </UserContextApi.Provider>
    )
}
export default ContextProvider