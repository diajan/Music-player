import React from 'react'
import { Button, Layout, Badge, Avatar, Row, Col } from 'antd'
import {
  SearchOutlined,
  HeartFilled,
  ShareAltOutlined
} from '@ant-design/icons'
import { FaRegBell } from 'react-icons/fa'
import { BsFillPlayFill, BsShuffle } from 'react-icons/bs'

const { Header: AntHeader } = Layout

export default function Header() {
  return (
    <AntHeader className='header'>
      <div className='header-background'></div>
      <Row  gutter={[8, 24]}>
        <Col span={24}>
          <Row justify='center'>
            <Col xl={22} md={21} sm={20} xs={18}>
              <Button className='search-box' icon={<SearchOutlined />}>
                Search
              </Button>
            </Col>
            <Col xl={2} md={3} sm={4} xs={6}>
              <Row justify='space-around'>
                <Col style={{ marginTop: '8px' }} span={12}>
                  <Badge count={5} size='small'>
                    <FaRegBell color='white' />
                  </Badge>
                </Col>
                <Col span={12}>
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row className='header-mid'>
            <Col xl={12} sm={24}>
              <h1>
                Dream Top <br />
                Six Train
              </h1>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='space-between'>
            <Col className='header-bottom' xl={2}>
              <div className='header-bottom-play-music'>
                <div>
                  <i style={{ fontSize: '30px' }}>
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
            </Col>
            <Col xl={3} className='header-bottom'>
              <Avatar className='header-bottom-icon' size='large'>
                <HeartFilled/>
              </Avatar>
              <Avatar style={{marginLeft:'15px'}} className='header-bottom-icon' size='large'>
                <ShareAltOutlined/>
              </Avatar>
            </Col>
          </Row>
        </Col>
      </Row>
    </AntHeader>
  )
}
