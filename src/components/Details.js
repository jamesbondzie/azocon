import React, { Component } from 'react'


import {ProductConsumer} from '../contextAPI';
import {Link}     from 'react-router-dom';
//import styled      from 'styled-components';
import {ButtonContainer}     from './Buttons';
//import { detailProduct } from '../data';


 class Details extends Component {
  render() {
    return (
      <ProductConsumer>
         {(value) =>{
          const{
                id,
                company,
                title,
                img,
                info,
                price,
                inCart
              }=value.detailProduct;
         
          return(
              <div className="container py-5">
                {/**title */}
                  <div className="row">
                  <div className="col-10 mx-auto text-center 
                  text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                  </div>
                {/**end title */}
                {/*product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3"> 
                    <img src={img} className="img-fluid" alt="product" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 
                  text-capitalize">
                    <h4>model: {title}</h4>
                    <h5 className="text-title text-uppercase 
                    text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span> 
                    </h5 >
                    <h4 className="text-blue">
                      <strong>
                        price: <span>$</span>{price}
                      </strong>
                    </h4>
                      <p className="text-capitalize 
                      font-weight-bold.mt-3 mb-0">
                           some info about product : 
                      </p>
                      <p className="text-muted lead">
                        {info}
                      </p>
                      {/**details buttons */}
                      <div className="">
                      <Link to='/'>
                        <ButtonContainer>
                          back to products
                        </ButtonContainer>
                      </Link>
                      <ButtonContainer
                       cart
                       disabled={inCart? true : false}
                       onClick={()=>{
                         value.addToCart(id);
                         value.openModal(id);
                       }}
                      >
                        {inCart? 'inCart' : 'add to cart'}
                      </ButtonContainer>
                      </div>
                  </div>
                </div>
              </div>

            );
         }}
        
      </ProductConsumer>
    )
  }
}
export default Details;
