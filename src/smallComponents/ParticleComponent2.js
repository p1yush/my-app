import Particles from "react-particles-js"
import styled from "styled-components"
import configLight from "../particle/particle2js.json"

const Box = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 0;
`


function ParticleComponent2(props) {
    return (
        <Box>
           <Particles style={{position: 'absolute', top: 0}} params={configLight} />
        </Box>
    )
}

export default ParticleComponent2;