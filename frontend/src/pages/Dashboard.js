import { useTeamContext } from '../hooks/useTeamContext';
import { UiSelect } from '../components/ui/ui-select/UiSelect';
import { Box, Grid, Button, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { getTeam, getTeams, downloadPlayerCsv, downloadTeamCsv } from '../apiMethods';
import { UiCard } from '../components/ui/ui-card/UiCard';
import { seasonOptions } from '../constants';
import { exportToCsv } from '../utils/exportToCsv';
import { UiStat } from '../components/ui/ui-stat/UiStat';
import { useNavigate } from 'react-router-dom';

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
        const response = await getTeams();

        dispatch({ type: 'GET_TEAMS', payload: { teams: response.teams }});
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

    const onDownloadPlayerCsv = async (playerId) => {
    const response = await downloadPlayerCsv(playerId);
    const player = response.playerData[0];

    exportToCsv(response.headers, response.playerData, player.name)
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
            <Box marginY={5}>
                <Grid alignItems={'center'} container={true} spacing={2}>
                <Grid item={true} xs={4}>
                    <UiSelect label={'Select a team'} options={teams} onChange={onChangeTeam} value={selectedTeamId} />
                </Grid>
                <Grid item={true} xs={4}>
                    <UiSelect label={'Select a season'} options={seasonOptions} onChange={onChangeTeamSeason} value={selectedTeamSeason} />
                </Grid>
                <Grid item={true} xs={4}>
                    <Button size="small" onClick={() => onDownloadTeamCsv(selectedTeamId)}>Download CSV</Button>
                </Grid>
                </Grid>
            </Box>
            {selectedTeam && (
                <Paper sx={{ padding: '20px', marginY: '20px' }} square={true} variant={'outlined'}>
                <Grid container={true} justifyContent={'center'} alignItems={'center'}>
                    <UiStat title={'Games Played'}>{selectedTeam.games_played}</UiStat>
                    <UiStat title={'Wins'}>{selectedTeam.wins}</UiStat>
                    <UiStat title={'Losses'}>{selectedTeam.losses}</UiStat>
                    <UiStat title={'Points'}>{selectedTeam.points}</UiStat>
                    <UiStat title={'Goals Per Game'}>{selectedTeam.goals_per_game}</UiStat>
                </Grid>
                </Paper>
            )}
            <Box marginTop={4}>
                <Grid container={true} spacing={2}>
                <Grid item={true} xs={12}>
                    <Typography variant={'h6'} fontWeight={'bold'}>{selectedTeamSeason} Roster</Typography>
                </Grid>
                {selectedTeam && selectedTeam.roster.map((roster) => (
                    <Grid item={true} xs={12} sm={8} md={4}>
                    <UiCard key={roster.person.id} roster={roster} onClickDetails={() => onClickPlayerDetails(roster.person.id)} />
                    </Grid>
                ))}
                </Grid>
            </Box>
        </>
    )
}