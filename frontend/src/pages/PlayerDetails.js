import { useNhlContext } from '../hooks/useNhlContext.tsx';
import { Box, Grid, Typography, Button } from '@mui/material';
import {  downloadPlayerCsv, getPlayer} from '../apiMethods.ts';
import { exportToCsv } from '../utils/exportToCsv.ts';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { UiSelect } from '../components/ui/ui-select/UiSelect.tsx';
import { seasonOptions } from '../constants.ts';
import { UiStat } from '../components/ui/ui-stat/UiStat.tsx';
import { setSeason } from '../reducers/actionCreators.ts';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { UiLoading } from '../components/ui/ui-loading/UiLoading.tsx';

export const PlayerDetails = () => {
    const { dispatch, selectedSeason } = useNhlContext();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const firstNameParam = searchParams.get('firstName');
    const lastNameParam = searchParams.get('lastName');
    const jerseyNumberParam = searchParams.get('jerseyNumber');
   
    const { data, isLoading } = useQuery(
        ['playerData', id, selectedSeason, dispatch],
        async () => {
          const playerData = await getPlayer(id, selectedSeason);
      
          return playerData
        }
      )

    const onDownloadPlayerCsv = async (playerId) => {
        const response = await downloadPlayerCsv(playerId, selectedSeason);
        const player = response.playerData[0];

        exportToCsv(response.headers, response.playerData, `${player.firstName} ${player.lastName}`)
    }

    return (
        <>
            <Box marginY={4}>
                <Grid container={true} alignItems={'center'} spacing={2}>
                    <Grid item={true} xs={12} sm={3}>
                        <Button
                            sx={{ height: '40px' }}
                            variant={'outlined'}
                            startIcon={<ArrowBackIosIcon />}
                            onClick={() => navigate('/')}>
                                Back
                        </Button>
                    </Grid>
                    <Grid item={true} xs={12} sm={4}>
                        <UiSelect
                            label={'Select season'}
                            options={seasonOptions}
                            onChange={(event) => dispatch(setSeason(event.target.value))}
                            value={selectedSeason}
                        />
                    </Grid>
                    <Grid item={true} xs={12} sm={4}>
                        <Button
                            disabled={!data?.firstName}
                            sx={{ height: '40px' }}
                            variant={'outlined'}
                            startIcon={<FileDownloadIcon />}
                            onClick={() => onDownloadPlayerCsv(id)}
                        >
                            Download
                        </Button>
                    </Grid>
                </Grid>
            </Box> 
            <Box marginY={4}>
                <Grid container={true} spacing={2}>
                    <Grid item={true} xs={12} sm={3}>  
                        <Grid alignItems={'center'} container={true} item={true} spacing={1}> 
                            <Grid item={true} xs={12}>
                                <Typography variant={'subtitle1'}>{firstNameParam}</Typography>
                                <Typography variant={'h4'}>{lastNameParam}</Typography>
                            </Grid>
                            <Grid item={true} xs={12}>
                                <Typography variant={'h3'}>
                                    <Typography component={'span'} variant={'h4'}>
                                    #
                                    </Typography>
                                    {jerseyNumberParam}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} sm={9}>
                        {isLoading && <UiLoading /> }
                        {data?.firstName && !isLoading && (
                            <Grid container={true} spacing={5}>
                                <UiStat title={'Current Team'}>{data?.team}</UiStat>
                                <UiStat title={'Primary Position'}>{data?.position}</UiStat>
                                <UiStat title={'Current Age'}>{data?.age}</UiStat>
                                <UiStat title={'Assists'}>{data?.assists}</UiStat>
                                <UiStat title={'Goals'}>{data?.goals}</UiStat>
                                <UiStat title={'Games'}>{data?.games}</UiStat>
                                <UiStat title={'Hits'}>{data?.hits}</UiStat>
                                <UiStat title={'Points'}>{data?.points}</UiStat>
                            </Grid>
                        )}
                        {!data?.firstName && !isLoading && (
                            <Grid container={true} alignItems={'center'} spacing={5}>
                                <Grid item={true} xs={12}>
                                    <Typography variant={'h6'} textAlign={'center'}>
                                        No player data available for {firstNameParam} {lastNameParam} for the {selectedSeason} season.
                                    </Typography>
                                    <Typography textAlign={'center'}>Try selecting a different season or go back and select another player.</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}