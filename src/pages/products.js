import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import actions from '../actions/product';
import { toast } from 'react-toastify';

function Products(props) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    // eslint-disable-next-line
  }, [props.product]);
  
  const fetchProducts = () => {
    props.actions.getProducts();
  }

  const fetchCategories = () => {
    props.actions.getCategories();
  }

  const deleteHandler = (id) => {
    props.actions.delete(id);
  }

  const validateForm = () => {
    if(name === '') {
      toast.error('Please enter a name');
      return false;
    }

    if(category === '') {
      toast.error('Please select a category');
      return false;
    }

    if(price === 0) {
      toast.error('Price can\'t be 0');
      return false;
    }

    return true;
  }

  const addhandler = () => {
    if(!validateForm()) { return; }

    const product = {
      Name: name,
      CategoryName: category,
      Price: price
    }

    props.actions.add(product);
  }

  let categorySelect = (
    <select
      className="form-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value={""} defaultValue hidden>Seçim yapınız</option>
      {
        props.categories.map((category) => {
          return (
            (
            <option key={category.id} value={category.name}>
              { category.name }
            </option>
            )
          )
      })
      }
    </select>
  )
  
  return (
    <div>
      <h1>Products</h1>
      <table className="table">
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </td>
            <td>
              { categorySelect }
            </td>
            <td>
              <input
                className="form-control"
                type="number"
                value={price}
                min={0}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              ></input>
            </td>
            <td>
              <button
                className="btn btn-secondary btn-sm"
                onClick={addhandler}
              ><i className="fas fa-plus"></i></button>
            </td>
          </tr>
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
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteHandler(product.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
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
    product: state.product.product,
    products: state.product.products,
    categories: state.product.categories,
    getError: state.product.getError,
    deleteError: state.product.deleteError,
    isLoading: state.product.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(actions.getProducts, dispatch),
      getCategories: bindActionCreators(actions.getCategories, dispatch),
      add: bindActionCreators(actions.add, dispatch),
      delete: bindActionCreators(actions.delete, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);