import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Moment from 'react-moment';

export default class SingleJob extends Component {
  render() {
    console.log(this.props.job, "single job");
    const { job } = this.props;
    return (
      <div sticky="top">
        <Row >
          <Col lg={8}>
            <h1>{job.company}</h1>
            <a target="_blank" rel="noopener noreferrer" href={job.company_url}>{job.company_url}</a>
          </Col>
          <Col lg={4}>
            <img src={job.company_logo} style={{ width: "100%" }} />
          </Col>
        </Row>
        <Row>
          <Card style={{ width: "50rem" ,marginTop:"34px"}}>
              <Card.Header>
              <Card.Text className="text-muted">
              Posted at: <Moment format="Do MMMM YYYY">{job.created_at}</Moment> | {job.type}
              </Card.Text>
              </Card.Header>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>
              Location: {job.location}
              </Card.Text>
              <Card.Text>
              {job.description.replace(/<\/?[^>]+(>|$)/g, "")}
              </Card.Text>
            </Card.Body>
              <Card.Footer>
                  <Card.Link target="_blank" rel="noopener noreferrer" href={job.how_to_apply.replace(/<\/?[^>]+(>|$)/g, "")}>Apply here</Card.Link>
              </Card.Footer>
          </Card>
        </Row>
      </div>
    );
  }
}
