import React from 'react';
// import React, { useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';

// import {Link} from 'react-router-dom';
import ServicesMenu from '../modules/Services/ServicesMenu'

const Services = () => {
    // const authContext = useContext(AuthContext);

    // useEffect(() => {
    //     authContext.loadUser();
    //     // eslint-disable-next-line
    // }, []);

    
    return (
        <>
<div>
    <h2>Welcome Services Page</h2>
{/* use history to update dom to switch to new page */}
{/* <button onClick={()=> props.history.push('/about')}>About</button> */}
{/* end example */}
<ServicesMenu />
</div>
</>
)
}
export default Services;