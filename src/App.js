import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpress } from './components/IncomeExpress';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header></Header>
        <div className='container'>
          <Balance></Balance>
          <IncomeExpress></IncomeExpress>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;

