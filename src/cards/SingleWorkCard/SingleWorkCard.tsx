import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ISingleWorkCard from './interfaces/ISingleWorkCard';

export const SingleWorkCard : React.FC<ISingleWorkCard> = (props: ISingleWorkCard) => {

	const classes = useStyles();

	return (
		<Card className={classes.root} >
      			<CardMedia
        			className={classes.media}
        			image="https://source.unsplash.com/1600x900/?nature,water"
        			title="Paella dish"
      			/>
      			<CardContent style={{padding: "20px 25px"}}>
				<h2 style={{fontSize : "24px", padding : 0, margin : 0}}>
					<a style={{color : "#02bdd5", textDecoration : "none"}} href='#'>
						Tongy
					</a>
				</h2>
        			<Typography variant="body2" 
					color="textSecondary" 
					component="p" 
					style={{
						marginTop: 5,
						wordWrap: "break-word",
						overflow: "hidden",
						maxHeight: "2.9em"
					}}
					>
					Piattafroma per insegnare ai bambini le lingue attraverso dei percorsi su misura
        			</Typography>
      			</CardContent>
    		</Card>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
	  maxWidth: 350,
	  borderRadius : 0,
	  boxShadow : "0 2px 5px 0 rgb(0 0 0 / 4%), 0 2px 10px 0 rgb(0 0 0 / 6%)"
	},
	media: {
	  height: 0,
	  paddingTop: '70%', // 16:9
	}
      }));

export default SingleWorkCard
