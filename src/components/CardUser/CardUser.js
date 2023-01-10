import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'

function CardUser(props) {
  return (
    <Card className="list">
    <CardActionArea>
      <CardMedia
        className="media"
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Email: {props.user.email}
          <br />
          Website: {props.user.website}
          <br/>
          Phone Number: {props.user.phone}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
);
}

export default CardUser