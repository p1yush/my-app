import { Developer, Programmer } from "../smallComponents/AllSvgs";
import styled from "styled-components";
import SocailIcons from "../smallComponents/SocialIcons";
import { motion } from "framer-motion";

const Box = styled.div`
background-color: #191919; 
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
border: 2px solid aliceblue;
color: aliceblue;
background-color: #191919; 
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
    margin-bottom: 4rem;
}
@media (max-width: 45em) {
        margin-bottom: 5rem;
}
@media (max-width: 30em) {
      margin-bottom: 4rem;
  }
@media (max-height: 55em) {
    height: max-content;
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
@media (max-height: 40em) {
    font-size: calc(0.8em + 1vh);
}
`
const Description = styled.div`
color: aliceblue;
font-size: 20px;
padding: 0.5rem 0;
font-family: 'Montserrat', sans-serif;
strong{
    margin-bottom: 1rem;
    text-transformation: uppercase;
}
ul, p{
    margin-left: 2rem;
}
@media (max-width: 75em) {
    font-size: 17px;
}
@media (max-width: 60em) {
    font-size: 15px;
}
@media (max-height: 40em) {
    font-size: 17px;
}
@media (max-height: 35em) {
    font-size: 15px;
}
@media (max-height: 30em) {
    font-size: 13px;
}
`

function Skill() {
    return (
        <motion.div initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, duration: 1.5 }}>
        <Box>
            <SocailIcons />
            <Main>
                <Title>
                    <Developer  width={40} height={40} /> Web Developer
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
                    I love to solve new problems. I am learning Data Structures.
                </Description>
                <Description>
                    <strong>Skills</strong>
                    <p>C++</p>
                    <strong>Tools</strong>
                    <p>Sublime Text</p>
                </Description>
            </Main>
        </Box>
        </motion.div>
    )
}
export default Skill;