import { Box, Typography } from '@mui/material';

export const ApiDocumentation= () => {
    return (
        <Box marginY={3}>
            <Typography variant={'h4'}>API for NHL ETL Pipeline</Typography>
            <Typography marginY={3}>
                The data for this project is available for use through an API built using Node.js.
                This API extracts team and player data from the NHL API, and then transforms the data into a usable source
                so that it can be loaded into CSV files.
            </Typography>
            <Box marginY={3}>
                <Typography variant={'h6'}>Resource URL</Typography>
                <code>http://nhl-etl-pipeline.herokuapp.com/api/</code>
            </Box>
            <Box marginY={3}>
                <Typography variant={'h6'}>Response Format</Typography>
                <Typography>JSON</Typography>
            </Box>
            <Box marginY={3}>
                <Typography variant={'h6'}>Endpoints</Typography>
                <ul>
                    <Typography component={'li'}><b>/teams</b>  - Returns a list of NHL teams with a <code>name</code> and unique <code>id</code>.</Typography>
                    <Typography component={'li'}><b>/teams/:id?season=20212022</b> - Given a team <code>id</code> and a particular season, returns data about a team, including the players on the roster for that season.</Typography>
                    <Typography component={'li'}><b>/teams/:id/download?season=20212022</b> - Given a team <code>id</code> and a particular season, returns data in format needed for loading into CSV.</Typography>
                    <Typography component={'li'}><b>/players/:id?season=20212022</b> - Given a player <code>id</code> and a particular season, returns data about a player for that season.</Typography>
                    <Typography component={'li'}><b>/players/:id/download?season=20212022</b> - Given a player <code>id</code> and a particular season, returns data in format needed for loading into CSV.</Typography>
                </ul>
            </Box>
        </Box>
    )
}