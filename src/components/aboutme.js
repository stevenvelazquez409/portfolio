import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="profile.png"
                style= {{height: '200px', borderRadius: '100px'}}
                alt="avatar"
              />
            </div>
              <h2 style={{paddingTop: '2em'}}>Steven Velazquez</h2>
              <h4 style={{color: 'grey'}}>Software Developer | Programmer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>I have been developing websites for the past six years. My primary focus is JavaScript Full Stack developer, but I also have other areas of skills such as Java, Python, Business Relations, Machine Learning, and Customer Relations. To the right, my resume and skill sets are shown.</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h5>Address</h5>
              <p>64 Hamilton Avenue, 07022</p>
              <h5>Phone</h5>
              <p>(201) 496-9853</p>
              <h5>Email</h5>
              <p>stevenvelazquez409@yahoo.com</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName='Montclair State University'
              schoolDescription="Bachelors of Science Information Technology"
            />
            <Education
              startYear={2007}
              endYear={2010}
              schoolName='Hudson County Community College'
              schoolDescription="Associate's Degree Liberal Arts"
            />
            <Education
              startYear={2004}
              endYear={2006}
              schoolName='Union Hill High School'
              schoolDescription="High School Graduate"
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>

            <h2>Experience</h2>
            <Experience
              startYear={2006}
              endYear={2006}
              jobName='Rick’s Development'
              jobDescription="Security Camera Installation Intern - Assisted in the installation of security cameras and communicated with clients regarding infrastructure and planned routes for camera installation. "
            />
            <Experience
              startYear={2016}
              endYear={2016}
              jobName='Arenite Group'
              jobDescription="Assisted with the development of client web applications, hosted client webpages on our company servers, maintained client websites and integrated new features."
            />
            <Experience
              startYear={2007}
              endYear='current'
              jobName='Walgreens'
              jobDescription="Developed interpersonal skills with customers, showed leadership qualities amongst coworkers, maintained photo machine/software"
            />

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={93}
            />
            <Skills
              skill="reactjs"
              progress={89}
            />
            <Skills
              skill="html"
              progress={89}
            />
            <Skills
              skill="css"
              progress={82}
            />
            <Skills
              skill="python"
              progress={79}
            />
            <Skills
              skill="java"
              progress={79}
            />
            <Skills
              skill="nodejs"
              progress={78}
            />
            <Skills
              skill="mongoDB"
              progress={74}
            />
            <Skills
              skill="java"
              progress={73}
            />
            <Skills
              skill="php"
              progress={72}
            />
            <Skills
              skill="mysql"
              progress={58}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
};

export default AboutMe;
