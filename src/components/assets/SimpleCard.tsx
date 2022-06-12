import React from "react"
import Card from "@mui/material/Card";
import { CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { ytVideo } from "../../@types/types"

interface IPtops extends ytVideo {
  funcClick: (video: ytVideo) => void;
}

export default function SimpleCard(props: IPtops) {
  return (
    <Card sx={{ maxWidth: 340, maxHeight: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          width="320"
          image={props.snippet.thumbnails.high.url}
          alt={`thumbnails ${props.id.videoId}`}
          onClick={() => props.funcClick(props)}
        />
        <Link href={`https://www.youtube.com/watch?v=${props.id.videoId}`} >
          <CardContent sx={{ height: 80, p: 2, backgroundColor: 'rgb(255,255,255)' }}>
              <Typography gutterBottom variant="body2" component="div">
                {props.snippet.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                  {props.snippet.description}
                  Publicado em :{props.snippet.publishedAt}
              </Typography>
            </CardContent>
          </Link>
      </CardActionArea>
    </Card>
  );
}
