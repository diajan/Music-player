import React from 'react'

export default function MenuItem({ icon, label }) {
  return (
    <div className='menu-item'>
      <div className='menu-item-icon'>
        <span>{icon}</span>
      </div>
      <div className='menu-item-label'>
        <span>{label}</span>
      </div>
    </div>
  )
}
