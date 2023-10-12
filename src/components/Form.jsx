import React, { useState } from 'react'

export const Form = ({ handleClick }) => {
      const [form, setForm] = useState({
            quantity: 1,
            description: '',
      })

      const handleChange = (e) => {
            const { name, value } = e.target
            setForm((prev) => {
                  return { ...prev, [name]: value }
            })
      }

      return (
            <div className='form'>
                  <h2> What Do You Need For Your 😍 Trip?</h2>
                  <select onChange={handleChange} value={form.quantity} name='quantity'>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                              return (
                                    <option key={+num} value={num}>
                                          {num}
                                    </option>
                              )
                        })}
                  </select>
                  <input
                        type='text'
                        name='description'
                        id=''
                        placeholder='item...'
                        value={form.description}
                        onChange={handleChange}
                  />
                  <button className='btn btn-navy' onClick={() => handleClick(form, setForm)}>
                        Add
                  </button>
            </div>
      )
}
