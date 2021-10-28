import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/user';

function ListUsers(props) {
  
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const fetchUsers = () => {
    props.actions.fetch()
  }

  return (
    <div>
      { props.error ? props.error.data : ''}
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Surname</td>
            <td>Username</td>
            <td>E-Mail</td>
          </tr>
        </thead>
        <tbody>
          {
            props.isLoading ?
            <tr>
              <td colSpan={ 5 }>
                Loading...
              </td>
            </tr> :
            props.userList && props.userList.length ?
            props.userList.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{ user.id }</td>
                  <td>{ user.name }</td>
                  <td>{ user.surname }</td>
                  <td>{ user.username }</td>
                  <td>{ user.emailAddress }</td>
                </tr>
              )
            }) :
            <tr>
              <td colSpan={ 5 }>
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
    userList: state.user.userList,
    error: state.user.fetchError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      fetch: bindActionCreators(actions.fetch, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);