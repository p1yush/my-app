import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Github, Twitter, Facebook} from "./AllSvgs";


const Icon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;
&>*:not(:last-child) {
    margin: 0.5rem 0;
&:hover {
    -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: black;
`


function SocailIcons() {
    return (
        <Icon>
        <>
        <div>
            <NavLink style={{color:'inherit'}} to ={{pathname:"https://github.com/p1yush"}} target="_blank">
                <Github width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} to ={{pathname:"https://twitter.com/rinku_ronaldo"}} target="_blank">
                <Twitter width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>
        <div>
            <NavLink style={{color:'inherit'}} to ={{pathname:"https://www.facebook.com/rinku.ronaldo.7"}} target="_blank">
                <Facebook width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>
        </>
        <Line />
        </Icon>
    )
}

export default SocailIcons