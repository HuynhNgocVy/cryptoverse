import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {Navbar, Exchanges, Homepage, CryptoDetails, Crytocurrencies, News} from "./components"
import './App.css'
import history from './history';

function App() {
  return (
    <div className='app'>
    
      <div className='navbar'>
        <Navbar />
      </div>
      
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes history={history}>
                <Route path="/" exact element={<Homepage />}></Route>
                <Route path="/exchanges" element={<exchanges />}></Route>
                <Route path="/crytocurrencies" element={<Crytocurrencies />}></Route>
                <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
                <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
      
      <div className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign:'center'}} >
          Cryptoverse
          <br />
          All right reserverd
        </Typography.Title>
        <Space>
          <Link to="/">Homepage</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
