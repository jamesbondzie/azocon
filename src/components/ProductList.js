import React, { Component } from 'react'

import {ProductConsumer} from '../contextAPI';

import Title from './Title';
import Product  from './Product';


 class ProductList extends Component {

  render() {
    //console.log(this.state.products);
    return (
      <React.Fragment>
          <div className="py-5">
            <div className="container">
                <Title name="our" title="products"/>
              <div className="row">
                <ProductConsumer>
                  {(value)=>{
                     return value.products.map(product =>{
                       return <Product 
                                key={product.id} 
                                product={product}
                               />;
                     })
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>    
    )
  }
}
export default ProductList;
