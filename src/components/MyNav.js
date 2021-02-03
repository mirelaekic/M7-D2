import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import JobPost from "./JobPost";
import Home from "./Home"
export default class MyNav extends Component {
  state = {
    newSearch: { position: "", location: "" },
    jobs: [],
    selectedJob: null,
  };
  changeJob = (id) => this.setState({ jobSelected: id });
  changeHandler = (e) => {
    this.setState({
      newSearch: {
        ...this.state.newSearch,
        [e.target.id]: e.target.value,
      },
    });
  };
  fetchJobs = async () => {
    try {
      let proxy = "https://miksflame-observablehq.herokuapp.com/";
      let position = this.state.newSearch.position;
      let location = this.state.newSearch.location;
      let response = await fetch(
        `/positions.json?description=${position}&location=${location}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ jobs: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    console.log(this.state.jobs, "FOUND JOBS");
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <strong>GitHub</strong>Jobs
            </Navbar.Brand>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Position"
                className="mr-sm-2"
                value={this.state.position}
                onChange={(e) => this.changeHandler(e)}
                id={"position"}
              />
              <FormControl
                type="text"
                id={"location"}
                placeholder="Location"
                className="mr-sm-2"
                value={this.state.location}
                onChange={(e) => this.changeHandler(e)}
              />
              <Button variant="outline-primary" onClick={this.fetchJobs}>
                Search
              </Button>
            </Form>
            <Nav className="ml-auto">
              <Nav.Link href="#home">All jobs</Nav.Link>
              <Nav.Link href="#features">Post a job</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {this.state.jobs.length > 0 ? (
          <JobPost
            key={this.state.jobs.id}
            job={this.state.jobs}
            changeJob={this.changeJob}
            jobSelected={this.state.selectedJob}
          />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}
