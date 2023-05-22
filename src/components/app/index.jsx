import './App.css';
import Button from 'components/button';
import Header from 'components/header';

function App() {
  return (
    <div>
      <Header/>
      
      <main>
        <div className='max-w-5xl bg-slate-200 mx-auto py-10 font-serif'>
          <div className='flex gap-4 justify-center'>
          <input className='border-4'/>
          <Button title="Добавить"/>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;
