import { useState } from "react";
import { Stack } from "react-bootstrap"
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap"
import { buildUrl } from "../utils/buildUrl";

export const SearchForm = ({onSuccess}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('organisation');
    const [formError, setFormError] = useState(false)

    const handleChange = ({target}) => {
        setSearchTerm(target.value);
    }

    const handleClick = ({target}) => {
        if (target.name === 'organisation') {
            setSearchType('organisation');
        }
        if (target.name === 'username') {
            setSearchType('username')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!searchTerm) {
            setFormError(true)
        }else{
            const url = buildUrl(searchTerm, searchType);
            onSuccess(url);
        }
    }

    return (
        <Stack>
            <Stack  gap={1} direction="horizontal" className="mb-2 justify-content-center">
                <Button 
                    variant="primary" 
                    name="organisation" 
                    onClick={handleClick}>Organisation
                </Button>
                <Button 
                    variant="primary" 
                    name="username" 
                    onClick={handleClick}>Username
                </Button>
            </Stack>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control value={searchTerm} onChange={handleChange} type="text" placeholder= {`Enter ${searchType}`} />
                    {formError && (
                        <Form.Text className="text-danger">
                            Please enter a valid {searchType}.
                        </Form.Text>
                    )}
                </Form.Group>
                
                <Button variant="success" type="submit">
                    Search
                </Button>
            </Form>
        </Stack>
    );
};