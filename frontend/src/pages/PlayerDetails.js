import { useTeamContext } from '../hooks/useTeamContext';
import { Box, Grid, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import {  downloadPlayerCsv, getPlayer} from '../apiMethods';
import { exportToCsv } from '../utils/exportToCsv';
import { useParams, useNavigate } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { UiSelect } from '../components/ui/ui-select/UiSelect';
import { seasonOptions } from '../constants';

export const PlayerDetails = () => {
    const {
        dispatch,
        selectedPlayer,
        selectedTeamSeason
    } = useTeamContext();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadPlayerDetails = async (playerId) => {
            const response = await getPlayer(playerId, selectedTeamSeason)
    
            dispatch({ type: 'GET_PLAYER', payload: { selectedPlayer: response }});
        };
    
        loadPlayerDetails(id);
        }, [dispatch, id, selectedTeamSeason])

    const onDownloadPlayerCsv = async (playerId) => {
        const response = await downloadPlayerCsv(playerId, selectedTeamSeason);
        const player = response.playerData[0];

        exportToCsv(response.headers, response.playerData, `${player.firstName} ${player.lastName}`)
    }

    const onChangePlayerSeason = async (event) => {
        const selectedPlayerSeason = parseInt(event.target.value);
        const response = await getPlayer(id, selectedPlayerSeason);

        dispatch({ type: 'SET_PLAYER_SEASON', payload: { selectedPlayer: response, selectedTeamSeason: selectedPlayerSeason } })
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
                                <UiSelect label={'Select a season'} options={seasonOptions} onChange={onChangePlayerSeason} value={selectedTeamSeason} />
                            </Grid>
                            <Grid item={true} xs={4}>
                                <Button sx={{ height: '40px' }} variant={'outlined'} startIcon={<FileDownloadIcon />} onClick={() => onDownloadPlayerCsv(id)}>Download CSV</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    {selectedPlayer.firstName && selectedPlayer.lastName && (
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
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Team'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.team}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Position'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.position}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Age'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.age}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Assists'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.assists}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Goals'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.goals}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Games'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.games}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Hits'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.hits}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item={true} xs={12} sm={4}>
                                            <Typography  fontWeight={'bold'}>{'Points'}</Typography>
                                            <Box border={'1px solid #000'} paddingY={0.5}>
                                                <Typography textAlign={'center'}>{selectedPlayer.points}</Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    )}
                </>
            )}

        </>
    )
}