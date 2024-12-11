import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ImgGojo from '../assets/gojo.jpg'

function CustomAvatar() {
  return (
    <Box
  >
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '2px solid rgba(255, 255, 255, 0.4)',
        borderRadius: '12px',
        animation: 'spin 4s linear infinite',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        left: 10,
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)',
        border: '2px dashed rgba(255, 255, 255, 0.6)',
        borderRadius: '12px',
        animation: 'spin-reverse 6s linear infinite',
      }}
    />
    {/* Avatar */}
    <Avatar
      alt="Gojo"
      src={ImgGojo}
      sx={{
        width: 190,
        height: 190,
      }}
    />
  </Box>
  );
};

export default CustomAvatar
