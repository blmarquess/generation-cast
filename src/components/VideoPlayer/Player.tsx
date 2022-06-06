import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player';
// import YouTube from 'react-youtube';
import { ytVideo, IPlayerParams } from '../../@types/types'
import { VideoBox} from './VideoPlayerStyle'

type IVideoOptionSize = {
    playing: {
      height: number,
      width: number,
    },
    stopped:  {
      height: number,
      width: number,
    }
}

export default function Player(props: ytVideo): JSX.Element {
  function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IPlayerParams>({
    width: 950,
    height: 1200,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
  }
  const size = useWindowSize();

  function calcArea(a:number, b:number) {
    return a * b;
  }
  const videoOptionSize:IVideoOptionSize= {
    playing: {
      height: calcArea(size.height as number, 0.85) as number,
      width: calcArea(size.width as number, 0.95),
    },
    stopped:  {
      height: calcArea(size.height as number, 0.45),
      width: calcArea(size.width as number, 1),
    }
  }

  const [videoState, setVideoState] = useState<IPlayerParams>(videoOptionSize.stopped)

  // const playerOptions = {
  //         height: videoState.height,
  //         width: videoState.width,
  //         playerVars: {
  //           autoplay: 0,
  //           controls: 0,
  //           origin: 'https://www.youtube.com',
  //         },
  //       }

  const setVideoStatePlay = () => {
    setVideoState(videoOptionSize.playing)
  }

  const setVideoStateStop = () => {
    setVideoState(videoOptionSize.stopped)
  }

  return (
    <VideoBox>
      <ReactPlayer
        width={videoState.width}
        height={videoState.height}
        url={`https://www.youtube-nocookie.com/embed/${props.id.videoId}`}
        controls={true}
        onPlay={setVideoStatePlay}
        onPause={setVideoStateStop}
      />
      {/* <YouTube
        videoId={props.id.videoId}
        id={props.id.videoId}
        title={props.snippet.title}
        onPlay={setVideoStatePlay}
        onPause={setVideoStateStop}
        opts={playerOptions} /> */}
    </VideoBox>
  )
}
