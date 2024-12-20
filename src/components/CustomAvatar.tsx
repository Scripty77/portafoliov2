import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ImgGojo from '../assets/gojo.jpg';

function CustomAvatar() {
    return (
        <Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    width: 'calc(100% - 30px)',
                    height: 'calc(100% - 30px)',
                    border: '7px dashed rgba(255, 255, 255, 0.6)',
                    borderRadius: '10px',
                }}
            />
            <Avatar
                alt="Gojo"
                src={ImgGojo}
                sx={{
                    width: 170,
                    height: 170,
                    justifyContent: 'center',
                }}
            />
        </Box>
    );
}

export default CustomAvatar;
