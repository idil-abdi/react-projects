import { Stack } from "react-bootstrap"
import { Button } from "react-bootstrap"

export const Header = () => {
    return(
        <Stack gap={4} className="p-4 border rounded-bottom-3 text-center">
            <div className="d-flex justify-content-evenly gap-4 flex-wrap">
                <div className="text-start">
                    Welcome <h1>I'm Edil Abdiaziz</h1> A Front-End Developer
                </div>
                <Stack gap={2} direction="horizontal">
                    <Button variant="primary">Download CV</Button>
                    <Button variant="primary">Contact Info</Button>
                </Stack>
            </div>
        </Stack>
    )
}