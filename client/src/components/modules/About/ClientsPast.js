import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageRow from '../layout/ImageRow';
import H2 from '../layout/H2';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const ClientsPast = () => {
    const classes = useStyles();


const Clients = [
{
  url: 'images/profileimage2.JPG'
},
{
  url: 'images/profileimage2.JPG'
},
{
  url: 'images/profileimage2.JPG'
}
]


    return(
        <>
<H2 title={'Past Clients'} />

<ImageRow MyClients={Clients} />


    </>
    )

  }
  export default ClientsPast; 