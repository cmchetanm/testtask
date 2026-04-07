import {useEffect, useState} from 'react';
import TransactionList from './components/TransactionList';
import ErrorMessage from './components/ErrorMessage';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const fetchTransaction = async(cat = '') => {
    setError('');
    try {
      let url = 'http://localhost:3000/api/transactions';
      if (cat !== '') {
        url += `?category=${cat}`;

      }
      const res = await fetch(url);
      if(!res.ok){
        throw new Error();
      }
      const data = await res.json();
      setTransactions(data);
    } catch {
      setError('Failed to fetch transactions');
    }
  };
  useEffect(() => {
   fetchTransaction(category);

  },[category]);

  return (
    <div className="App">
      <h2>
        Transaction List
      </h2>
      <CategoryFilter category={category} setCategory={setCategory} />
      {error && <ErrorMessage message={error}/>}

      { !error && (
         <TransactionList transactions={transactions}/>

        )

      }
    </div>
  );
}

export default App;
