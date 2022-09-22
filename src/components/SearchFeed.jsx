import { Box, Button,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Sidebar, Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Params, useParams } from 'react-router-dom'

const SearchFeed = () => {

  
  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();
  // console.log("Search Term is ", searchTerm)
  // console.log ("Data got with this search term is ", videos)

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <Box  p= {2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for :  <span style={{ color: "#FC1503" }}> {searchTerm}</span>
      </Typography>

      <Videos videos= {videos}>

      </Videos> 

  </Box>
  )
}

export default SearchFeed