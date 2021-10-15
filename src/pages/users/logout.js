import { clearToken } from '../../utils/token';
import { Redirect } from 'react-router';
import { useEffect } from 'react';

export default function Logout(props) {
  const logout = () => {
    clearToken();
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <div>
      <Redirect to="/users/login"></Redirect>
    </div>
  )
}