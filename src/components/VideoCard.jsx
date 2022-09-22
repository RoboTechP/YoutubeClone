import React from 'react'
import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
const VideoCard = ({video: {id: {videoId}, snippet}}) => {

  console.log ("Video ID is ", videoId)
 
  const mybutton=()=> {
    console.log ("this is beinbg clicked")
  }

  return (
    <Card sx = {{md: {width: '280px', height: '270px', xs: '100%'}, backgroundColor:'#1e1e1e', boxShadow:'none', borderRadius: '0'}}>
    <Link to={videoId? `/video/${videoId}`: `/video/cV2gBU6hKfY`} onclick = {mybutton}>
    <CardMedia image= {snippet?.thumbnails?.high?.url} alt = {snippet?.title} sx ={{ height:'0', 'paddingTop': '56.25%', 'marginTop':'30'}}/>
    </Link>
    <CardContent >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle2" fontWeight="bold" color="#FFF" >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle3" color="red">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
    </Card>
  )
}

export default VideoCard