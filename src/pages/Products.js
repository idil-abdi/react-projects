import { Stack } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { Product } from "../components/product";

const products = [
    {
        id: '1',
        label: 'T-Shirt',
        price: 25,
        displayPrice: '£25.00'
    },
    {
        id: '2',
        label: 'Shoe',
        price: 49,
        displayPrice: '£49.00'
    },
    {
        id: '3',
        label: 'Socks',
        price: 5,
        displayPrice: '£5.00'
    },
    {
        id: '4',
        label: 'Tv',
        price: 200,
        displayPrice: '£200.00'
    },
    {
        id: '5',
        label: 'Bag',
        price: 28,
        displayPrice: '£28.00'
    },
    {
        id: '6',
        label: 'Cake Tin',
        price: 9,
        displayPrice: '£9.00'
    },
    {
        id: '7',
        label: 'Jacket',
        price: 50,
        displayPrice: '£50.00'
    },
    {
        id: '8',
        label: 'Tote Bag',
        price: 17,
        displayPrice: '£17.00'
    },
    {
        id: '9',
        label: 'Cargo Pants',
        price: 15,
        displayPrice: '£15.00'
    },
    {
        id: '10',
        label: 'Belt',
        price: 20,
        displayPrice: '£20.00'
    }
]

export const Products = () => {
    return(
        <div>
        <Banner title="Products" subTitle="Select your products to buy" />
        <Stack gap={5} direction="horizontal" className="flex-wrap justify-content-evenly">
            {products.map((product) => {
            return <Product key={crypto.randomUUID()} product={product}/>; 
            })}
        </Stack>
        </div>
    )
};