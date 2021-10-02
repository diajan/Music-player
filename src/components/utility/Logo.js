import React from 'react'
import { DiReact } from 'react-icons/di'
export default function Logo({ icon, label }) {
  return (
    <div className='logo-wrapp'>
      <div className='logo'>
        <span>{icon || <DiReact/>}</span>
      </div>
      <div>
        <span>{label || 'Music Player'}</span>
      </div>
    </div>
  )
}
