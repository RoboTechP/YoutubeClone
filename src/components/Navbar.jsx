import {Stack} from '@mui/material' 
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'
import Settings from './Settings'
import SettingsIcon from '@mui/icons-material/Settings';
const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} 
    sx={{position: 'sticky', background: '#000', top:0, justifyContent:'space-between'}}>
    
    <Link to ='/'style={{display:'flex',alignItems: 'center'}}>
      <img src = {logo} alt = "logo" height= {45} />
    </Link>
    <Stack  direction='row' alignItems='end' > 
    <SearchBar/> 
    {/* <Link to ='/settings' >
    <SettingsIcon type='submit' sx={{ml:{xs:2, md:3}, pb:1, cursor:'pointer', color:{xs:'red', md:'white'}}} /> 
    </Link> */}
   
    </Stack>
   
    </Stack>
  )
}

export default Navbar