import { Col, Progress, Row } from 'antd'
import React from 'react'

export default function Player() {
  return (
    <div>
      <Row justify='start'>
        <Col span={2} style={{ textAlign: 'center',color:'white' }}>
          1:30
        </Col>
        <Col span={20}>
          <Progress style={{height:'5px'}} percent={50} showInfo={false}  />
        </Col>
        <Col span={2} style={{ textAlign: 'center',color:'white' }}>
          4:30
        </Col>
      </Row>
    </div>
  )
}
