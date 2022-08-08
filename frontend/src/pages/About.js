import { Box, Typography } from '@mui/material';

export const About= () => {
    return (
        <Box marginY={3}>
            <Typography variant={'h4'}>About this project</Typography>
            <Typography marginY={3}>An ETL pipeline that extracts player and team data from the NHL API, transforms the data into a usable source, and then loads the player and team data into CSV files.</Typography>
            <Typography>There are two main pipelines:</Typography>
            <ul>
                <Typography component={'li'}><b>Team Pipeline</b> - given a season, this pipeline takes data about a team and outputs the data to a CSV.</Typography>
                <Typography component={'li'}><b>Player Pipeline</b> - given a season, this pipeline takes data about a player and outputs the data to a CSV.</Typography>
            </ul>
            <Typography marginY={3}>With this etl pipeline, you can:</Typography>
            <ul>
                <Typography component={'li'}>View stats for your favorite NHL teams for a particular season.</Typography>
                <Typography component={'li'}>View stats for your favorite NHL players for a particular season.</Typography>
                <Typography component={'li'}>Download stats for your favorite NHL teams for a particular season to a CSV file.</Typography>     
                <Typography component={'li'}>Download stats for your favorite NHL teams for a particular season to a CSV file.</Typography>
            </ul>
            <Typography marginY={3}>
                For more information, including how to run this project locally and/or contribute, head on over to the <a href="https://github.com/philipstubbs13/nhl-etl-pipeline" target="_blank" rel="noreferrer">GitHub repo</a> for this project.
            </Typography>
        </Box>
    )
}