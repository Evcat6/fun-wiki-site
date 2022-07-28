import React from 'react';
import styles from './CharacterPage.module.css';
import { Skeleton } from '@mui/material'
import GoBackLink from '../UI/GoBackLink/GoBackLink';


const CharacterPage = ({idData}) => {
    return ( 
        <>
            {idData? (
                <div className={styles.container}>
                    <div><img src={idData.img_url} alt={idData.name} className={styles.img} /></div>
                
                <div className={styles.characterInfo} >
                    <h1>Name: {idData.name}</h1>
                    <h2>Species: {idData.species}</h2>
                    <h2>Gender: {idData.gender}</h2>
                    <h2>Hair: {idData.hair}</h2>
                    {idData.alias.length !== 0 && <h2>About: {idData.alias.join(', ')}</h2>}
                    <h2>Abilities: {idData.abilities.join(', ')} </h2>
                    <GoBackLink to='/' >Go Back</GoBackLink>
                </div>
                </div>
            )
            : 
            (
            <div className={styles.container}><Skeleton  variant="rectangular" width={300} height={300} animation="wave"  />
                <div className={styles.characterInfo} >
                    <Skeleton variant="rectangular " width={503} height={36} animation="wave"  />
                    <Skeleton variant="rectangular" width={503} height={48} animation="wave"  />
                </div>
            </div>
            )
            
            }
        </>
    );
}
 
export default CharacterPage;