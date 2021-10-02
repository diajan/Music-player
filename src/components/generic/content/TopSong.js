import { Avatar, Col, Row } from 'antd'
import { Card } from 'antd'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import s1 from 'assets/img/1.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'
const { Meta } = Card

var options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
  params: { id: '40008598', locale: 'en-US' },
  headers: {
    'x-rapidapi-host': 'shazam.p.rapidapi.com',
    'x-rapidapi-key': 'bd8e9b8c38msh884c82aa15ecfecp1883f3jsn3af8e5818b9d',
  },
}

export default function TopSong() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    axios.request(options).then(response => setSongs(response.data.tracks))
  }, [])
  console.log(songs)
  return (
    <div className='song-slider'>
      <Row justify='space-between'>
        <Col flex='0 0 50%'>
          <h2 className='song-slider-title'>Weekly Top Track</h2>
        </Col>
        <Col flex='0 1% 50%'>
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
      <Row gutter={[16, 16]} wrap={false} style={{ overflow: 'auto' }}>
        {songs.map(el => (
          <Col span={4}>
            <Card
              className='card'
              hoverable
              cover={<img title={el.subtitle} src={el.share.image} />}>
              <Meta
                className='card-desc'
                title={<span>{el.subtitle}</span>}
                description={<span>{el.title}</span>}
              />
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  )
}
