import { useNhlContext } from '../hooks/useNhlContext.tsx';
import { UiSelect } from '../components/ui/ui-select/UiSelect.tsx';
import { Box, Grid, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { getTeam, getTeams, downloadTeamCsv } from '../apiMethods';
import { UiCard } from '../components/ui/ui-card/UiCard.tsx';
import { seasonOptions } from '../constants';
import { exportToCsv } from '../utils/exportToCsv';
import { UiStat } from '../components/ui/ui-stat/UiStat.tsx';
import { useNavigate } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { setTeam, setSeason, setTeams } from '../reducers/actionCreators.ts';

export const Dashboard = () => {
    const navigate = useNavigate();
    const {
        dispatch,
        teams,
        selectedTeam,
        selectedTeamId,
        selectedSeason,
    } = useNhlContext();

    useEffect(() => {
        const loadTeams = async () => {
            const getTeamsResponse = await getTeams();
            const getTeamResponse = await getTeam(selectedTeamId, selectedSeason);

            dispatch(setTeams(getTeamsResponse.teams, getTeamResponse));    
        };

        loadTeams();
    }, [dispatch, selectedTeamId, selectedSeason])
  

    const onDownloadTeamCsv = async (teamId) => {
        const response = await downloadTeamCsv(teamId, selectedSeason);
        const team = response.teamData[0];

        exportToCsv(response.headers, response.teamData, team.name)
    }

    return (
        <>
            <Box marginY={3}>
                <Grid alignItems={'center'} container={true} spacing={2}>
                <Grid item={true} xs={4}>
                    <UiSelect label={'Select team'} options={teams} onChange={(event) => dispatch(setTeam(event.target.value))} value={selectedTeamId} />
                </Grid>
                <Grid item={true} xs={4}>
                    <UiSelect label={'Select season'} options={seasonOptions} onChange={(event) => dispatch(setSeason(event.target.value))} value={selectedSeason} />
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
                        <Typography variant={'h6'} fontWeight={'bold'}>{selectedSeason} Team Stats</Typography>
                    </Grid>
                    <Box marginTop={2}>
                        <Grid container={true} spacing={3}>
                            <UiStat title={'Games Played'}>{selectedTeam.games_played}</UiStat>
                            <UiStat title={'Wins'}>{selectedTeam.wins}</UiStat>
                            <UiStat title={'Wins'}>{selectedTeam.wins}</UiStat>
                            <UiStat title={'Losses'}>{selectedTeam.losses}</UiStat>
                            <UiStat title={'Points'}>{selectedTeam.points}</UiStat>
                            <UiStat title={'Goals Per Game'}>{selectedTeam.goals_per_game}</UiStat>
                        </Grid>
                    </Box>
                    <Box marginTop={4}>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} xs={12}>
                                <Typography variant={'h6'} fontWeight={'bold'}>{selectedSeason} Roster</Typography>
                            </Grid>
                            {selectedTeam && selectedTeam.roster.map((roster) => (
                                <Grid item={true} xs={12} sm={8} md={4} lg={3}>
                                    <UiCard key={roster.person.id} roster={roster} onClickDetails={() => navigate(`/player/${roster.person.id}`)} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </>
            )}
        </>
    )
}