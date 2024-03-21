import styled from 'styled-components'

export const Button = styled.div`
    position: absolute;
    right: 2rem;
    width: 24px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transform: translateY(${({ hidebutton }) => hidebutton}%);
    transition: .2s ease-in-out;
`

export const Bar = styled.div`
    width: 100%;
    height: 2px;
    background: black;
    transition: .2s ease-in-out;
`