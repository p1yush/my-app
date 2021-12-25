import Particles from "react-particles-js"
import styled from "styled-components"
import configDark from "../particle/particlejs.json"

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`


function ParticleComponent(props) {
    return (
        <Box>
           <Particles style={{position: 'absolute', top: 0}} params={configDark} />
        </Box>
    )
}

export default ParticleComponent