import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HeaderH2 from '../layout/H2'
import SkillsCard from './SkillsCard';
// import { urlencoded } from 'express';

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 150,
    // maxWidth: 250,
    flexGrow: 1,
    margin: theme.spacing(10,8),
    padding: theme.spacing(10,8),
    // backgroundImage: 'url(https://i.pinimg.com/736x/1a/96/98/1a9698c45ba21c7c1a6e3775bfc9a6a4.jpg)',
    backgroundColor: '#23295D'
    


  },
}));
const Skills = props => {
// export default function OutlinedCard() {
  const classes = useStyles();


const SkillsAll = [
    'GitHub', 'JavaScript', 'React', 'Node', 'React', 'MongoDB', 'SQL', 'Architect'
]




  return (
      <>
         <div className={classes.root}>
         <HeaderH2 title={'Skills'} />
      <Grid container spacing={3}
      direction="row"
      >
        
      {SkillsAll.map(Skill => (
        <Grid item xs={2}>
   <SkillsCard title={Skill} />
   </Grid>
      ))}
      </Grid>
      </div>
   </>
  );
}
export default Skills;