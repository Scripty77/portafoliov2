import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

interface ProfileContainerProps {
    children: ReactNode;
    padding: number;
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({ children, padding }) => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: "flex",
                alignItems: "center",
                padding: 5,
                margin: 10,
                border: '5px solid #666',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
            }}
        >
            <Box sx={{ paddingRight: padding }}>{children}</Box>
        </Container>
    );
};

export default ProfileContainer;
