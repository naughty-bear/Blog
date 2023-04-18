
import { Layout } from 'antd';
import React, { useState } from 'react';
import { useRoutes, NavLink} from 'react-router-dom'
import routers from './routers/router'
import img from './images/jingbu.png'
import logo from './images/logo.png'
const { Header, Content, Footer, Sider } = Layout;
const itemArr = ['html', 'css', 'javascript', 'react', 'vue','dailyecord']
function App() {
  const [items, setItems] = useState(itemArr)
  const element = useRoutes(routers)
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className='mt-16 w-1/12' 
      >
      <div className='bg-green-300 h-full pt-4'>
      <img src={img} className=' rounded-lg mx-auto  w-3/4' alt='每天进步一点点'></img>
        {/* 侧边导航选项 */}
        <ul className='pt-10 flex flex-col '>
          {
            items.map(item => {
              // 编写路由链接
              return <NavLink className='h-12 text-white text-center' to={`/${item}`}>{item.toUpperCase()}</NavLink>
            })
          }
        </ul>
      </div>
      </Sider>
      <Layout>
        <Header
          className='sticky top-0 bg-green-300 flex flex-row'
        >
        {/* logo */}
        <img src={logo} alt='logo' className='w-12 h-12 my-auto'/>
        <text className='text-xl my-auto ml-4 text-red-300'>Naughty Bear</text>
        </Header>
        <Content className='h-screen ml-48 py-20  bg-gray-400 px-40 '>
          {/* 注册路由 */}
          {element}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;