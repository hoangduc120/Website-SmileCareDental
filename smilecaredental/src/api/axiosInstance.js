import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Đổi URL này thành URL của API backend
    headers: {
        'Content-Type': 'application/json',
    },
});
// thêm inrerceptor để thêm token vào header Authorization
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}` 
        }
        return config
    },
    (error) =>{
        return Promise.reject(error)
    }
)

export default axiosInstance;
