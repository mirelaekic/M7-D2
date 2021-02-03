import React, { Component } from 'react'
import { Container, Card, Row, Col  } from 'react-bootstrap'
import SingleJob from "./SingleJob"
export default class JobPost extends Component {
    state={
        jobSelected:null,
        thejob:{},
    }
    changeJob = (id) => this.setState({jobSelected: id})
    updateState(){
        this.setState({
            thejob: this.props.job.filter(j => j.id === this.state.jobSelected)
        })
    }
    render() {
        console.log(this.props.job,"ALL JOBS")
        console.log(this.state.jobSelected)
        console.log(this.state.thejob,"CLICKED JOB")
        return (
            <div>
                <Container className="mt-4">
                    <Row>
                        <Col lg={4}>
                {this.props.job !== [] && this.props.job.map((j,index) => (
                    <Card key={index.id} className="mb-3" style={{ width: 'auto', height:"auto", border:"2px solid aliceblue", backgroundColor:"aliceblue" }}>
                    <Card.Body>
                      <Card.Title>{j.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{j.company}</Card.Subtitle>
                      <Card.Text>
                        {j.location}
                      </Card.Text>
                      <Card.Link onClick={() => this.changeJob(j.id)}>See more</Card.Link>
                     </Card.Body>
                  </Card>
                ))}
                </Col>
                <Col lg={8}>
                {this.props.job.filter(j => j.id === this.state.jobSelected).map(jo => (
                    <SingleJob
                    job={jo}
                    key={jo.id}
                    changeJob={this.changeJob}
                    jobSelected={this.state.jobSelected}
                    />
                   )) }
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
