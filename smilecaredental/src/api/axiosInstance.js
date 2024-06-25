import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Đổi URL này thành URL của API backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;