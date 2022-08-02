import { useTeamContext } from '../hooks/useTeamContext';
import { UiSelect } from '../components/ui/ui-select/UiSelect';
import { Box, Grid, Button, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { getTeam, getTeams, downloadTeamCsv } from '../apiMethods';
import { UiCard } from '../components/ui/ui-card/UiCard';
import { seasonOptions } from '../constants';
import { exportToCsv } from '../utils/exportToCsv';
import { UiStat } from '../components/ui/ui-stat/UiStat';
import { useNavigate } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const Dashboard = () => {
    const navigate = useNavigate();
    const {
        dispatch,
        teams,
        selectedTeam,
        selectedTeamId,
        selectedTeamSeason,
    } = useTeamContext();

    useEffect(() => {
    const loadTeams = async () => {
        const getTeamsResponse = await getTeams();

        dispatch({ type: 'GET_TEAMS', payload: { teams: getTeamsResponse.teams }});
    };

    loadTeams();
    }, [dispatch])
  
    const onChangeTeam = async (event) => {
        const response = await getTeam(event.target.value, selectedTeamSeason);

        dispatch({ type: 'SET_TEAM', payload: { id: event.target.value, selectedTeam: response }})
    }

    const onChangeTeamSeason = async (event) => {
        const selectedTeamSeason = parseInt(event.target.value);
        const response = await getTeam(selectedTeamId, selectedTeamSeason);

        dispatch({ type: 'SET_TEAM_SEASON', payload: { selectedTeam: response, selectedTeamSeason: selectedTeamSeason } })
    }

    const onDownloadTeamCsv = async (teamId) => {
        const response = await downloadTeamCsv(teamId, selectedTeamSeason);
        const team = response.teamData[0];

        exportToCsv(response.headers, response.teamData, team.name)
    }

    const onClickPlayerDetails = (playerId) => {
        navigate(`/player/${playerId}`)
    }

    return (
        <>
            <Box marginY={3}>
                <Grid alignItems={'center'} container={true} spacing={2}>
                <Grid item={true} xs={4}>
                    <UiSelect label={'Select a team'} options={teams} onChange={onChangeTeam} value={selectedTeamId} />
                </Grid>
                <Grid item={true} xs={4}>
                    <UiSelect label={'Select a season'} options={seasonOptions} onChange={onChangeTeamSeason} value={selectedTeamSeason} />
                </Grid>
                <Grid item={true} xs={4}>
                    <Button disabled={!selectedTeam} variant={'outlined'} startIcon={<FileDownloadIcon />} onClick={() => onDownloadTeamCsv(selectedTeamId)}>Download CSV</Button>
                </Grid>
                </Grid>
            </Box>
            {!selectedTeam && (
                <Grid container={true} alignItems={'center'}>
                    <Grid item={true} xs={12}>
                        <Box marginTop={8}>
                            <Typography variant={'h6'} textAlign={'center'}>
                                To see stats for your favorite team and players, select a team from the dropdown.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            )}
            {selectedTeam && (
                <>
                    <Grid container={true} item={true} xs={12}>
                        <Typography variant={'h6'} fontWeight={'bold'}>{selectedTeamSeason} Team Stats</Typography>
                    </Grid>
                    <Paper sx={{ padding: '20px', marginY: '20px' }} square={true} variant={'outlined'}>
                        <Grid container={true} justifyContent={'center'} alignItems={'center'}>
                            <UiStat title={'Games Played'}>{selectedTeam.games_played}</UiStat>
                            <UiStat title={'Wins'}>{selectedTeam.wins}</UiStat>
                            <UiStat title={'Losses'}>{selectedTeam.losses}</UiStat>
                            <UiStat title={'Points'}>{selectedTeam.points}</UiStat>
                            <UiStat title={'Goals Per Game'}>{selectedTeam.goals_per_game}</UiStat>
                        </Grid>
                    </Paper>
                    <Box marginTop={4}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12}>
                                <Typography variant={'h6'} fontWeight={'bold'}>{selectedTeamSeason} Roster</Typography>
                            </Grid>
                            {selectedTeam && selectedTeam.roster.map((roster) => (
                                <Grid item={true} xs={12} sm={8} md={4} lg={3}>
                                <UiCard key={roster.person.id} roster={roster} onClickDetails={() => onClickPlayerDetails(roster.person.id)} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}
        </>
    )
}