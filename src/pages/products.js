import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import actions from '../actions/product';

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
      { props.error ? props.error.data : '' }
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
            props.isLoading ?
            <tr>
              <td colSpan={ 4 }>
                Loading...
              </td>
            </tr> :
            props.products && props.products.length ?
            props.products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{ product.id }</td>
                  <td>{ product.name }</td>
                  <td>{ product.categoryName }</td>
                  <td>{ product.price }</td>
                </tr>
              )
            }) :
            <tr>
              <td colSpan={ 4 }>
                No Data
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    products: state.product.products,
    error: state.product.error,
    isLoading: state.product.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(actions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);