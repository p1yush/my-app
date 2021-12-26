import styled from "styled-components";
import SocailIcons from "../smallComponents/SocialIcons";
import workData from "./workData";
import Card from "../smallComponents/Card";

const Box = styled.div`
background-color: #FFE3E3; 
height:400vh;
position: relative;
overflow: hidden;
`
const Main = styled.ul`
position: fixed;
top: 12rem;
left: calc(10rem + 15vh);
height: 40vh;
display: flex;
color: white;
`


function Work() {
    return (
        <Box>
            <SocailIcons />
            <Main> 
                {workData.map(project => 
                <Card key={project.id} data={project} />
                )}
            </Main>
        </Box>
    )
}
export default Work;