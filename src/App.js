import Header from './Header';
import Maincontent from './Maincontent';
import Footer from './Footer';
import './App.css';
import { useState } from 'react';
import AddItem from './AddItem';

function App() {
   const [items, setItems] = useState([
      {
         id: 1,
         checked: true,
         item: "let's play cricket"
      },
      {
         id: 2,
         checked: true,
         item: "play cricket"
      },
      {
         id: 3,
         checked: true,
         item: "playing cricket"
      },
      {
         id: 4,
         checked: true,
         item: "played cricket"
      }
   ])

   const [newItem, setNewItem] = useState('HII')

   const handleChange = (id) => {

      const listItems = items.map((item) =>
         item.id === id ? { ...item, checked: !item.checked } : item)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
   }
   const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
   }


   const handleSubmit = (e) => {
      console.log("submitted")
   }

   return (
      <div className='App'>
         <Header />
         <AddItem

            newItem={{ newItem }}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
         />
         <Maincontent

            items={items}
            key={items.id}
            handleChange={handleChange}
            handleDelete={handleDelete}

         />
         <Footer />

      </div>
   );
}

export default App;
