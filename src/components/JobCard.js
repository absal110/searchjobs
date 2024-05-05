import { Box, Container, Paper, Typography,  } from "@mui/material";

export const JobCard = ({jobs}) => {
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
                <Typography>{data.jobDetailsFromCompany.substr(0,30)}</Typography>
            </Box>
            </Box>
        </Paper>

    })}
</Box>
}