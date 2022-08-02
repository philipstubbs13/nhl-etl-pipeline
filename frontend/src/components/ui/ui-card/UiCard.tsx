import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IRoster } from '../../../shared.types';

interface IProps {
    roster: IRoster
    onClickDetails: () => void;
}

export const UiCard: React.FC<IProps> = (props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.roster.person.fullName} #{props.roster.jerseyNumber}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.roster.position.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.onClickDetails}>View Stats</Button>
            </CardActions>
        </Card>
    )
};