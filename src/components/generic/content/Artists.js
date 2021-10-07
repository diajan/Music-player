import { Avatar, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

export default function Artists() {
  return (
    <div className='artist'>
      <Row justify='space-between'>
        <Col xs={10}>
          <h2 className='artist-title'>Monthly Top Artist</h2>
        </Col>
        <Col xs={3}>
          <span className='artist-see-all'>See all</span>
        </Col>
      </Row>
      <Row className='artist-content' gutter={[0,48]} justify='space-around'>
      <Col xs={5}>
        <Avatar
            size={{ xs: 80, sm: 100, md: 58, lg: 64, xl: 80, xxl: 100 }}
            shape='circle'
            src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
          />
        </Col>
      <Col xs={5}>
        <Avatar
            size={{ xs: 80, sm: 100, md: 58, lg: 64, xl: 80, xxl: 100 }}
            shape='circle'
            src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
          />
        </Col>
      <Col xs={5}>
        <Avatar
            size={{ xs: 80, sm: 100, md: 58, lg: 64, xl: 80, xxl: 100 }}
            shape='circle'
            src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
          />
        </Col>
      <Col xs={5}>
        <Avatar
            size={{ xs: 80, sm: 100, md: 58, lg: 64, xl: 80, xxl: 100 }}
            shape='circle'
            src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
          />
        </Col>
      
      </Row>
    </div>
  )
}
