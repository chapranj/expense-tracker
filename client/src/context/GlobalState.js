import { createContext, useEffect, useReducer } from "react"
import { AppReducer } from "./AppReducer"
import axios from "axios"


const initialState = {
    transactions: [],
    error: null,
    loading: true
}
export const GlobalContext = createContext(initialState)
//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getAllTransactions() {
        try {
            const response = await axios.get(`/api/v1/transactions`)

            dispatch({
                type: 'SET_TRANSACTIONS',
                payload: response.data.data
            });
            console.log(response)
            console.log(state.transactions)
        }
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    //Actions
    async function deleteTransaction(id) {
        try {
            await axios.delete(`api/v1/transactions/${id}`);
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }

    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type ': 'application/json'
            }
        }
        try {
            const res = await axios.post('api/v1/transactions', transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            });
        }
        catch(err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
       
    }


    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction, getAllTransactions, error: state.error, loading: state.loading }} >
            {children}
        </GlobalContext.Provider>
    )
}