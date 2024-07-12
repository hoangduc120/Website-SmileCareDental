import axiosInstance from "./axiosInstance";

export const login = async (email, password) => {
    try {
        const res = await axiosInstance.post('/api/auth/login', { email, password })
        const { token } = res.data
        localStorage.setItem('token', token)
        console.log('Đăng nhập thành công:', token)       
    } catch (error) {
        console.error('Lỗi đăng nhập:', error.res.data)
    }
}

export const fetchDashboard = async () => {
    try {
        const response = await axiosInstance.get('/dashboard');
        console.log('Dữ liệu dashboard:', response.data);
    } catch (error) {
        console.error('Lỗi khi truy cập dashboard:', error.response.data);
    }
};
export const fetchAdminPanel = async () => {
    try {
        const response = await axiosInstance.get('/admin');
        console.log('Dữ liệu admin:', response.data);
    } catch (error) {
        console.error('Lỗi khi truy cập admin:', error.response.data);
    }
};

  