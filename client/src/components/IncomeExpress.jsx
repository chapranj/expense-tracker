import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpress = () => {

    const {transactions} = useContext(GlobalContext)

    const positiveAmounts = transactions
    .map(
        (transaction)=>transaction.amount
    )
    .filter(
        (amount)=> amount>0
    );

    const income = positiveAmounts.reduce(
        (acc, item)=> (acc+=item),0
    ).toFixed(2)


    //Negative amounts below
    const negativeAmounts = transactions
    .map(
        (transaction)=>transaction.amount
    )
    .filter(
        (negAmount)=>negAmount<0
    );

    const spent = negativeAmounts.reduce(
        (acc , item)=>(acc+=item), 0
    ).toFixed(2)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${spent}</p>
            </div>
        </div>
    )
}
