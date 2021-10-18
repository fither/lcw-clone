const apiURL = 
  process.env.NODE_ENV === 'development' ? 
  'https://localhost:5001/api' :
  'https://webapistaging.azurewebsites.net/api';

export default apiURL;