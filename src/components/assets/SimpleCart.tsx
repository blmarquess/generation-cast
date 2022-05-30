import Image from "next/image"
import React from "react"
import { ytVideo } from "../../@types/types"

export default function SimpleCart(props: ytVideo) {
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
        onClick={() => console.log(props.id.videoId)}
      />
      {/* <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${props.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
      </iframe> */}
      <p>{props.snippet.description}</p>
      <p>Publicado em :{props.snippet.publishedAt}</p>
    </div>
  );
}
