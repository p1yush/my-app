import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SocialIcons from '../smallComponents/SocialIcons'

const Contact = styled(NavLink)`
color: black;
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const Work = styled(NavLink)`
color: black;
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const About = styled(NavLink)`
color: black;
text-decoration: none;
z-index: 1;
`

const Skill = styled(NavLink)`
color: black;
text-decoration: none;
z-index: 1;
`

function Section() {
    return (
      <>
      <SocialIcons />
      <Contact taget="_blank" to={{pathname: "mailto:rr2rinku@gmail.com"}}>
        <motion.h2
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          Say Hi...
        </motion.h2>
      </Contact>
      <Work to="/work">
        <motion.h2 
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          Projects
        </motion.h2>
       </Work>
       <BottomBar>
        <Skill to="/skill">
          <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            Skill
          </motion.h2>
        </Skill>
        <About to="/about">
          <motion.h2
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
           About
          </motion.h2>
        </About>
      </BottomBar>
      <section>
         <div className = "about">
          <h1>Piyush</h1>
          <h1>Singh</h1>
          <h3 style = {{marginTop:40}}>web developer /</h3>
          <h3 style = {{marginTop:10}}>a programmer. </h3>
        </div>
      </section>
      </>
    )
}

export default Section;