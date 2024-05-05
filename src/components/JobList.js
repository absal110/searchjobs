import { Box, Container, Paper, Typography,  } from "@mui/material";
import { useEffect, useState } from "react"

export const JobList = () => {
    const fetchJobs = () =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
        "limit": 10,
        "offset": 0
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => setjobs(result.jdList))
        .catch((error) => console.error(error));
    }

    const [jobs,setjobs] = useState([])
    useEffect(()=>{
        fetchJobs()
    },[])



    return <Box sx={{pt: 4, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap : 4, flexWrap: 'wrap'}}>
        {jobs.map((data) => {
            return <Paper elevation={3} square={false} sx={{br:2}} key={data.jdUid}>
                <Box sx={{m:3}}>
                <Box sx={{display:"flex"}}>
                    <Box sx={{height:40,width:25, m:1}} component="img" alt="Company Logo" src={data.logoUrl}></Box>
                    <Box >
                        <Typography>{data.companyName}</Typography>
                        <Typography>{data.jobRole}</Typography>
                        <Typography>{data.location}</Typography>
                    </Box>
                </Box>
                <Box >
                    <Typography>Estimated Salary </Typography>
                </Box>
                </Box>
            </Paper>

        })}
    </Box>
}