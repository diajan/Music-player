import { Layout } from 'antd'
import Sider from 'components/generic/Sider'
import Header from 'components/generic/Header'
import Footer from 'components/generic/Footer'
import Content from 'components/generic/content/App'
import 'antd/dist/antd.css'
import 'assets/scss/main.css'

export default function App() {
  return (
    <div className='App'>
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </div>
  )
}
