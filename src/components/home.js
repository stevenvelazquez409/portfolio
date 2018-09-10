import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends React.Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src='https://images.vexels.com/media/users/3/140800/isolated/preview/86b482aaf1fec78a3c9c86b242c6ada8-man-profile-avatar-by-vexels.png'
              alt='avatar'
              className='avatar-img'
             />

             <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML | CSS | JavaScript | React | Vue | NodeJS | Express | MongoDB</p>

              <div className="social-links">

                {/* LinkedIn Profile */}
                <a href="https://www.linkedin.com/in/velazquezs3" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github Profile */}
                <a href="https://github.com/stevenvelazquez409" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Youtube Profile */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

              </div>
             </div>
          </Cell>
        </Grid>
      </div>
    );
  }
};

export default Home;
