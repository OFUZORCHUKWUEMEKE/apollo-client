import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const likePost = ()=>{
   console.log('like Post')
}

const commentOnPost = ()=>{
   console.log('comment Post')
}

export default function BasicCard({ id, body, createdAt, username, likeCount, commentCount, likes }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textDecoration: "none", color: 'black' }}>
                <Stack spacing={2}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        @{username}
                    </Typography>
                    <Typography variant="p" component="div">
                        {moment(createdAt).fromNow(true)}
                    </Typography>
                    <Typography variant="body2">
                        {body}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: "center" }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <p>{likeCount}</p>
                            <FavoriteBorderIcon sx={{ cursor: 'pointer', marginLeft: "5px", color: "red" }} onClick={likePost}/>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center", marginLeft: '15px' }}>
                            <InsertCommentIcon sx={{ cursor: 'pointer' }} onClick={commentOnPost} />
                            <p>{commentCount}</p>
                        </div>
                    </div>

                </Stack>

            </CardContent>

        </Card>
    );
}
