import styled from 'styled-components';

export const Background = styled.div`
    display: block;
    position:fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width:100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4); 
`

export const ModalDialog = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border:1px solid #888;
    width: 80%;
`

export const ButtonTimes = styled.button`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover{
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`

export const ButtonClose = styled.button`
    padding:15px 20px;
    font-size: 110%;
    background-color:#e60000;
    color: #fff;
    border: none;
    border-radius: 4px;

    &:hover{
        background-color: #990000;
        cursor: pointer;
    }
`

export const ButtonEdit = styled.button`
    padding:15px 20px;
    font-size: 110%;
    background-color:#ffcc00;
    border: none;
    border-radius: 4px;
    margin-right: 15px;

    &:hover{
        background-color: #cca300;
        cursor: pointer;
    }
`

export const ModalTitle = styled.p`
    text-align:left;
    font-size: 150%;
    font-weight: bold;
`

export const Input = styled.input`
    width: 98%;
    padding: 15px;
    border-style: solid;
    border-color: #c5c5c5;
    border-radius: 4px;
`

export const ModalFooter = styled.div`
    text-align: right;
    margin-top: 30px;
`

export const FirstHr = styled.hr`
    margin-bottom: 20px;
    border: 1px solid #c5c5c5;
`

export const SecondHr = styled.hr`
    margin-top: 20px;
    border: 1px solid #c5c5c5;
`