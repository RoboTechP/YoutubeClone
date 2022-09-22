import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material';
import {VideoDetail, SearchFeed, Feed,Navbar,ChannelDetail, Settings} from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'black'}} >
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' exact element={<VideoDetail/>} />
          <Route path='/channel/:id' exact element={<ChannelDetail/>} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
          {/* <Route path='/settings' exact element={<Settings/>} /> */}
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
