import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Services() {
    return (
        <div>
            <Container>
                <h1 style={{ textAlign: "center", color: "red", textDecoration: "underline" }}>Services</h1>
                <Row style={{ marginTop: "2em" }}>
                    {/* first card */}
                    <Col>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", }}>First Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card .
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* second card */}
                    <Col>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731929464035-1ba6df40565f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Second Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card.
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* third card */}
                    <Col>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731946660299-8f091eb1caee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body >
                                <Card.Title style={{ textAlign: "center" }}>Third Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card .
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* fourth card */}
                    <Col>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731946660299-8f091eb1caee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body >
                                <Card.Title style={{ textAlign: "center" }}>Third Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card .
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* second row */}
                <Row style={{ marginTop: "2em" }}>
                    {/* first card */}
                    <Col >
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>First Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card .
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* second card */}
                    <Col>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731929464035-1ba6df40565f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>Second Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card.
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* third card */}
                    <Col>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731946660299-8f091eb1caee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body >
                                <Card.Title style={{ textAlign: "center" }}>Third Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card.
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* fouth card */}
                    <Col>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1731946660299-8f091eb1caee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Body >
                                <Card.Title style={{ textAlign: "center" }}>Third Card</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card .
                                </Card.Text>
                                <Button variant="success" style={{ textAlign: "center" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services