import React from 'react'
import { useQuery, gql } from "@apollo/client"
import { Grid } from '@mui/material'
import Card from '../components/Card'
import { Box } from '@mui/system'
// import gql from 'graphql'


const Home = () => {
  const { loading, data: { getPosts: Post } } = useQuery(FETCH_POSTS_QUERY)
  console.log(Post)
  return (
    <Box sx={{width:"80%",margin:"auto"}}>
      <Grid container spacing={2}>
        {loading ? (
          <h1>Loading Post</h1>
        ) : (
          Post && Post.map(post => (
            <Card post={post} key={post.id} />
          ))
        )}
      </Grid>
    </Box>

  )
}
const FETCH_POSTS_QUERY = gql`
      {
        getPosts {
         id body createdAt username likeCount
         likes{
           username  
         }
         commentCount
         comments{
             id username createdAt body 
         }
     } 
    }
     
`



export default Home