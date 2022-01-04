import styled from "styled-components";
import SocailIcons from "../smallComponents/SocialIcons";
import workData from "./workData";
import Card from "../smallComponents/Card";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Box = styled.div`
background-color: #FFE3E3; 
height: 150vh;
position: relative;
display: flex;
align-items: center;
`
const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vh);
height: 40vh;
display: flex;
color: white;
font-family: 'Montserrat', sans-serif;
@media (max-width: 50em) {
    left: calc(8rem + 15vw);
}
@media (max-width: 40em) {
    left: calc(2rem + 15vw);
}
@media (max-width: 25em) {
    left: calc(1rem + 15vw);
}
`
const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

function Work() {
    const ref = useRef(null);
    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
        }
        window.addEventListener('scroll', rotate)
        return() => window.removeEventListener('scroll', rotate)
    }, [])
    return (
        <>
        <SocailIcons />
        <motion.div initial={{x: -100}} animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 1.5}}>
        <Box>
            <Main ref={ref} variants={container} initial='hidden' animate='show'> 
                {workData.map(project => 
                <Card key={project.id} data={project} />
                )}
            </Main>
        </Box>
        </motion.div>
        </>
    )
}
export default Work;