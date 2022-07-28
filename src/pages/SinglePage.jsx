import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import CharacterPage from '../components/CharacterPage/CharacterPage';

const SinglePage = () => {

    const [ idData, setIdDatas ] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://finalspaceapi.com/api/v0/character/${id}`).then(response => {
            const { data } =  response
            setIdDatas(data)} )
    }, [id])


    return ( 
        <>
            <CharacterPage idData={idData} />
            
        </>
     );
}
 
export default SinglePage;