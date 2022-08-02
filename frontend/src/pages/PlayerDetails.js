import { useTeamContext } from '../hooks/useTeamContext';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import { useEffect } from 'react';
import {  downloadPlayerCsv, getPlayer} from '../apiMethods';
import { exportToCsv } from '../utils/exportToCsv';
import { useParams } from 'react-router-dom';
import { UiStat } from '../components/ui/ui-stat/UiStat';

export const PlayerDetails = () => {
    const {
        dispatch,
        selectedPlayer
    } = useTeamContext();
    const { id } = useParams();

    useEffect(() => {
        const loadPlayerDetails = async (playerId) => {
            const response = await getPlayer(playerId)
    
            dispatch({ type: 'GET_PLAYER', payload: { selectedPlayer: response }});
        };
    
        loadPlayerDetails(id);
        }, [dispatch, id])

    console.log(selectedPlayer, 'selectedPlayer')

    const onDownloadPlayerCsv = async (playerId) => {
        const response = await downloadPlayerCsv(playerId);
        const player = response.playerData[0];

        exportToCsv(response.headers, response.playerData, player.name)
    }


    return (
        <>
            {selectedPlayer && (
                <>
                    <Box marginY={5}>
                        <Grid alignItems={'center'} container={true} spacing={1}> 
                            <Grid item={true} xs={12}>
                                <Typography variant={'h4'}>{selectedPlayer.name} #{selectedPlayer.number}</Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography variant={'h6'}>Position: {selectedPlayer.position}</Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography variant={'h6'}>Current team: {selectedPlayer.team}</Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography variant={'h6'}>Age: {selectedPlayer.age}</Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Button size="small" onClick={() => onDownloadPlayerCsv(id)}>Download CSV</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Paper sx={{ padding: '20px', marginY: '20px' }} square={true} variant={'outlined'}>
                        <Grid container={true} justifyContent={'center'} alignItems={'center'}>
                            <UiStat title={'Assists'}>{selectedPlayer.assists}</UiStat>
                            <UiStat title={'Goals'}>{selectedPlayer.goals}</UiStat>
                            <UiStat title={'Games'}>{selectedPlayer.games}</UiStat>
                            <UiStat title={'Hits'}>{selectedPlayer.hits}</UiStat>
                            <UiStat title={'Points'}>{selectedPlayer.points}</UiStat>
                        </Grid>
                    </Paper>
                </>
            )}

        </>
    )
}