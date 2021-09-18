import styled, {keyframes} from 'styled-components';

export const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    animation: ${spinner} 1s infinite linear;
    border-bottom: 1.1em solid rgba(0, 0, 0, 0.2);
    border-left: 1.1em solid #000;
    border-radius: 50%;
    border-right: 1.1em solid rgba(0, 0, 0, 0.2);
    border-top: 1.1em solid rgba(0, 0, 0, 0.2);
    font-size: 20px;
    height: 200px;
    width: 200px;
    position: absolute; 
    left: calc(50% - 100px); 
    top: calc(50% - 100px); 
`