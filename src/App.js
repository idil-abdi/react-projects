import { Container } from "react-bootstrap"
import { Welcome } from "./components/Welcome"

export const App = () => {
    return (
        <Container className="my-5 text-center">
            <Welcome/>
        </Container>
    )
}