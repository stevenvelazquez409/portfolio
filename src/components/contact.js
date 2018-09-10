import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Steven Velazquez</h2>
            <img
              src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man4-512.png"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi, thank you for taking your time to view my portfolio. Please feel free to contact me. </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (201) 496-9853
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    svelaztz3@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    live:stevenvelazquez409
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
};

export default Contact;
