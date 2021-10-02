import React from 'react'
import { Layout, Row, Col } from 'antd'
import { FaHome, FaUserFriends, FaCompactDisc } from 'react-icons/fa'
import { FiRadio } from 'react-icons/fi'
import { RiPlayList2Fill, RiRadioLine } from 'react-icons/ri'
import {
  BsMusicNoteList,
  BsMusicNoteBeamed,
  BsHeartFill,
  BsFolder,
} from 'react-icons/bs'
import Logo from 'components/utility/Logo'
import MenuItem from 'components/utility/MenuItem'

const { Sider: AntSider } = Layout

export default function Sider() {
  return (
    <AntSider className='sider' width='200'>
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
    </AntSider>
  )
}


// قسمت دراور برای ریسپانسیو کردن

// class App extends React.Component {
//   state = { visible: false, placement: 'left' };

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   onChange = e => {
//     this.setState({
//       placement: e.target.value,
//     });
//   };

//   render() {
//     const { placement, visible } = this.state;
//     return (
//       <>
//         <Space>
//           <Radio.Group value={placement} onChange={this.onChange}>
//             <Radio value="top">top</Radio>
//             <Radio value="right">right</Radio>
//             <Radio value="bottom">bottom</Radio>
//             <Radio value="left">left</Radio>
//           </Radio.Group>
//           <Button type="primary" onClick={this.showDrawer}>
//             Open
//           </Button>
//         </Space>
//         <Drawer
//           title="Basic Drawer"
//           placement={placement}
//           closable={false}
//           onClose={this.onClose}
//           visible={visible}
//           key={placement}
//         >
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//           <p>Some contents...</p>
//         </Drawer>
//       </>
//     );
//   }
// }