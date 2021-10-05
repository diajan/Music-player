import React from 'react'
import { Layout } from 'antd';
import TopSong from 'components/generic/content/TopSong'
const { Content:AntContent } = Layout;

export default function App() {
    return (
        <AntContent className='content' >
           <TopSong/>
        </AntContent>
    )
}
