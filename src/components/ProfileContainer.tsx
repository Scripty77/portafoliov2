import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

interface ProfileContainerProps {
    children: ReactNode; // Para permitir contenido dinámico dentro del contenedor
    padding: number; // Separación entre avatar y texto
  }
  
  const ProfileContainer: React.FC<ProfileContainerProps> = ({ children, padding }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', // Alinea los elementos en fila
          alignItems: 'center', // Centra verticalmente los elementos
          padding: 2, // Espacio alrededor del contenedor
          margin: 3, // Margen exterior
          border: '2px solid #666', // Borde alrededor del contenedor
          borderRadius: '10px', // Bordes redondeados
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo semitransparente
        }}
      >
        <Box sx={{ paddingRight: padding }}>
          {children}
        </Box>
      </Box>
    );
  };
  
  export default ProfileContainer;