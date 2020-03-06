import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: 50,
        border: "solid 1px lightGray"

    },
    media: {
        width: 300,
        height: 100,
    },
    gitLab: {
        width: 300,
        height: 100,
    }
});

export default function MainCard({ url, logo, mainText, secondaryText, nameClass }) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea href={url} target="_blank">
                    <CardMedia
                        className={classes[`${nameClass}`]}
                        image={logo}
                        title={`${mainText} image`}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {mainText}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {secondaryText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        </div >
    );
}