import React, { useCallback, useState } from 'react'
import ReactPlayer from 'react-player'
import { Box } from '@mui/material'

import { ytVideo } from '../../@types/types'

export default function Player(props: ytVideo): JSX.Element {
  const videoOptionSize = {
    playing: { height: '66vh' },
    stopped:  { height: '360px' }
  }
  const [videoState, setVideoState] = useState(videoOptionSize.stopped)

  const setVideoStatePlay = () => setVideoState(videoOptionSize.playing)

  const setVideoStateStop = () => setVideoState(videoOptionSize.stopped)

  return (
    <Box width="100%" height={ videoState.height } borderRadius="0.8rem" overflow="hidden">
          <ReactPlayer
            width="100%"
            height={ videoState.height }
            url={ `https://www.youtube-nocookie.com/embed/${props.id.videoId}` }
            controls={ true }
            onPlay={ setVideoStatePlay }
            onPause={ setVideoStateStop }
            key={ props.etag }
            config={{
              youtube: { playerVars: { showinfo: 1, autoplay: 1 } },
              file: { attributes: { controlsList: "nodownload" } }
            }}
          />
    </Box>
  )
}
