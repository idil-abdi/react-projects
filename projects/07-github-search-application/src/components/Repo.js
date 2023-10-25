import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap";
export const Repo = ({repo}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://placehold.co/600x400" />
            <Card.Body>
                <Card.Title>{repo.name}</Card.Title>
                <Card.Text>{repo.description}</Card.Text>
                <Button variant="warning" href={repo.html_url} target="_blank">View on GitHub</Button>
            </Card.Body>
        </Card>
    );
};