import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    // const [transactionType, setTransactionType] = useState(null)

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        // let adjustedAmount = transactionType === 'expense' ? -amount : +amount;

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        
        setAmount(0)
        setText('')
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div htmlFor="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                {/* <div className="form-control">
                    <label>Transaction Type:</label>
                    <label>
                        <input
                            type="radio"
                            value="income"
                            checked={transactionType === 'income'}
                            onChange={() => setTransactionType('income')}
                        />
                        Income
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="expense"
                            checked={transactionType === 'expense'}
                            onChange={() => setTransactionType('expense')}
                        />
                        Expense
                    </label>
                </div> */}
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
