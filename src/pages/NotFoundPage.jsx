import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return ( 
        <>
            <h4 className='title' >This Page doesn't exist. Go &nbsp;<Link to='/'>home</Link></h4>
        </>
    );
}
 
export default NotFoundPage;