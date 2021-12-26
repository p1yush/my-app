import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "./AllSvgs";

const Box = styled.li`
width: 16rem;
height: 40vh;
background-color: #FFE3E3;
color: black;
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid black;
transition: transform .2s;
&:hover {
    -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
font-size: calc(0.8em + 0.3vh);
`
const Tags = styled.div`
border-top: 2px solid black;
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
`
const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.8em + 0.3vw);
`
const Footer = styled.footer`
display: flex;
justify-content: space-between;
`
const Link = styled(NavLink)`
background-color: black;
color: aliceblue;
text-decoration: none;
padding: 0.5rem calc(2rem + 2vh);
border-radius: 0 0 0 50px;
transition: transform .2s;
&:hover {
    -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}
`
const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
transition: transform .2s;
&:hover {
    -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}
`

function Card(props) {
    const{id, name, description, tags, demo, github} = props.data
    return (
        <Box key={id}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>
                {tags.map((t, id) => {
                    return <Tag key={id}>#{t}</Tag>
                })}
            </Tags>
            <Footer>
                <Link to={{pathname: `${demo}`}} target="_blank">
                    Visit
                </Link>
                <Git to={{pathname: `${github}`}} target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card;