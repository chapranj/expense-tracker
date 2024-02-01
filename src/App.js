import { useReducer } from 'react';
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpress } from './components/IncomeExpress';
import { TransactionList } from './components/TransactionList';

function App() {

  const initialState = {
    count:0,
    twocount: 2
  }

  const counterEditor = (state, action)=>{
    switch(action.type){
      case '+':
        return {count: state.count + 1}

      case '-':
        return {count: state.count - 1}
    }

  }

  const[state, dispatch] = useReducer(counterEditor, initialState);

  const increment =
  ()=>{
    dispatch({type : '+'})
  }

  const decrement =
  ()=>{
    dispatch({type : '-'})
  }



  return (
    <div>

      <span>
        {state.count}
        {state.twocount}
      </span>

      <button onClick={increment} >+</button>
      <button onClick={decrement} >-</button>














      {/* <Header></Header>
      <div className='container'>
        <Balance></Balance>
        <IncomeExpress></IncomeExpress>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div> */}
    </div>
  );
}

export default App;

