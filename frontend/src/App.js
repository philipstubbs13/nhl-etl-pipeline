import './App.css';
import { UiSelect } from './components/ui/ui-select/UiSelect';
import { Container, Box, Grid, Button, Paper, Typography } from '@mui/material';
import { useTeamContext } from './hooks/useTeamContext';
import { useEffect } from 'react';
import { getTeam, getTeams, downloadPlayerCsv, downloadTeamCsv } from './apiMethods';
import { UiCard } from './components/ui/ui-card/UiCard';
import { ExportToCsv } from 'export-to-csv';

function App() {
  const {
    dispatch,
    teams,
    selectedTeam,
    selectedTeamId,
    selectedTeamSeason,
  } = useTeamContext();

  const seasons = [
    { value: 2015, label: '2015 - 2016' },
    { value: 2016, label: '2016 - 2017' },
    { value: 2017, label: '2017 - 2018' },
    { value: 2018, label: '2018 - 2019' },
    { value: 2019, label: '2019 - 2020' },
    { value: 2020, label: '2020 - 2021' },
    { value: 2021, label: '2021 - 2022' },
    { value: 2022, label: '2022 - 2023' },

  ]

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

    const options = { 
      fieldSeparator: ',',
      showLabels: true, 
      showTitle: true,
      title: player.name,
      useTextFile: false,
      useBom: true,
      headers: response.headers,
    };
   
    const csvExporter = new ExportToCsv(options);
    
    csvExporter.generateCsv(response.playerData);
  }

  const onDownloadTeamCsv = async (teamId) => {
    const response = await downloadTeamCsv(teamId, selectedTeamSeason);
    const team = response.teamData[0];

    const options = { 
      fieldSeparator: ',',
      showLabels: true, 
      showTitle: true,
      title: team.name,
      useTextFile: false,
      useBom: true,
      headers: response.headers,
    };
   
    const csvExporter = new ExportToCsv(options);
    
    csvExporter.generateCsv(response.teamData);
  }

  console.log(selectedTeam)

  return (
    <div className="App">
      <Container maxWidth="md">
        <Box marginY={5}>
          <Grid alignItems={'center'} container={true} spacing={2}>
            <Grid item={true} xs={4}>
              <UiSelect label={'Select a team'} options={teams} onChange={onChangeTeam} value={selectedTeamId} />
            </Grid>
            <Grid item={true} xs={4}>
              <UiSelect label={'Select a season'} options={seasons} onChange={onChangeTeamSeason} value={selectedTeamSeason} />
            </Grid>
            <Grid item={true} xs={4}>
              <Button size="small" onClick={() => onDownloadTeamCsv(selectedTeamId)}>Download CSV</Button>
            </Grid>
          </Grid>
        </Box>
        {selectedTeam && (
          <Paper sx={{ padding: '20px', marginY: '20px' }} square={true}>
            <Grid container={true} justifyContent={'center'} alignItems={'center'}>
              <Grid item={true} xs={4}>
                <Typography textAlign={'center'} variant={'h6'} fontWeight={'bold'}>Games Played</Typography>
                <Typography textAlign={'center'}>{selectedTeam.games_played}</Typography>
              </Grid>
              <Grid item={true} xs={4}>
                <Typography textAlign={'center'} variant={'h6'} fontWeight={'bold'}>Wins</Typography>
                <Typography textAlign={'center'}>{selectedTeam.wins}</Typography>
              </Grid>
              <Grid item={true} xs={4}>
                <Typography textAlign={'center'} variant={'h6'} fontWeight={'bold'}>Losses</Typography>
                <Typography textAlign={'center'}>{selectedTeam.losses}</Typography>
              </Grid>
              <Grid item={true} xs={4}>
                <Typography textAlign={'center'} variant={'h6'} fontWeight={'bold'}>Points</Typography>
                <Typography textAlign={'center'}>{selectedTeam.points}</Typography>
              </Grid>
              <Grid item={true} xs={4}>
                <Typography textAlign={'center'} variant={'h6'} fontWeight={'bold'}>Goals Per Game</Typography>
                <Typography textAlign={'center'}>{selectedTeam.goals_per_game}</Typography>
              </Grid>
            </Grid>
          </Paper>
        )}
        <Grid container={true} spacing={2}>
          {selectedTeam && selectedTeam.roster.map((roster) => (
            <Grid item={true} xs={12} sm={8} md={4}>
              <UiCard key={roster.person.id} roster={roster} onDownloadCsv={() => onDownloadPlayerCsv(roster.person.id)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
