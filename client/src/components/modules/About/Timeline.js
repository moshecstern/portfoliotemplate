import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

export default function OppositeContentTimeline(props) {
  return (
    <React.Fragment>
    {props.Seed.map(seed=> (

      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">{seed.DateStarted}</Typography>
            <Typography variant="h6" component="h1">
              {seed.Title}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
          <Typography variant="h6" component="h1">
              {seed.Role}
            </Typography>
            <Typography variant="p" component="p">
              {seed.DescriptionA}
            </Typography>
          </TimelineContent>
        </TimelineItem>
       
  
      </Timeline>
      ))}
    </React.Fragment>
  );
}