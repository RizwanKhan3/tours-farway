import { useState } from 'react'
import { PackingList } from './components/PackingList.jsx'
import './App.css'
import { Logo } from './components/Logo'
import { Form } from './components/Form.jsx'
import { Stats } from './components/Stats.jsx'
import { items } from './assets/data.js'
function App() {
      const [itemList, setItemList] = useState(items)

      const handleClick = (form, setForm) => {
            setItemList((prev) => {
                  return [
                        ...prev,
                        {
                              ...form,
                              id: itemList.length + 1,
                              quantity: +form.quantity,
                              packed: false,
                        },
                  ]
            })
            setForm({
                  quantity: 1,
                  description: '',
            })
      }

      const handleDelete = (id) => {
            setItemList((prev) => prev.filter((item) => item.id !== id))
      }

      const handleToggle = (id) => {
            setItemList((prev) =>
                  prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)),
            )
      }
      return (
            <div className='flex-1'>
                  <div className='logo'>
                        <Logo />
                        <Form handleClick={handleClick} />
                  </div>
                  <PackingList
                        items={itemList}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                  />
                  <Stats items={itemList} />
            </div>
      )
}

export default App
