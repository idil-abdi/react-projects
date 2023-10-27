import { Container, Stack } from "react-bootstrap"
import { Header } from "./components/Header"
import { Profile } from "./components/Profile"
import { Experience } from "./components/Experience"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"

export const App = () => {
    return (
        <Container className="border my-3">
            <Stack gap={5}>
                <Header/>
                <Profile/>
                <Experience/>
                <Projects/>
                <Footer/>
            </Stack>
        </Container>
    )
}