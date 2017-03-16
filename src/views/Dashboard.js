import React, { Component } from 'react';
//import logo from './logo.svg'; //check how this was imported :)
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Label from 'react-bootstrap/lib/Label';
import Image from 'react-bootstrap/lib/Image';
import GoogleClassroomData from '../components/GoogleClassroomData';

const badgeURL = 'http://icons.iconarchive.com/icons/seanau/fresh-web/128/Badge-icon.png';
const profilePictureURL = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRQ2I-OQdyCt2C254bl3enFSUpuwHlf0sgqJ6nTDAEMyPSSGTLy1BqyA';
//const accessToken = Login.accessToken;

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
              </Panel>
              <CourseCollection />
            </Col>
            <Col xs={12} md={9}>
                <Assignment title="Assigment 1" />
            </Col>
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
          <CourseOverview title="Course 1"/>
          <CourseOverview title="Course 2"/>
          <CourseOverview title="Course 3"/>
        </div>
      }
}

class CourseOverview extends React.Component {

  render () {
    return <div>
              <Panel header={this.props.title}>
                <Course id="12345"/>
                <h5>Total points: <CoursePoints points="35"/></h5>
                <BadgeCollection />
              </Panel>
            </div>
  }
}

class Course extends React.Component {
  render() {
    return(
      <div>
        <text>{this.props.id}</text>
        <text>{this.props.title}</text>
        <text>{this.props.description}</text>
      </div>
    )
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
            <text>{this.props.badgeID}</text>
            <text>{this.props.isEarned}</text>
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

class Assignment extends React.Component {
  render () {
    return (
      <Panel header={this.props.title}>

          <text>{this.props.topic}</text>
          <text>{this.props.description}</text>
          <text>{this.props.maxPoints}</text>
          <text>{this.props.dueDate}</text>
          <Row>

          </Row>
          <Row>
            <Badge badgeID="1" badgeName="Badge 1" imgURL={badgeURL} isEarned="true"/>
          </Row>
      </Panel>

    );
  }
}

export default Dashboard;
