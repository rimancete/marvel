import axios from 'axios';
import { baseURL } from './api';

export default axios.create({
  baseURL: `${baseURL}`,
});
