import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoAPI';
import { LoadingOutlined } from '@ant-design/icons/lib/icons';
import { Crytocurrencies, News } from '.';
import "./layput.css"
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  if (isFetching) {
    return (
      <LoadingOutlined />
    )
  }
  return <div>
    <Typography level={2} className="heading">Global Crypto Stats</Typography>
    <Row>
      <Col span={12}> <Statistic title="Total Crytocurrencies" value={millify(globalStats.total)} /></Col>
      <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /> </Col>
      <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/> </Col>
      <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/> </Col>
      <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/> </Col>
    </Row>
    <div className='home-heading-container'>
        <div level={2} className="home-title">Top 10 Cryptocurrents in the world</div>
        <div level={3} className="show-more">
          <Link to="/crytocurrencies">Show More</Link>
        </div>
    </div>
    <Crytocurrencies simplified/>
    <div className='home-heading-container'>
      <div level={2} className="home-title">Lastest Crypto News</div>
      <div level={3} className="show-more">
        <Link to="/news">Show More</Link>
      </div>
    </div>
    <News simplified/>
    </div>;
};

export default Homepage;
