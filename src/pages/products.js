import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import * as productActions from '../actions/productActions';

function Products(props) {
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);
  
  const fetchProducts = () => {
    props.actions.getProducts();
  }
  
  return (
    <div>
      <h1>Products</h1>
      <table className="table">
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Category</td>
            <td>Prize</td>
          </tr>
        </thead>
        <tbody>
          {
            props.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{ product.id }</td>
                  <td>{ product.name }</td>
                  <td>{ product.categoryName }</td>
                  <td>{ product.price }</td>
                </tr>
              )
            }) 
          }
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    products: state.productReducer.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);