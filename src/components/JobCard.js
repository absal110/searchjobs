import { Box, Button, Container, Link, Paper, Typography,  } from "@mui/material";
import { useState } from "react";
import { ExpandCard } from "./ExpandCard";

export const JobCard = ({jobs}) => {
    return <Box sx={{pt: 4, display: 'flex', justifyContent: 'space-around', gap : 4, flexWrap: 'wrap'}}>
    {jobs.map((data) => {

        return <Paper elevation={3} square={false} sx={{borderRadius: 5, width : 250}} key={data.jdUid}>
            <Box sx={{m:3}}>
            <Box sx={{display:"flex"}}>
                <Box sx={{height:40,width:25, m:1}} component="img" alt="Company Logo" src={data.logoUrl}></Box>
                <Box >
                    <Typography>{data.companyName}</Typography>
                    <Typography>{data.jobRole}</Typography>
                    <Typography>{data.location}</Typography>
                </Box>
            </Box>
                <ExpandCard data = {data.jobDetailsFromCompany}></ExpandCard>
                {data.minExp ? (<Box sx={{py:2}}>
                    <Typography>Minimum Experience</Typography>
                    <Typography>{data.minExp}</Typography>
                </Box>) : (<Box sx={{mt:10}}/>)}
                <Link href = {data.jdLink}>
                <Button variant="contained" fullWidth>Easy Apply</Button>
                </Link>
            </Box>
        </Paper>

    })}
</Box>
}