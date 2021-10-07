import React from 'react'
import { FaHome, FaUserFriends, FaCompactDisc } from 'react-icons/fa'
import { FiRadio } from 'react-icons/fi'
import { RiPlayList2Fill, RiRadioLine } from 'react-icons/ri'
import {
  BsMusicNoteList,
  BsMusicNoteBeamed,
  BsHeartFill,
  BsFolder
} from 'react-icons/bs'
import Logo from 'components/utility/Logo'
import MenuItem from 'components/utility/MenuItem'

export default function Menu() {
  return (
    <>
      <Logo />
      <div className='sider-item'>
        <div className='title'>
          <h2>Recommended</h2>
        </div>
        <div className='menu-item-wrapp'>
          <MenuItem icon={<FaHome />} label='Home' />
          <MenuItem icon={<FiRadio />} label='Explorer' />
          <MenuItem icon={<RiPlayList2Fill />} label='Genress' />
          <MenuItem icon={<RiRadioLine />} label='Radio' />
          <MenuItem icon={<FaUserFriends />} label='Artist' />
          <MenuItem icon={<BsMusicNoteList />} label='Albums' />
        </div>
      </div>
      <div className='sider-item'>
        <div className='title'>
          <h2>My Library</h2>
        </div>
        <div className='menu-item-wrapp'>
          <MenuItem icon={<BsMusicNoteBeamed />} label='Recently Played' />
          <MenuItem icon={<BsHeartFill />} label='Favorite' />
          <MenuItem icon={<BsFolder />} label='Local' />
        </div>
      </div>
      <div className='sider-item'>
        <div className='title'>
          <h2 style={{ display: 'inline' }}>Playlist</h2>
          <span className='add-playlist'>+</span>
        </div>
        <div className='menu-item-wrapp'>
          <MenuItem icon={<FaCompactDisc />} label='Unplugged' />
          <MenuItem icon={<FaCompactDisc />} label='Best of Amob' />
          <MenuItem icon={<FaCompactDisc />} label='Best Of April' />
        </div>
      </div>
    </>
  )
}
