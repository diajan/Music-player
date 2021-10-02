import React from 'react'
import { Button, Layout, Badge, Avatar } from 'antd'
import {
  SearchOutlined,
  UserOutlined,
  HeartFilled,
  ShareAltOutlined,
} from '@ant-design/icons'
import { FaBell } from 'react-icons/fa'
import { BsFillPlayFill, BsShuffle } from 'react-icons/bs'
const { Header: AntHeader } = Layout

export default function Header() {
  return (
    <AntHeader className='header'>
      <div className='header-top'>
        <div className='header-top-l'>
          <Button className='search-box' icon={<SearchOutlined />}>
            Search
          </Button>
        </div>
        <div className='header-top-r'>
          <div>
            <Badge count={5} size='small'>
              <FaBell style={{}} />
            </Badge>
          </div>
          <div>
            <Avatar icon={<UserOutlined />} />
          </div>
        </div>
      </div>

      <div className='header-mid'>
        <h1>
          Dream Top <br />
          Six Train
        </h1>
      </div>

      <div className='header-bottom'>
        <div>
          <div className='header-bottom-play-music'>
            <div>
              <i style={{fontSize:'30px'}}>
                <BsFillPlayFill />
              </i>
              <span>Play All</span>
            </div>
            <div>
              <i>
                <BsShuffle />
              </i>
              <span>Mix</span>
            </div>
          </div>
        </div>
        <div>
          <Avatar size='default'>
            <HeartFilled style={{ marginTop: '9px', color: 'red' }} />
          </Avatar>
          <Avatar size='default'>
            <ShareAltOutlined style={{ marginTop: '9px', color: 'red' }} />
          </Avatar>
        </div>
      </div>
    </AntHeader>
  )
}
