import { useNhlContext } from '../hooks/useNhlContext.tsx';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import {  downloadPlayerCsv, getPlayer} from '../apiMethods.ts';
import { exportToCsv } from '../utils/exportToCsv';
import { useParams, useNavigate } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { UiSelect } from '../components/ui/ui-select/UiSelect.tsx';
import { seasonOptions } from '../constants.ts';
import { UiStat } from '../components/ui/ui-stat/UiStat';
import { setSeason, setPlayer } from '../reducers/actionCreators.ts';

export const PlayerDetails = () => {
    const {
        dispatch,
        selectedPlayer,
        selectedSeason
    } = useNhlContext();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadPlayerDetails = async (playerId) => {
            const response = await getPlayer(playerId, selectedSeason)
    
            dispatch(setPlayer(response));
        };
    
        loadPlayerDetails(id);
        }, [dispatch, id, selectedSeason])

    const onDownloadPlayerCsv = async (playerId) => {
        const response = await downloadPlayerCsv(playerId, selectedSeason);
        const player = response.playerData[0];

        exportToCsv(response.headers, response.playerData, `${player.firstName} ${player.lastName}`)
    }

    return (
        <>
            {selectedPlayer && (
                <>
                    <Box marginY={4}>
                        <Grid container={true} alignItems={'center'} spacing={2}>
                            <Grid item={true} xs={3}>
                                <Button sx={{ height: '40px' }} variant={'outlined'} startIcon={<ArrowBackIosIcon />} onClick={() => navigate('/')}>Back</Button>
                            </Grid>
                            <Grid item={true} xs={4}>
                                <UiSelect label={'Select season'} options={seasonOptions} onChange={(event) => dispatch(setSeason(event.target.value))} value={selectedSeason} />
                            </Grid>
                            {selectedPlayer.firstName && (
                                <Grid item={true} xs={4}>
                                    <Button sx={{ height: '40px' }} variant={'outlined'} startIcon={<FileDownloadIcon />} onClick={() => onDownloadPlayerCsv(id)}>Download CSV</Button>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                    {selectedPlayer.firstName && (
                        <Box marginY={4}>
                            <Grid container={true}>
                                <Grid item={true} xs={3}>  
                                    <Grid alignItems={'center'} container={true} item={true} spacing={1}> 
                                        <Grid item={true} xs={12}>
                                            <Typography variant={'subtitle1'}>{selectedPlayer.firstName}</Typography>
                                            <Typography variant={'h4'}>{selectedPlayer.lastName}</Typography>
                                        </Grid>
                                        <Grid item={true} xs={12}>
                                            <Typography variant={'h3'}><Typography component={'span'} variant={'h4'}>#</Typography>{selectedPlayer.number}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item={true} xs={9}>
                                    <Grid container={true} spacing={5}>
                                        <UiStat title={'Current Team'}>{selectedPlayer.team}</UiStat>
                                        <UiStat title={'Primary Position'}>{selectedPlayer.position}</UiStat>
                                        <UiStat title={'Current Age'}>{selectedPlayer.age}</UiStat>
                                        <UiStat title={'Assists'}>{selectedPlayer.assists}</UiStat>
                                        <UiStat title={'Goals'}>{selectedPlayer.goals}</UiStat>
                                        <UiStat title={'Games'}>{selectedPlayer.games}</UiStat>
                                        <UiStat title={'Hits'}>{selectedPlayer.hits}</UiStat>
                                        <UiStat title={'Points'}>{selectedPlayer.points}</UiStat>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                    {!selectedPlayer.firstName && (
                        <Grid container={true} alignItems={'center'}>
                            <Grid item={true} xs={12}>
                                <Box marginTop={8}>
                                    <Typography variant={'h6'} textAlign={'center'}>
                                        No player data available for the {selectedSeason} season.
                                    </Typography>
                                    <Typography textAlign={'center'}>Try selecting a different season or go back and select another player.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    )}
                </>
            )}
        </>
    )
}