import { motion } from "framer-motion";
import styled from "styled-components";
import {Github, Twitter, Instagram, LinkedIn} from "./AllSvgs";

const Icon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;
&>*:not(:last-child) {
    margin: 0.5rem 0;
    transition: transform 0.2s;
&:hover {
    -ms-transform: scale(1.1); 
    -webkit-transform: scale(1.1); 
     transform: scale(1.1); 
    }
}
`
const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: black;
`
const Hover = styled.div`
transition: transfor, .2s;
&:hover {
    -ms-transform: scale(1.1); 
    -webkit-transform: scale(1.1); 
     transform: scale(1.1); 
    }
`

function SocailIcons() {
    return (
        <Icon>
        <motion.div 
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:0.8, delay: 0.9}}
        >
            <a style={{color:'inherit'}} href="https://github.com/p1yush">
                <Hover><Github width={25} height={25} fill='currentColor' /></Hover>
            </a>
        </motion.div>
        <motion.div 
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:0.8, delay: 0.8}}
        >
            <a style={{color:'inherit'}} href="https://www.linkedin.com/in/piyush-singh-552816119/">
                <Hover><LinkedIn width={25} height={25} fill='currentColor' /></Hover>
            </a>
        </motion.div>
        <motion.div 
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:0.8, delay: 0.7}}
        >
            <a style={{color:'inherit'}} href="https://twitter.com/rinku_ronaldo">
               <Hover><Twitter width={25} height={25} fill='currentColor' /></Hover> 
            </a>
        </motion.div>
        <motion.div 
        initial={{transform:"scale(0)"}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type:'spring', duration:0.8, delay: 0.6}}
        >
            <a style={{color:'inherit'}} href="https://www.instagram.com/piyush2oo2/">
             <Hover><Instagram width={25} height={25} fill='currentColor' /></Hover> 
            </a>
        </motion.div>
        <Line 
        initial={{ height: 0 }}
        animate={{ height: '8rem' }}
        transition={{ type: 'spring', duration: 1, delay: 0.3}} />
        </Icon>
    )
}

export default SocailIcons;