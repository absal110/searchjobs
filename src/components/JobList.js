import { Box, Container, Paper, Typography,  } from "@mui/material";
import { useEffect, useState } from "react"
import { JobCard } from "./JobCard";

export const JobList = () => {


    const fetchJobs = () =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
        "limit": 20,
        "offset": page
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => setjobs((prev) => [...prev, ...result.jdList]))
        .catch((error) => console.error(error));
    }

    const [jobs,setjobs] = useState([])
    const [page,setPage] = useState(0)
    useEffect(()=>{
        fetchJobs()
    },[page])

    const infiniteScrolling = () => {
        if(window.innerHeight + document.documentElement.scrollTop > document.documentElement.scrollHeight-200){
            // setPage((prev)=>prev +20)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",infiniteScrolling)
    },[])



    return <JobCard jobs = {jobs}/>
}