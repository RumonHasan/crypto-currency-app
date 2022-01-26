import React from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const {Title} = Typography; // destructuring antd design

 const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    // data subset -> global stats
    const globalStats = data?.data?.stats;

    if(isFetching){
        return 'Loading...';
    }
    return <div>
        <Title level={2} className='heading'>Global CryptoStats</Title>
        <Row>
            <Col span={12}><Statistic title='Total CryptoCurrencies' value={globalStats.total}/></Col>
            <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title='Total MarketCap' value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title='Markets' value={globalStats.totalMarkets}/></Col>
        </Row>
        <div className='home-heading-container'>
            <Title level={2} className="home-title">Top 10 cryptocurrencies in the world</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className='home-heading-container'>
            <Title level={2} className="home-title">Latest Crypto News</Title>
            <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
        </div>
        <News simplified/>
    </div>;
};

export default Homepage;
