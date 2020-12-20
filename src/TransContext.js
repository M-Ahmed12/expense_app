import React, { createContext, useReducer } from "react"
import TransactionReducer from './TransReducer';

const initialTransactions = []

export const TransactionContext = createContext(initialTransactions);



export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transobj) {
        dispatch({
            type: "ADD",
            payload: {
                amount: transobj.amount,
                desc: transobj.desc,
            }
        })
    }

    return (
        <TransactionContext.Provider
            value={{
                Transactions: state,
                addTransaction,
            }}>

            {children}
        </TransactionContext.Provider>

    )
}

export default TransactionProvider;