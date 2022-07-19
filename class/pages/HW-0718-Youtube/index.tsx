import ReactPlayer from 'react-player/lazy';
import styled from "@emotion/styled"

const MyVideo = styled(ReactPlayer)`

`

const Video = () => {
    return (
        <>
            <h2>Quiz 1-3. 유튜브 라이브러리</h2>
            <div>
                <MyVideo
                    url={'https://www.youtube.com/watch?v=2N3kC9OGOcc'}    
                    width='800px' height='600px'         
                    playing={true} muted={true} controls={true}       
                />
            </div>
        </>
    )
}

export default Video;