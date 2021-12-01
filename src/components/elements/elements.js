import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";


export const ColorButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#8ADD37',
    textTransform: 'initial',
    borderRadius: '25px',
    width: '250px',
    height: '50px',
    '&:hover': {
        backgroundColor: '#8ADD37',
    },
}));