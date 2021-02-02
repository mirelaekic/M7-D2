import React, { Component } from 'react'
import { Container, Card, Row, Col  } from 'react-bootstrap'

export default class JobPost extends Component {
    render() {
        return (
            <div>
                <Container className="mt-4">
                    <Row>
                        <Col lg={4}>
                {this.props.job !== [] && this.props.job.map((j,index) => (
                    <Card className="mb-3" style={{ width: 'auto', height:"auto", border:"2px solid aliceblue", backgroundColor:"aliceblue" }}>
                    <Card.Body>
                      <Card.Title>{j.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{j.company}</Card.Subtitle>
                      <Card.Text>
                        {j.type}
                      </Card.Text>
                      <Card.Link>See more</Card.Link>
                    </Card.Body>
                  </Card>
                ))}
                </Col>
                <Col lg={8}>
                <h1>HIII</h1>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
