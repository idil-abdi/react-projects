import { Stack } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { useApp } from "../context/AppProvider"
import { Product } from "../components/product";

export const Checkout = () => {
        const {state} = useApp();
    return(
        <div>
            <Banner title='Checkout' subTitle='View or Edit Your Basket'/>
            <Stack gap={2} direction="horizontal" className="flex-wrap justify-content-evenly">
            {state.basket?.map((product) => {
            return <Product key={crypto.randomUUID()} product={product} showDelete/>; 
            })}
        </Stack>
        </div>
        
    )
};