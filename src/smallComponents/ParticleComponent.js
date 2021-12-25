import Particles from "react-particles-js"
import styled from "styled-components"

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
           <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 1000,
              },
              color: {
                value: '#000'
              },
              line_linked: {
                color: '#000',
                opacity: 1
              }
            },
          },
        }}
      />
   
        </Box>
    )
}

export default ParticleComponent