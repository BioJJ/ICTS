import styled from 'styled-components'

export const TextComponent =  styled.input`

font-size: 5px;
border: 1px solid black;
font-size: 4px;

width: ${props => `${props.width}`};
height: ${props => `${props.height}`};

position: relative;
top: ${props => `${props.top}`};

left: ${props => `${props.left}`};


`;

export const Button = styled.button`
    width: 150px;
    height: 50px;
    margin-top: 20px;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

`;

export const ImgComponent = styled.img`

    border: 1px solid black;
    src: ${props => `${props.src}`};

    width: ${props => `${props.width}`};
    height: ${props => `${props.height}`};

    position: relative;

    top: ${props => `${props.top}`};
    left: ${props => `${props.left}`};

    
`;

export const Box = styled.div`
    width: 900px;
    height: 400px;
    background: #fff;
        
`;

export const Container = styled.div`
 
    width: 100vw;
    height: 100vh;
    background: #6C7A89;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        
`;