import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import { useApp } from "../context/AppProvider"

export const Product = ({product, showDelete}) => {
    const {dispatch} = useApp();

    
    const HandleAddItem = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: product,
        });
    }

        const HandleRemoveItem = () => {
            dispatch({
                type: 'REMOVE_ITEM',
                payload: product.id,
            });
        }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {product.label}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {product.displayPrice}
                </Typography>
            </CardContent>
            <CardActions>
                {showDelete ? (
                <IconButton onClick={HandleRemoveItem}>
                    <RemoveIcon />
                </IconButton>
                ) : (
                <IconButton onClick={HandleAddItem}>
                    <AddIcon />
                </IconButton>
                )}
            </CardActions>
        </Card>
    );
};