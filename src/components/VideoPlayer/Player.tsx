import React, { useCallback, useState } from 'react'
import ReactPlayer from 'react-player'
import useWindowSize from '../../hooks/useWindowsSize'
import { VideoBox } from './VideoPlayerStyle'

import { ytVideo, IPlayerParams } from '../../@types/types'

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
  const size = useWindowSize()

  const calcArea = (a:number, b:number) => a * b;

  const videoOptionSize:IVideoOptionSize= {
    playing: {
      height: calcArea(size.height as number, 0.75),
      width: calcArea(size.width as number, 1),
    },
    stopped:  {
      height: calcArea(size.height as number, 0.47),
      width: calcArea(size.width as number, 1),
    }
  }

  const [videoState, setVideoState] = useState<IPlayerParams>(videoOptionSize.stopped)

  const setVideoStatePlay = useCallback(() => setVideoState(videoOptionSize.playing), [])

  const setVideoStateStop = useCallback(() => setVideoState(videoOptionSize.stopped), [])

  const handleContextMenu = (event:Event) =>  event.preventDefault()

  return (
    <VideoBox>
      <ReactPlayer
        width={ videoState.width }
        height={ videoState.height }
        url={ `https://www.youtube-nocookie.com/embed/${props.id.videoId}` }
        controls={ true }
        onPlay={ setVideoStatePlay }
        onPause={ setVideoStateStop }
        key={ props.etag }
        onContextMenu={ handleContextMenu }
        config={{
          youtube: { playerVars: { showinfo: 1 } },
          file: { attributes: { controlsList: "nodownload" } }
        }}
      />
    </VideoBox>
  )
}
