
import {Box, Button, TextField} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { useState } from 'react'


const AddTodo = () => {
    const [task, setTask] = useState('')    // burada type inference yaptik. cunku her zaman type belirtmemize gerek yok. TypeScript type inference ozelligi sayesinde inital degerine gore otomatik type atamasi yapiyor
    const handleClick = () => {
        console.log(task)
        setTask('')
    }
  return (
    <Box sx={{
        display: { xs: 'block', sm:'flex'},
        justifyContent: {xs: 'flex-start', sm: 'center'},
        height: {xs: '120px', sm: '80px'},
        m: {xs: 1, sm: 'auto'}
    }}>
        <TextField
        id='outlined-basic'
        label= 'New Todo'
        color='success'
        sx={{minWidth: {xs: '100%', sm: '50%'}, height: '50px', m: 1}}
        variant='outlined'
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        inputProps={{maxLenght: 40}}
        ></TextField>
        <Button
        variant='contained'
        color='success'
        sx={{minWidth: {xs: '100%', sm: '15%'}, height: '55px', m: 1}}
        endIcon={<SaveIcon/>}
        onClick={handleClick}
        disabled={!task.trim()}
        >
            Save Todo
        </Button>
    </Box>
  )
}

export default AddTodo