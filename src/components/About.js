import styled from "styled-components";
import SocailIcons from "../smallComponents/SocialIcons";
import ParticleComponent2 from "../smallComponents/ParticleComponent2";

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
font-size: calc(0.6rem + 1vh);
backdrop-filter: blur(4px);
position: absolute;
left: 10rem;
top: 10rem;
`


function About() {
    return (
        <Box>
            <ParticleComponent2 />
            <SocailIcons />
            <Main>
            I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.

             I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.

            I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
            </Main>
            
        </Box>
    )
}
export default About;