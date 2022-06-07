import Image from "next/image"
import React from "react"
import { ytVideo } from "../../@types/types"

interface IPtops extends ytVideo {
  funcClick: (video: ytVideo) => void;
}

export default function SimpleCard(props: IPtops) {
  return (
    <div>
      <a
        href={`https://www.youtube.com/watch?v=${props.id.videoId}`}
        >
        <h2>{props.snippet.title}</h2>
      </a>
      <Image
        src={props.snippet.thumbnails.high.url}
        alt={`thumbnails ${props.id.videoId}`}
        width="440"
        height="240"
        onClick={() => props.funcClick(props)}
      />
      <p>{props.snippet.description}</p>
      <p>Publicado em :{props.snippet.publishedAt}</p>
    </div>
  );
}
