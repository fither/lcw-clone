import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/category';
import { toast } from 'react-toastify';

function Categories(props) {
  const [name, setName] = useState('');
  
  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line
  }, [props.category]);

  const fetchCategories = () => {
    props.actions.getCategories();
  }

  const deletehandler = (id) => {
    props.actions.delete(id);
  }

  const addHandler = () => {
    if(!validateForm()) { return; }
    const category = {
      Name: name
    }

    props.actions.add(category);
  }

  const validateForm = () => {
    if(name === '') {
      toast.error('Please enter a name');
      return false;
    }

    return true;
  }

  return (
    <div>
      <h1>Categories</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
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
              <button
                className="btn btn-secondary btn-sm"
                onClick={addHandler}
              >
                <i className="fas fa-plus"></i>
              </button>
            </td>
          </tr>
          {
            props.isLoading ?
            <tr>
              <td colSpan={ 3 }>
                Loading...
              </td>
            </tr> :
            props.categories && props.categories.length ?
            props.categories.map((category) => {
              return (
                <tr key={category.id}>
                  <td>{ category.id }</td>
                  <td>{ category.name }</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deletehandler(category.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )
            }) :
            <tr>
              <td colSpan={ 3 }>
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
    category: state.category.category,
    categories: state.category.categories,
    isLoading: state.category.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(actions.getCategories, dispatch),
      add: bindActionCreators(actions.add, dispatch),
      delete: bindActionCreators(actions.delete, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);