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

function About() {
    return (
        <Box>
            <ParticleComponent2 />
            <SocailIcons />
            
        </Box>
    )
}
export default About;