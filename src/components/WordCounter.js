import { Stack } from "react-bootstrap"
import Form from 'react-bootstrap/Form';

export const WordCounter = () => {
    return (
        <Stack gap={4} className="text-center">
            <Form.Control
                as="textarea"
                placeholder="Type here..."
                rows={5}
            />
            <Form.Text muted className="fs-5">
                Word Count: 0
            </Form.Text>
        </Stack>
    )
}