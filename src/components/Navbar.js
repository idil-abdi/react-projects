import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";


export const Navbar = () => {
    const navigate = useNavigate();

    return(
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                    display: "flex",
                    flexDirection: { md: "row", sm: "column" , xs:'column' },
                    justifyContent: { md: "space-between" },
                    }}
                >
                    <Box
                    sx={{ display: "flex", flexDirection: { md: "row", sm: "column", xs:'column' } }}
                    >
                    <Button
                        onClick={() => navigate("/")}
                        sx={{ my: 2, color: "white" }}>
                        Home
                    </Button>

                    <Button
                        onClick={() => navigate("/Products")}
                        sx={{ my: 2, color: "white" }}>
                        Products
                    </Button>
                    </Box>
                    <Box>
                        <IconButton onClick={() => navigate("/checkout")} sx={{ my: 2, color: "white" }}>
                            <Badge badgeContent={4} color="error">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};