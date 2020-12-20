import React, { useContext, useState } from 'react';
import { TransactionContext } from './TransContext';

function Child() {


    let { Transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;

        for (var i = 0; i < Transactions.length; i++) {
            if (Transactions[i].amount > 0)
                income = income + Transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;

        for (var i = 0; i < Transactions.length; i++) {
            if (Transactions[i].amount < 0)
                expense += Transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="Container">
            <h1 className="Text-center">Expense Tracker</h1>

            <h3 className="Your-Balance">Your Balance <br /> ${getIncome() + getExpense()}</h3>


            <div className="expense-container">

                <h3 className="Container-Income">INCOME <br /> ${getIncome()} </ h3 >
                <h3 className="Container-Expense">EXPENSE <br /> ${getExpense()} </h3>
            </div>


            <h3>History</h3>
            <hr />
            <ul className="Transaction-list">
                {Transactions.map((transobj, ind) => {
                    return (<li key={ind}>
                        <span>{transobj.desc}</span>
                        <span>${transobj.amount}</span>
                    </li>
                    )
                })}

            </ul>

            <h3>Add New Transaction</h3>
            <hr />

            <form className="Transaction-Form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Description"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />

                <label>
                    Enter Amount <br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>

                <br />
                <input 
                className="btn  btn-submit"
                type="submit" 
                value="Add Transaction" 
                />
            </form>
        </div>
    );
}

export default Child;