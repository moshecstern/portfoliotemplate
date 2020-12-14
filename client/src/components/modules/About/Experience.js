import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from './Timeline'
import H2 from '../layout/H2';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

      },
  }));

  const ExperienceSeed = [
    {
      Title: 'Churchland Psychological Center',
      catagory: 'Experience',
      DateStarted: '2020-04-01',
      DateEnded: '2020-07-01',
      Role: 'Web Developer',
      DescriptionA: 'Designed, and maintain website',
      DescriptionB: "Longer Info if i have it",
      Skills: ['GitHub', 'JavaScript', 'React', 'Node'],
      Website: 'https://',
      CodeLink: 'htttps://',
      Image: 'https://',
    },
    {
      Title: 'The Chevra',
      catagory: 'Experience',
      DateStarted: '2019-04-01',
      DateEnded: 'Current',
      Role: 'Web Solutions / Logistical Coordinator',
      DescriptionA: 'Designed, and maintain website',
      DescriptionB: "Longer Info if i have it",
      Skills: ['Wix', 'JavaScript', 'SalesForce', 'Google Sheets'],
      Website: 'https://www.chevra.net',
      // CodeLink: 'htttps://',
      Image: 'https://',
    },
    {
      Title: 'Churchland Psychological Center',
      catagory: 'Client',
      DateStarted: '2020-03-01',
      DateEnded: '2020-07-01',
      Role: 'Web Developer',
      DescriptionA: 'Designed, and maintain website',
      DescriptionB: "Longer Info if i have it",
      Skills: ['Wix', 'JavaScript', 'SalesForce', 'Google Sheets'],
      Website: 'https://www.chevra.net',
      // CodeLink: 'htttps://',
      Image: 'https://',
    },
    {
      Title: 'Full Stack Web Development Certificate',
      catagory: 'Education',
      DateStarted: '2019-10-01',
      DateEnded: '2020-02-01',
      Role: 'Web Developer',
      DescriptionA: 'University of Pennsylvania',
      DescriptionB: "Longer Info if i have it",
      Skills: ['Wix', 'JavaScript', 'SalesForce', 'Google Sheets'],
      Website: 'https://www.chevra.net',
      // CodeLink: 'htttps://',
      Image: 'https://',
    }
  ]
const Experience = props => {
    const classes = useStyles();
    // const authContext = useContext(AuthContext);
    // useEffect(() => {
    //     authContext.loadUser();
    //     // eslint-disable-next-line
    // }, []);
  
    
    return (
        <>
        <div className={classes.root}>
  <H2 title={'Experience'}/>
<Timeline 
Seed={ExperienceSeed}
/>

    </div>

</>
)
}
export default Experience;