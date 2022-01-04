import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SocialIcons from '../smallComponents/SocialIcons'
import StarrySky from '../smallComponents/Sky';

const Contact = styled.a`
color: aliceblue;
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
font-size: 20px;
@media (max-width: 30em) {
  font-size: 15px;
}
@media (max-width: 25em) {
  font-size: 13px;
}
`

const Work = styled(NavLink)`
color: aliceblue;
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
font-size: 17px;
@media (max-width: 30em) {
  font-size: 14px;
}
@media (max-width: 25em) {
  font-size: 12px;
}
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
color: aliceblue;
text-decoration: none;
z-index: 1;
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
font-size: 17px;
@media (max-width: 30em) {
  font-size: 14px;
}
@media (max-width: 25em) {
  font-size: 12px;
}
`

const Skill = styled(NavLink)`
color: aliceblue;
text-decoration: none;
z-index: 1;
font-family: 'Courier New', Courier, monospace;
font-weight: bold;
font-size: 17px;
@media (max-width: 30em) {
  font-size: 14px;
}
@media (max-width: 25em) {
  font-size: 12px;
}
`

function Section() {
    return (
      <>
      <StarrySky />
      <motion.div initial={{opacity: 0}} transition={{delay: 0.1}} animate={{opacity: 1}}>
      <SocialIcons />
      <Contact href="mailto:rr2rinku@gmail.com">
        <motion.h2 initial={{y: -100, transition: {type: 'spring', duration: 1, delay: 1}}} animate={{ y: 0, transition: {type: 'spring', duration: 1, delay: 1}}}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          Say Hi...
        </motion.h2>
      </Contact>
      <Work to="/work">
        <motion.h2 initial={{ y: -100, transition: {type: 'spring', duration: 1, delay: 0.5}}} animate={{ y: 0, transition: {type: 'spring', duration: 1, delay: 0.5}}}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          Projects
        </motion.h2>
       </Work>
       <BottomBar>
        <Skill to="/skill">
          <motion.h2 initial={{ y: 100, transition: {type: 'spring', duration: 1, delay: 0.5}}} animate={{ y: 0, transition: {type: 'spring', duration: 1, delay: 0.5}}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            Skill
          </motion.h2>
        </Skill>
        <About to="/about">
          <motion.h2 initial={{ y: 100, transition: {type: 'spring', duration: 1, delay: 0.5}}} animate={{ y: 0, transition: {type: 'spring', duration: 1, delay: 0.5}}}
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
      </motion.div>
      </>
    )
}

export default Section;