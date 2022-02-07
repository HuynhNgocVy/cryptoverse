import React, {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card, Option} from 'antd'
import moment from 'moment';

import { LoadingOutlined } from '@ant-design/icons/lib/icons';
import "./layput.css"

import { useGetCryptoNewsQuery } from '../services/cryptoNewApi';
import { useGetCryptosQuery } from '../services/cryptoAPI';

const demoImg = "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const {data : cryptoNew} = useGetCryptoNewsQuery({newsCategory:newsCategory, count: simplified ? 6: 12})
  const {data} = useGetCryptosQuery(100)
  
  if(!cryptoNew?.value) {
    return (
      <LoadingOutlined />
    )
  }

  return (
    <Row gutter={[24, 24]}>
    {!simplified && (
      <Col span={24}>
        <Select 
          showSearch
          className='select-news'
          placeholder="Select a Crypto"
          optionFilterProp='children'
          onChange={(e) => setNewsCategory(e)}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
        >
          <Select value='Cryptocurrency'>Cryptocurrency</Select> 
          {data?.data?.coins.map((coin) => <Select value={coin.name}>{coin.name}</Select> )}
        </Select>
      </Col>
    )}
    {cryptoNew.value.map((news, i) => (

      <Col xs={24} sm={12} lg={6}  key={i}>
        <Card className="news-card" hoverable>
          <a href={news.url} target="_blank" rel="noreferrer">
            <div className='news-image-container'>
              <Typography className='news-title' level={4}>{news.name}</Typography>
              <img  style={{ maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImg} />
            </div>
            <p>
              {news.description > 100 
              ? `${news.description.substring(0,100)}...`
              : news.description }
            </p>
            <div className='provider-container'>
                <div style={{display: 'flex'}}>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImg}></Avatar>
                  <Typography className='provider-name'>{news.provider[0]?.name}</Typography>
                </div>
                  <Typography>{moment(news.datePublished).startOf('ss').fromNow()}</Typography>
            </div>
          </a>
        </Card>
      </Col>
    ))}
    </Row>
  );
};

export default News;
