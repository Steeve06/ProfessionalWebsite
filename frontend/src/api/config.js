// This checks if the app is running on Vercel. 
// If not, it defaults to your local Django server.
//
const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

export default BASE_URL;