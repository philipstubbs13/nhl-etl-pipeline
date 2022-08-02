import { Grid, Typography } from '@mui/material';

export const UiStat = (props) => {
  return (
    <Grid item={true} xs={12} sm={4}>
        <Typography textAlign={'center'} variant={'h6'} fontWeight={'bold'}>{props.title}</Typography>
        <Typography textAlign={'center'}>{props.children}</Typography>
    </Grid>
  );
}
