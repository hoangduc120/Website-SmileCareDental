// import React, { useState, useEffect } from 'react';
// import { Typography, Grid, Card, CardContent, TextField, Button, Select, MenuItem, Box, Container } from '@mui/material';

// const UserInfo = () => {
//   const [userData, setUserData] = useState({
//     username: 'hoangduc',
//     name: 'Hoàng Việt Đức',
//     dob: '2003-03-03',
//     gender: 'male',
//     phone: '+84 123456789',
//     email: 'tuananh@example.com',
//     address: 'Số 123, Phố XYZ, Quận ABC',
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     // Fetch initial user data from API or database here
//   }, []);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = async () => {
//     // Validate user data here (e.g., email format, DOB range)
//     // Implement logic to save updated data to API or database here
//     // Handle success or error scenarios and provide feedback to the user
//     setIsEditing(false); // Assume saving is successful, disable editing mode
//   };

//   const handleCancel = () => {
//     // Logic to reset user data to original state if editing is cancelled
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     if (id === 'dob') {
//       setUserData({ ...userData, dob: value });
//     } else {
//       setUserData({ ...userData, [id]: value });
//     }
//   };

//   return (
//     <Container maxWidth="lg">
//       <Box sx={{ flexGrow: 1, p: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <Typography variant="h5">Thông tin khách hàng</Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Card>
//               <CardContent>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">Tên đăng nhập:</Typography>
//                     <TextField
//                       id="username"
//                       value={userData.username}
//                       variant="outlined"
//                       fullWidth
//                       disabled
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">Họ và tên:</Typography>
//                     <TextField
//                       id="name"
//                       value={userData.name}
//                       variant="outlined"
//                       fullWidth
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">Ngày sinh:</Typography>
//                     <TextField
//                       id="dob"
//                       value={userData.dob}
//                       variant="outlined"
//                       fullWidth
//                       type="date"
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">Giới tính:</Typography>
//                     <Select
//                       id="gender"
//                       value={userData.gender}
//                       onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
//                       fullWidth
//                       disabled={!isEditing}
//                     >
//                       <MenuItem value="male">Nam</MenuItem>
//                       <MenuItem value="female">Nữ</MenuItem>
//                       <MenuItem value="other">Khác</MenuItem>
//                     </Select>
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">Số điện thoại:</Typography>
//                     <TextField
//                       id="phone"
//                       value={userData.phone}
//                       variant="outlined"
//                       fullWidth
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">Email:</Typography>
//                     <TextField
//                       id="email"
//                       value={userData.email}
//                       variant="outlined"
//                       fullWidth
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <Typography variant="body2">Địa chỉ:</Typography>
//                     <TextField
//                       id="address"
//                       value={userData.address}
//                       variant="outlined"
//                       fullWidth
//                       multiline
//                       rows={4}
//                       onChange={handleChange}
//                       disabled={!isEditing}
//                     />
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             {isEditing ? (
//               <>
//                 <Button variant="contained" color="primary" onClick={handleSave} sx={{ mr: 2 }}>
//                   Lưu
//                 </Button>
//                 <Button variant="contained" color="secondary" onClick={handleCancel}>
//                   Hủy
//                 </Button>
//               </>
//             ) : (
//               <Button variant="contained" color="secondary" onClick={handleEdit}>
//                 Chỉnh sửa
//               </Button>
//             )}
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default UserInfo;



import React, { useState, useEffect } from 'react';
import { Typography, Grid, Card, CardContent, TextField, Button, Select, MenuItem, Box, Container } from '@mui/material';

const UserInfo = () => {
  const [userData, setUserData] = useState({
    username: 'hoangduc',
    name: 'Hoàng Việt Đức',
    dob: '2003-03-03',
    gender: 'male',
    phone: '+84 123456789',
    email: 'tuananh@example.com',
    address: 'Số 123, Phố XYZ, Quận ABC',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch initial user data from API or database here
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    // Validate user data here (e.g., email format, DOB range)
    // Implement logic to save updated data to API or database here
    // Handle success or error scenarios and provide feedback to the user
    setIsEditing(false); // Assume saving is successful, disable editing mode
  };

  const handleCancel = () => {
    // Logic to reset user data to original state if editing is cancelled
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'dob') {
      setUserData({ ...userData, dob: value });
    } else {
      setUserData({ ...userData, [id]: value });
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Thông tin khách hàng</Typography>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body2">Tên đăng nhập:</Typography>
                    <TextField
                      id="username"
                      value={userData.username}
                      variant="outlined"
                      fullWidth
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Họ và tên:</Typography>
                    <TextField
                      id="name"
                      value={userData.name}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Ngày sinh:</Typography>
                    <TextField
                      id="dob"
                      value={userData.dob}
                      variant="outlined"
                      fullWidth
                      type="date"
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Giới tính:</Typography>
                    <Select
                      id="gender"
                      value={userData.gender}
                      onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                      fullWidth
                      disabled={!isEditing}
                    >
                      <MenuItem value="male">Nam</MenuItem>
                      <MenuItem value="female">Nữ</MenuItem>
                      <MenuItem value="other">Khác</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Số điện thoại:</Typography>
                    <TextField
                      id="phone"
                      value={userData.phone}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Email:</Typography>
                    <TextField
                      id="email"
                      value={userData.email}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Địa chỉ:</Typography>
                    <TextField
                      id="address"
                      value={userData.address}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {isEditing ? (
              <>
                <Button variant="contained" color="primary" onClick={handleSave} sx={{ mr: 2 }}>
                  Lưu
                </Button>
                <Button variant="contained" color="secondary" onClick={handleCancel}>
                  Hủy
                </Button>
              </>
            ) : (
              <Button variant="contained" color="secondary" onClick={handleEdit}>
                Chỉnh sửa
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default UserInfo;
