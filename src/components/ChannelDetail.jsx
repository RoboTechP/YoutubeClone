import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  useEffect(() => {
    fetchFromApi(`channels?part="snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
   
  }, [id]);
  console.log("Channel Detail is ", channelDetail, " and set videos detail is ", videos )
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" border="false"/>
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail