import { useState } from 'react'
import { PackingList } from './components/PackingList.jsx'
import './App.css'
import { Logo } from './components/Logo'
import { Form } from './components/Form.jsx'
import { Stats } from './components/Stats.jsx'
import { items } from './assets/data.js'
function App() {
      const [itemList, setItemList] = useState(items)
      const handleClick = (form) => {
            setItemList((prev) => {
                  return [
                        ...prev,
                        {
                              ...form,
                              id: itemList.length + 1,
                              quantity: +form.quantity,
                        },
                  ]
            })
      }

      const handleDelete = (id) => {
            setItemList((prev) => prev.filter((item) => item.id !== id))
      }
      return (
            <div className='flex-1'>
                  <div className='logo'>
                        <Logo />
                        <Form handleClick={handleClick} />
                  </div>
                  <PackingList items={itemList} handleDelete={handleDelete} />
                  <Stats />
            </div>
      )
}

export default App
