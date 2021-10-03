import React, { useState } from 'react'
import { Layout, Drawer } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import Menu from 'components/generic/Menu'
const { Sider: AntSider } = Layout

export default function Sider() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <AntSider className='sider mobile-hidden' width='200'>
        <Menu />
      </AntSider>
      <div className='mobile-visible'>
        <div className='h-circle' onClick={showDrawer}>
          <div className='h-circle-child' onClick={showDrawer} />
        </div>
        <Drawer
          placement='left'
          onClose={onClose}
          visible={visible}
          width={200}
          closeIcon={
            <span style={{ color: 'white' }}>{<CloseOutlined />}</span>
          }
          bodyStyle={{
            padding: '0',
            overflow: 'overlay',
            overflowX: 'hidden',
            backgroundColor: '#0e1a2a'
          }}
        >
          <AntSider className='sider' width='200'>
            <Menu />
          </AntSider>
        </Drawer>
      </div>
    </>
  )
}
