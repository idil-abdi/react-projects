import { useState } from "react";
import { Stack } from "react-bootstrap"
import Form from 'react-bootstrap/Form';

const getNumberOfWords = (words) => {
    // convert string to array
    const stringArray = words.split(' ')
    // remove all spaces
    const filteredArray = stringArray.filter((word) => {
            return word;
        });
    // return array length
    return filteredArray.length
}

export const WordCounter = () => {
    const [wordCount, setWordCount] = useState(0)

    const handleChange = ({ target }) => {
        // step 1: get value from the textarea
        const words = target.value;
        
        // step 2: get the word count of the value
        const numberOfWords = getNumberOfWords(words)

        // step 3: set word count value in state
        setWordCount(numberOfWords);
    }
    return (
        <Stack gap={4} className="text-center">
            <Form.Control
                as="textarea"
                placeholder="Type here..."
                rows={5}
                onChange={handleChange}
            />
            <Form.Text muted className="fs-5">
                Word Count: {wordCount}
            </Form.Text>
        </Stack>
    )
}