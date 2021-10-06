import { Typography, Avatar, Card, Row, Col, Tooltip } from 'antd'
import { BsDownload, BsHeart, BsPlus } from 'react-icons/bs'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
const { Text, Link } = Typography

export default function NewSongs() {
  return (
    <div className='new-song'>
      <h2 className='new-song-title'>New Songs</h2>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
      <Card className='card card-v'>
        <Row justify='space-between' align='middle'>
          <Col span={12}>
            <Meta
              avatar={
                <Avatar
                  shape='square'
                  src='https://i.guim.co.uk/img/media/0d18464e38f5c0d6ca6301ba72387219e4c69298/0_385_2693_1615/master/2693.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=16d6c55a239421bf2822246454220ef2'
                />
              }
              title={<span style={{ fontWeight: '600' }}>Card title</span>}
              description={<span>This is the description</span>}
            />
          </Col>
          <Col span={8}>
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
                      <BsDownload className='card-v-feature' />
                    </Tooltip>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
