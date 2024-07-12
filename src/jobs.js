import React from 'react';
import { Typography } from '@mui/material';
import Job from './job';


export default function jobs({jobs}){
    return(
        <div className='jobs'>
            <Typography variant="h1">
                Entry Level Software jobs
            </Typography>

            {
                jobs.map(
                    job => <Job job={job} />
                )
            }
        </div>
    )
}