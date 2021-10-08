import axios from 'axios';

// export const key = 'AIzaSyCDWfrscG4in4lu9oKgxTJWXYKR2bkxgmw'

const api = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes?q='
})

export default api;

