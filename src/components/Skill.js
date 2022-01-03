import { Developer, Programmer } from "../smallComponents/AllSvgs";
import styled from "styled-components";
import SocailIcons from "../smallComponents/SocialIcons";
import ParticleComponent from "../smallComponents/ParticleComponent";
import { motion } from "framer-motion";

const Box = styled.div`
background-color: #FFE3E3; 
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 50em) {
    flex-direction: column;
    padding: 8rem 0;
    height: auto;
}
`
const Main = styled.div`
border: 2px solid black;
color: black;
background-color: #FFE3E3; 
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
flex-direction: column;
justfy_content: space-between;
transition: transform .2s;
&:hover {
    -ms-transform: scale(1.1); 
  -webkit-transform: scale(1.1); 
  transform: scale(1.1); 
}
@media (max-width: 60em) {
    height: 55vh;
}
@media (max-width: 50em) {
    width: 50vw;
    height: max-content;
}
@media (max-width: 50em) {
    &>:nth-child(5) {
        margin-bottom: 5rem;
    }
}
@media (max-width: 30em) {
    &>:nth-child(5) {
      margin-bottom: 4rem;
  }
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1.5em + 1vh);
font-family: 'Montserrat', sans-serif;
font-weight: bold;
&>*:first-child{
    margin-right: 1rem;
    }
@media (max-width: 60em) {
    font-size: calc(0.8em + 1vh);
}
@media (max-width: 50em) {
    font-size: calc(1em + 2vh);
    margin-bottom: 1rem;
}
@media (max-width: 30em) {
    font-size: calc(1em + 1vh);
}
@media (max-width: 25em) {
    font-size: calc(0.8em + 1vh);
}
`
const Description = styled.div`
color: black;
font-size: calc(0.6em + 1vh);
padding: 0.5rem 0;
font-family: 'Montserrat', sans-serif;
strong{
    margin-bottom: 1rem;
    text-transformation: uppercase;
}
p{
    margin-left: 2rem;
}
@media (max-width: 25em) {
    font-size: calc(0.5em + 1vh);
}
@media (max-width: 50em) {
    font-size: calc(0.8em + 1vh);
}
`

function Skill() {
    return (
        <motion.div initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, duration: 1.5 }}>
        <Box>
            <ParticleComponent />
            <SocailIcons />
            <Main>
                <Title>
                    <Developer width={40} height={40} /> Web Developer
                </Title>
                <Description>
                    I love to develop websites which speaks, clean, minimal and simple
                </Description>
                <Description>
                    <strong>Skills</strong>
                    <p>HTML, CSS, Javascript, Bootstrap, React, Express, Node, MongoDB, MySQL</p>
                    <strong>Tools</strong>
                    <p>VScode, Github ...</p>
                </Description>
            </Main>
            <Main>
                <Title>
                    <Programmer width={40} height={40} /> Programmer
                </Title>
                <Description>
                    I love to solve new problems.sadddddddddddddddddjhsdihs diahsiaohsfa uihfaui fhauifha fhyafgykugfu yafg yugdyuf gyadfg ygf kyhfu gyhufd 
                    sau dhfluisdf yhkusfa huiszf bhjias fihui fas sa ffhu ;auf ;
                </Description>
            </Main>
        </Box>
        </motion.div>
    )
}
export default Skill;