import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import SinglePage from './pages/SinglePage';

function App() {

  const [data, setData ] = useState()
  const url = 'https://finalspaceapi.com/api/v0/character/'

  const fetchData = () => {
    axios.get(url).then(response => {
      const { data } =  response
      setData(data)} )
  }

  useEffect(() => {
      fetchData();

  }, []);


  return (
    <>
    <Routes>
      <Route path='/' element={ <Layout/>}>
        <Route index element={ <HomePage data={ data } /> } />
        <Route path='/character/:id' element={ <SinglePage/> } />
        <Route path='/characters/:id' element={ <Navigate to='/character/:id'/>} />
        <Route path='about' element={ <About/> } />
        <Route path='/404' element={ <NotFoundPage/> } />
        <Route path='/*' element={ <Navigate to='404'/> } />
        </Route>
    </Routes>

    </>
  );
}

export default App;
