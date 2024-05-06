import './App.css';
import {Box, Container, Input, MenuItem, TextField, Typography} from '@mui/material'
import { JobList } from './components/JobList';
import { useState } from 'react';

function App() {
  const [query,setQuery] = useState({minExp: '', companyName: '', location: '', role: ''})

  const handleQuery = (e) =>{
    const {name, value} = e.target
    setQuery({...query,[name]:value})

  }

  return (<Container>
      <Box sx={{mt:2, display:'flex',flexWrap:'wrap',gap:2, justifyContent:'space-around'}}>
        <TextField label="Min experience" size='small' select name='minExp' value={query.minExp} sx={{width:160}} onChange={handleQuery}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </TextField>
        <TextField label="Company name" size='small'name='companyName' value={query.companyName} onChange={handleQuery}/>
        <TextField label="Location" size='small' name='location' value={query.location} onChange={handleQuery}/>
        <TextField label="Role" size='small' name='role' value={query.role} onChange={handleQuery}/>

      </Box>
      <JobList query = {query}/>
    </Container>
  );
}

export default App;
