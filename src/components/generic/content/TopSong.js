import { Avatar, Col, Row, Spin, Alert } from 'antd'
import { Card } from 'antd'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { useEffect } from 'react'
import { getSongs } from '../../../redux/actions/songs'
import { useDispatch, useSelector } from 'react-redux'
const { Meta } = Card

export default function TopSong() {
  const dispatch = useDispatch()
  const songIsLoading = useSelector(s => s.songIsLoading)
  let songs = useSelector(s => s.songs.slice(0, 12) ?? [])
  
  useEffect(() => {
    dispatch(getSongs())
  }, [])

  if (songIsLoading) {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: '50px',
          justifyContent: 'center'
        }}
      >
        <Spin tip='Loading...' size='large' />
      </div>
    )
  }
  return (
    <div className='song-slider'>
      <Row justify='space-between'>
        <Col flex='0 0 50%'>
          <h2 className='song-slider-title'>Weekly Top Track</h2>
        </Col>
        <Col className='sm-hidden' flex='0 1% 50%'>
          <Row gutter={[8, 0]}>
            <Col>
              <Avatar className='bg-primary' size='default'>
                <AiOutlineLeft
                  className='text-dark'
                  style={{ marginTop: '9px' }}
                />
              </Avatar>
            </Col>
            <Col>
              <Avatar className='bg-primary' size='default'>
                <AiOutlineRight
                  className='text-dark'
                  style={{ marginTop: '9px' }}
                />
              </Avatar>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='song-slider-track' gutter={[16, 16]} wrap={false} style={{ overflow: 'auto' }}>
        {songs.map(song => (
          <Col xl={4} lg={6} md={6} sm={8} xs={12}>
            <Card
              className='card'
              hoverable
              cover={<img title={song.subtitle} src={song.share.image} />}
            >
              <Meta
                className='card-desc'
                title={<span>{song.subtitle}</span>}
                description={<span>{song.title}</span>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
