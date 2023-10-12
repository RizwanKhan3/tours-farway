import React from 'react'

export const Stats = ({ items }) => {
      const numsItem = items.length
      const packedItem = items.filter((item) => item.packed).length
      const percentage = Math.round((packedItem / numsItem) * 100)
      return (
            <footer className='stats'>
                  <em>
                        You Have {numsItem} items on your list and you already packed {packedItem}{' '}
                        {percentage}%
                  </em>
            </footer>
      )
}
