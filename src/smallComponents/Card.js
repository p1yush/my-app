import { motion } from "framer-motion";
import styled from "styled-components";
import { Github } from "./AllSvgs";

const Box = styled(motion.li)`
width: 16rem;
height: 40vh;
background-color: #191919;
color: aliceblue;
padding: 1.5rem 2rem;
margin-right: 8rem;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid aliceblue;
@media (max-width: 50em) {
    width: 16rem;
    margin-right: 4rem;
    height: 40vh;
}
@media (max-width: 45em) {
    width: 14rem;
    margin-right: 4rem;
    height: 40vh;
    padding: 1.5rem;
}
@media (max-width: 25em) {
    width: 12rem;
    margin-right: 4rem;
    height: 40vh;
    padding: 1.5rem;
}
@media (max-height: 50em) {
    width: 18rem;
    padding: 1.5rem;
}
@media (max-height: 45em) {
    width: 20rem;
    padding: 1.5rem;
}
@media (max-height: 37em) {
    width: 24rem;
    padding: 1.5rem;
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`
const Description = styled.h4`
font-size: calc(0.8em + 0.3vh);
@media (max-width: 25em) {
    font-size: calc(0.7em + 0.3vw);
}
@media (max-height: 45em) {
    font-size: calc(0.7em + 0.3vh);
}
`
const Tags = styled.div`
border-top: 2px solid aliceblue;
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
`
const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.7em + 0.3vw);
@media (max-width: 30em) {
    font-size: calc(0.9em);
}
@media (max-width: 25em) {
    font-size: calc(0.7em);
}
@media (max-height: 45em) {
    font-size: calc(0.7em);
}
`
const Footer = styled.footer`
display: flex;
justify-content: space-between;
`
const Link = styled.a`
background-color: aliceblue;
color: #191919;
font-weight: bold;
text-decoration: none;
padding: 0.5rem calc(2rem + 2vh);
border-radius: 10px;
transition: transform .2s;
&:hover {
    -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}
@media (max-width: 25em) {
    padding: 0.5rem calc(1rem + 2vh);
}
@media (max-height: 45em) {
    padding-top: 0.5rem;
}
`
const Git = styled.a`
text-decoration: none;
transition: transform .2s;
color: aliceblue;
&:hover {
    -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}
`

function Card(props) {
    const{id, name, description, tags, demo, github} = props.data
    return (
        <Box key={id} whileHover={{scale: 1.1}}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Tags>  
                {tags.map((t, id) => {
                    return <Tag key={id}>#{t}</Tag>
                })}
            </Tags>
            <Footer>
                <Link href={demo} target="_blank">
                    Visit
                </Link>
                <Git href={github} target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card;