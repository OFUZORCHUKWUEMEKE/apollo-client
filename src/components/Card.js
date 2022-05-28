import { Box, Grid } from '@mui/material'
import React from 'react'
import BasicCard from './Cards'

const Card = ({post}) => {
    const {id,body,createdAt,username,likeCount,commentCount,likes} = post
  return (
    <Grid item xs={12} sm={12} md={6}>
        <Box px={4} py={2}>
            <BasicCard id={id} body={body} createdAt={createdAt} username={username} likeCount={likeCount} commentCount={commentCount} likes={likes}/>
        </Box>
    </Grid>
  )
}

export default Card