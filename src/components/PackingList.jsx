import React from 'react'

export const PackingList = ({ items, handleDelete, handleToggle }) => {
      return (
            <div className='pack-list'>
                  {items.map((item) => {
                        const { description, quantity, packed, id } = item
                        return (
                              <div key={id}>
                                    <input
                                          type='checkbox'
                                          value={packed}
                                          className='check'
                                          onChange={() => handleToggle(id)}
                                    />
                                    <span style={packed ? { textDecoration: 'line-through' } : {}}>
                                          {quantity} {description}
                                    </span>

                                    <button className='btn' onClick={() => handleDelete(id)}>
                                          ❌
                                    </button>
                              </div>
                        )
                  })}
            </div>
      )
}
