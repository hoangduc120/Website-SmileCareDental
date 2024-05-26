import { Home, Book, People, CalendarToday, MonetizationOn, Logout } from '@mui/icons-material';
export const menuItems = [
    { to: '/dashboard', icon: <Home />, text: 'Dash board' },
    { to: '/clinic', icon: <Book />, text: 'Quản lý phòng khám' },
    { to: '/doctor', icon: <People />, text: 'Quản lý bác sĩ' },
    { to: '/patient', icon: <People />, text: 'Quản lý bệnh nhân' },
    { to: '/appointment', icon: <CalendarToday />, text: 'Quản lý lịch hẹn' },
    { to: '/financial', icon: <MonetizationOn />, text: 'Quản lý tài chính' },
    { to: '/', icon: <Logout />, text: 'Đăng xuất' }
];