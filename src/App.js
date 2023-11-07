import { Container, Stack } from "react-bootstrap";
import { Banner } from "./components/Banner";
import { Words } from "./components/Words";

export const App = () => {
    return(
        <Container>
            <Stack gap={3}>
                <Banner/>
                <Words/>
            </Stack>
        </Container>
        
    )
};