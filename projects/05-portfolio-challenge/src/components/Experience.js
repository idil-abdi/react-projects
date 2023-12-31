import { Stack } from "react-bootstrap"

export const Experience = () => {
    return(
        <Stack >
            <h2 className="text-center">Experience</h2>
            <Stack gap={4}>
                
                    <div className="border m-auto px-5">
                        <h3>Front-End</h3>
                        <ul>
                            <li>HTML<p>Experience</p></li>
                            <li>CSS<p>Experience</p></li>
                            <li>JavaScript<p>Intermediate</p></li>
                        </ul>
                    </div>
                    <div className="border  m-auto px-5">
                        <h3>Back-End</h3>
                        <ul>
                            <li>Node JS<p>Beginner</p></li>
                            <li>Git<p>Beginner</p></li>
                            <li>React<p>Intermediate</p></li>
                        </ul>
                    </div>
                
            </Stack>
        </Stack>
    )
}