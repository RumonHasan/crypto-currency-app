import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';
import { useState, useEffect } from 'react';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const [searchTerm, setSearchTerm] = useState('');
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count); 
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins); // crypto list state

  // enabling search filter for crypto currencies:
  useEffect(()=>{
    const filteredData = cryptosList?.data?.coins.filter((coin)=>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  },[cryptosList, searchTerm]);

  // loading state
  if(isFetching) return (<div>Loading...</div>);

  return <>
    {!simplified &&
      <div className='search-crypto'>
        <Input placeholder='search cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)}/>
    </div>
    }
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency)=>(
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
              <Card 
                title={`${currency.rank}, ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl}
                hoverable></img>}>
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
              </Card>
          </Link>
        </Col>
      ))}
    </Row>
  </>;
};

export default Cryptocurrencies;
