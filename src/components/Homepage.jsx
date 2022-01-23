import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const {Title} = Typography;

 const Homepage = () => {
  return <div>
      <Title level={2} className='heading'>Global CryptoStats</Title>
      <Row>
          <Col span={12}><Statistic title='Total CryptoCurrencies' value='5'/></Col>
          <Col span={12}><Statistic title='Total Exchanges' value='5'/></Col>
          <Col span={12}><Statistic title='Total MarketCap' value='5'/></Col>
          <Col span={12}><Statistic title='Total 24h Volume' value='5'/></Col>
          <Col span={12}><Statistic title='Markets' value='5'/></Col>
      </Row>
  </div>;
};

export default Homepage;
