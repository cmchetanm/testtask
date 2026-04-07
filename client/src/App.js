import {useEffect, useState} from 'react';
import TransactionList from './components/TransactionList';
import ErrorMessage from './components/ErrorMessage';
import CategoryFilter from './components/CategoryFilter';
import Loader from './components/Loader';
import Summary from './components/Summary';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTransaction = async(cat = '') => {
    setLoading(true);
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
    setLoading(false);
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
      {loading && <Loader />}

      { !loading && !error && (
        <>
          <Summary transactions={transactions} />
          <TransactionList transactions={transactions} />
        </>
      )}
    </div>
  );
}

export default App;
