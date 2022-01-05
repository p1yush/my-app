import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackButton } from "./AllSvgs";

const Button = styled.div`
height: 40px;
width: 40px;
position: fixed;
background-color: #191919;
color: aliceblue;
left: 1rem;
top: 1rem;
transition: transform .2s;
&:hover {
    -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}
`


function BackToHome() {
    const navigate = useNavigate() 
    function backtoSection() {
        navigate("/");
    }
    
    useEffect(() => {
        const listener = event => {
            if(event.code === "Escape") {
                backtoSection();
                event.preventDefault();
            }
        }
        document.addEventListener("keydown", listener);
        return() => {
            document.removeEventListener("keydown", listener);
        }
        // eslint-disable-next-line
    }, [])
    return (
        <Button><BackButton onClick = {backtoSection}/></Button>
    )
}

export default BackToHome;