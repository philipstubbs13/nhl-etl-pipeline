import React from 'react';
import { Typography, Button, CardContent, CardActions, Card } from '@mui/material';
import { IRoster } from '../../../shared.types';

interface IProps {
    /**
     * Information about the player passed in to be displayed.
     */
    roster: IRoster
    /**
     * Callback fired when view stats button is clicked.
     */
    onClickDetails: () => void;
}

export const UiCard: React.FC<IProps> = (props) => {
    return (
        <Card variant={'outlined'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} textAlign={'center'}>
                    {props.roster.person.fullName} #{props.roster.jerseyNumber}
                </Typography>
                <Typography sx={{ mb: 1.5 }} textAlign={'center'}>
                    {props.roster.position.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.onClickDetails}><b>View Stats</b></Button>
            </CardActions>
        </Card>
    );
};