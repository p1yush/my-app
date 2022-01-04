import styled from "styled-components";
import SocailIcons from "../smallComponents/SocialIcons";
import ParticleComponent2 from "../smallComponents/ParticleComponent2";
import { motion } from "framer-motion";


const Box = styled.div`
background-color: #FFE3E3; 
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const Main = styled.div`
border: 2px solid;
color: black;
padding: 2rem;
width: 50vw;
hight: 60vh;
z-index: 3;
line-height: 3;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.7rem + 1vh);
backdrop-filter: blur(4px);
position: absolute;
left: 25%;
top: 20%;
font-family: 'Montserrat', sans-serif;
@media (max-width: 70em) {
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: calc(0.5rem + 1vh);
}
@media (max-width: 60em) {
    font-size: calc(0.4rem + 1vh);
}
@media (max-width: 50em) {
    font-size: calc(0.3rem + 1vh);
}
@media (max-width: 40em) {
    font-size: calc(0.2rem + 1vh);
    line-height: 2;
}
@media (max-width: 30em) {
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
    font-size: calc(0.1rem + 1vh);
}
@media (max-width: 20em) {
    padding: 1rem;
    font-size: calc(0.1rem + 1vh);
}
`


function About() {
    return (
        <motion.div initial={{ translateY: 500}} animate={{ translateY: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 1.5 }}>
        <Box>
            <ParticleComponent2 />
            <SocailIcons />
            <Main>
            I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.

             I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.

            I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
            </Main>
            
        </Box>
        </motion.div>
    )
}
export default About;