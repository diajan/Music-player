import React from 'react'
import { Col, Layout, Row } from 'antd'
import TopSong from './TopSong'
import Artists from './Artists'
import NewSongs from './NewSongs'
const { Content: AntContent } = Layout

export default function App() {
  return (
    <AntContent className='content'>
      <TopSong />
      <Row>
        <Col span={12}>
            <NewSongs/>
        </Col>
        <Col xl={12}>
          <Artists />
        </Col>
      </Row>
    </AntContent>
  )
}
