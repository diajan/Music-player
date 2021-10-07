import { Typography, Avatar, Card, Row, Col, Tooltip } from 'antd'
import { BsDownload, BsHeart, BsPlus, BsFillPlayFill } from 'react-icons/bs'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
export default function NewSongs() {
  const songs = useSelector(s => s.songs.slice(0, 10))

  console.log('songs', songs)
  return (
    <div className='new-song'>
      <h2 className='new-song-title'>New Songs</h2>
      {songs.map(song => (
        <Card className='card card-v'>
          <Row justify='space-between' align='middle'>
            <Col xl={12} lg={24} md={24} sm={18} xs={15}>
              <Meta
                avatar={
                  <div className='new-song-wrapp'>
                    <Avatar
                      className='new-song-wrapp-avatar'
                      shape='square'
                      src={song.share.image}
                    />
                    <div className='new-song-wrapp-overlay'>
                      <span>
                        <BsFillPlayFill />
                      </span>
                    </div>
                  </div>
                }
                title={
                  <span style={{ fontWeight: '600' }}>{song.subtitle}</span>
                }
                description={<span>{song.title}</span>}
              />
            </Col>
            <Col xl={{span:12 , offset:0}} lg={{span:12,offset:9}} md={{span:14,offset:9}} sm={6} xs={9}>
              <Row justify='space-around' align='middle'>
                <Col span={10}>
                  <span className='card-v-feature'>3:23</span>
                </Col>
                <Col span={10}>
                  <Row justify='space-between'>
                    <Col xs={1}>
                      <Tooltip title='Add To Playlist'>
                        <BsPlus className='card-v-feature' />
                      </Tooltip>
                    </Col>
                    <Col xs={1}>
                      <Tooltip title='Add To Favorite'>
                        <BsHeart className='card-v-feature' />
                      </Tooltip>
                    </Col>
                    <Col xs={1}>
                      <Tooltip title='Download'>
                        {/* song.hub.actions[1].uri */}
                        <BsDownload className='card-v-feature' />
                      </Tooltip>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  )
}
