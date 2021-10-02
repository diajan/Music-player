import { Layout, Progress, Row, Col, Slider } from 'antd'
import Player from 'components/utility/Player'
const { Footer: AntFooter } = Layout

export default function Footer() {
  return (
    <AntFooter className='footer'>
      <Row>
        <Col span={12}>
          <Slider defaultValue={30} tooltipVisible={false} />,
          <Player/>
          {/* <div class='container-audio'>
            <audio controls id='music'>
              <source
                src={
                  'https://dl.nicmusic.net/nicmusic/026/058/Homayoun%20Shajarian%20-%20Yek%20Nafas%20Arezouye%20To%20%28128%29.mp3'
                }
                type='audio/mpeg'
              />
            </audio>
          </div> */}
        </Col>
        <Col span={12}>
          {/* <div class='container-audio'>
            <div class='colum1'>
              <div class='row'></div>
            </div>
            <div class='colum1'>
              <div class='row'></div>
            </div>
            <div class='colum1'>
              <div class='row'></div>
            </div>
            <div class='colum1'>
              <div class='row'></div>
            </div>
          </div> */}
        </Col>
      </Row>
    </AntFooter>
  )
}
