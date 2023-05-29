import './App.css';
import Button from 'components/button';
import Header from 'components/header';
import { useState } from 'react';
import Element from 'components/element';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [goods, setGoods] = useState (
    [{id:1,
      name:'Хлеб'},
      {id:2,
      name:'Яйца'},
      {id:3,
      name:'Молоко'},
      {id:4,
      name:'Бананы'},
      {id:5,
      name:'Печенье'}

    ]
  )
  const deleteElement = (id) => {
    const filteredElement = goods.filter(element => element.id !== id)
    setGoods(filteredElement)
  }

  const [newElement, setNewElement] = useState('')

  const addElement = () => {
    const newProduct = {
      id: uuidv4,
      name: newElement
    }
    setGoods([...goods, newProduct])
  }


  return (
    <div>
      <Header/>
      
      <main className='bg-gray-100 max-w-screen-lg mx-auto'>
        <div className='max-w-5xl mx-auto py-10 font-serif'>
          <div className='flex gap-4 mx-5 justify-center inputBox'>
          <input className='border-4' value={newElement} onChange={(event) => setNewElement(event.target.value)}/>
          <Button title="Добавить" onClick={addElement}/>
          </div>
          <div>
            {goods.length === 0 && (<div className='text-center text-blue-300 text-2xl px-5 py-5'>Список пуст</div>)}
            {goods.length > 0 && goods.map((element, index) => {
              return(
                <Element index={index} key={element.id} element={element} deleteElement={deleteElement}/>

              )
            })}
            

          </div>

        </div>
      </main>

    </div>
  );
}

export default App;
