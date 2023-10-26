import { Container, Stack } from "react-bootstrap"
import { Banner } from "./components/Banner"
import { WordCounter } from "./components/WordCounter"

export const App = () => {
    return (
        <Container className="border my-5 py-2 ">
            <Stack gap={4}>
                <Banner/>
                <WordCounter/>
            </Stack>
        </Container>
    )
}