import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
        {/*Project 1*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Z1-vMBYwmrWcZivponaCoCHvo_h0LNRJKlo1wFnAJIuDlHAM) center/cover'}}>
            R.S.V.P
          </CardTitle>
          <CardText>
            Simple web app that an rsvp invitation form.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/stevenvelazquez409/r-s-v-p" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Z1-vMBYwmrWcZivponaCoCHvo_h0LNRJKlo1wFnAJIuDlHAM) center/cover'}}>
            Fetch Weather
          </CardTitle>
          <CardText>
            Simple web application for displaying weather based on city and country. Fetching API data used in this web application.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/stevenvelazquez409/weather-app" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 3*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Z1-vMBYwmrWcZivponaCoCHvo_h0LNRJKlo1wFnAJIuDlHAM) center/cover'}}>
            Random Pet Image
          </CardTitle>
          <CardText>
            App that returns pet images from an API
          </CardText>
          <CardActions border>
            <Button href="https://github.com/stevenvelazquez409/random-pet" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }else if(this.state.activeTab === 1){
      return(
        <div className="projects-grid">
        {/*Project 1*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://miro.medium.com/max/902/1*alZcSIb0lcN7gQIx2tJ_tg.png) center/cover'}}>
            FlashCard
          </CardTitle>
          <CardText>
            Simple web app that helps you study.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/stevenvelazquez409/flashcards" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/*Project 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://miro.medium.com/max/902/1*alZcSIb0lcN7gQIx2tJ_tg.png) center/cover'}}>
            User Authenticator
          </CardTitle>
          <CardText>
            Web Application that demonstrates the user authentication UI.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/stevenvelazquez409/user_auth" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
        {/*Project 1*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(https://i.ytimg.com/vi/qvHecQOiu8g/maxresdefault.jpg) center/cover'}}>
            COMING SOON...
          </CardTitle>
          <CardText>
            AngularJS project currently in progress...will update soon.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/stevenvelazquez409/" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card></div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div className="projects-grid">
        {/*Project 1*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px',
          background: 'url(mongo.png) center/cover'}}>
            COMING SOON...
          </CardTitle>
          <CardText>
            MongoDB project currently in progress...will update soon.
          </CardText>
          <CardActions border>
            <Button href="https://github.com/stevenvelazquez409/" colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card></div>
      )
    }
  }



  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Express</Tab>
          <Tab>Angular</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    );
  }
};

export default Projects;
