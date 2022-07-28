import React from 'react'
import { Grid, CardActionArea, CardMedia, CardContent, Typography,Skeleton } from '@mui/material'
import styles from './Cards.module.css'
import CharacterLink from '../UI/CharacterLink/CharacterLink'

const Cards = ({data}) => {
    return ( 
        <>
            <h1 className={styles.title} >Final Space Wiki</h1>
            <Grid className={styles.container} container spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>
              {data ? data.map((post) => 
              
              <Grid className={styles.gridContainer} key={post.id} item component={CardActionArea} sx={{ maxWidth: 345 }}>
            <CardMedia
            component="img"
            height="300"
            image={post.img_url}
            />
            <CardContent>
              <CharacterLink to={`/character/${post.id}`} >
            <Typography className={styles.typography} >{post.name}</Typography>
            </CharacterLink>
            </CardContent>
            </Grid>
              
              
        ) : (<Skeleton variant="rectangular" width={345} height={380} animation="wave" />) 
      }
          </Grid>
      </>
    );
}
 
export default Cards;