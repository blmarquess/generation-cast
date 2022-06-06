import styled, { StyledProps } from 'styled-components'

const chaneleImgURL = 'https://yt3.ggpht.com/VHTTsd4UB0WQL7PXIf5TqKhdyZ8lDNpD4x1QUosoiJg6CNk5sud3asdEJ8KLIcFU2dCzVX6yVw=s800-c-k-c0xffffffff-no-rj-mo';

interface IDivProps {
  height?: string;
  width?: string;
  backgroundImage?: string;
}

export const VideoBox = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  width: ${({ theme: { sizes: { width } }}) => width || '100%'};
  height: ${({ theme: { sizes: { height } }}) => height || '45vh'};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  border: 0px;
  border-radius: 0.9rem;

  background-color: #000;
  background-image: url(${({theme:{ bg: { backgroundImage }} }) => backgroundImage || chaneleImgURL});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);

  transition: 0.3s ease-in-out;
  animation-duration: 300ms;

  &::after:active {
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;
    animation-duration: 300ms;
  }

  &::after:playing {
    height: 85vh;
  }

  &:playing {
    height: 85vh;
  }

  &:focus {
    height: 85vh;
  }

  &:active {
    height: 85vh;
  }
`;
