import React from 'react';
import Row from 'react-bootstrap/Row';
import { data } from './data';
import Product from './Product';

const Shop = () => {

  return (
    <div className='row-wrapper'>
      <Row>
        {data.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </Row>
    </div>
  )

};

export default Shop;