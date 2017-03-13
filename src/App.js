import React, { Component } from 'react';
//import logo from './logo.svg'; //check how this was imported :)
import './App.css';
//import GoogleClassroomData from './GoogleClassroomData';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Label from 'react-bootstrap/lib/Label';
import Image from 'react-bootstrap/lib/Image';

//This data should be retrived using the Google Classroom API
/*const profileData = [{
  name: "Luis Hernández",
  profilePicture: 'https://photos.mendeley.com/df/40/df405fea05ebb6ac5e45332a6bd355b864c8d40d-p256x256.jpg',
  totalPoints: '200',
  level: '2'
}

const courseData = {
  title: "Course 1",
  section: "Section of the course",
  description: "This is the description of the course",
  coursePoints: "34"
}*/


const badgeURL = 'http://icons.iconarchive.com/icons/seanau/fresh-web/128/Badge-icon.png';
const profilePictureURL = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRQ2I-OQdyCt2C254bl3enFSUpuwHlf0sgqJ6nTDAEMyPSSGTLy1BqyA';

class Dashboard extends React.Component {
  render () {
    return (
      <div className="dashboard">
        <Grid className="header">
          <Row>
              <Col xs={12} md={12}><h2>Students dashboard</h2></Col>
          </Row>
          <Row className="profile">
            <Col xs={12} md={3}>
              <Panel>
                <Profile
                  name="Luis Hernández"
                  profilePicture={profilePictureURL}
                />
                <Level level="1" />
                <TotalPoints points={12} />
                <Button bsStyle="primary">Log out</Button>
              </Panel>
            </Col>
            <Col xs={12} md={6}><CourseCollection /></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class Profile extends React.Component {
  render () {
    return (
        <div>
          <Image src='https://photos.mendeley.com/df/40/df405fea05ebb6ac5e45332a6bd355b864c8d40d-p256x256.jpg' alt={"Profile picture of " + this.props.name} circle className="profilePicture"/>
          <h4>Welcome {this.props.name}!</h4>
        </div>
    );
  }
}

class CourseCollection extends React.Component {
  render () {
    return <div>
          <Course title="Course 1"/>
          <Course title="Course 2"/>
          <Course title="Course 3"/>
        </div>
      }
}

class Course extends React.Component {

  render () {
    return <div>
              <Panel header={this.props.title}>
                <CoursePoints />
                <BadgeCollection />
              </Panel>
            </div>
  }
}


class BadgeCollection extends React.Component {
  render () {
    return(
      <div>
        <h5>Badges earned:</h5>
        <Panel>

            <Row>
              <Col xs={12} md={4}>
                <Badge badgeName="Badge 1" imgURL={badgeURL} />
              </Col>
              <Col xs={12} md={4}>
                <Badge badgeName="Badge 2" imgURL={badgeURL} />
              </Col>
              <Col xs={12} md={4}>
                <Badge badgeName="Badge 2" imgURL={badgeURL} />
              </Col>
            </Row>

        </Panel>
      </div>
    )
  }
}

class Badge extends React.Component {
  render () {
    return (
      <div>
            <Row><img src={this.props.imgURL} alt={this.props.badgeName} className="badge-img" /></Row>
            <Row><text>{this.props.badgeName}</text></Row>
      </div>
    );
  }
}


class Level extends React.Component {
  render () {
    return (
      <div>
        <h5>Level: <Label bsStyle="primary">{this.props.level}</Label></h5>
      </div>
    );
  }
}



class TotalPoints extends React.Component {
  render () {
    return (
      <div><ProgressBar bsStyle="success" now={this.props.points} /></div>
    );
  }
}

class CoursePoints extends React.Component {
  render () {
    return (
      <text>{this.props.points}</text>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
