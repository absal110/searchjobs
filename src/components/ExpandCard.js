import { useState } from "react"
import { Box, Typography, Button } from "@mui/material"

export const ExpandCard = ({data}) => {
    const [expanded,setExpanded] = useState(false)

    const handleExpand = () =>{
        setExpanded(prev => !prev)
    }

    return <Box>
        <Typography>{expanded ? data: data.substr(0,100)}</Typography>
                <Button onClick={handleExpand}>{expanded ? 'read less' : 'read more'}</Button>
    </ Box>
}