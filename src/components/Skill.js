import styled from "styled-components";

const Box = styled.div`
width: 100vw;
heifht: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
border: 2px solid black;
color: black;
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
display: flex;
flex-direction: column;
justfy_content: space-between;
`

function Skill() {
    return (
        <Box>
            <Main>

            </Main>
        </Box>
    )
}
export default Skill;