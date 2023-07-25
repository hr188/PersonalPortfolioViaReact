import React, { useRef } from 'react';
import "../styles/home.scss";
import {animate, motion} from "framer-motion"; //importing motion from framer motion
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assets/me.png"

const Home = () => {

    const clientCount = useRef(1);
    const projectcount = useRef(1);
    const animationClientCount=()=>{
        animate(0,300,{
            duration:'1',
            onUpdate:(v)=>{
                clientCount.current.textContent  = v.toFixed();
            }
        })
        }
        const animationProjectCount=()=>{
            animate(0,10,{
                duration:'1',
                onUpdate:(v)=>{
                    projectcount.current.textContent  = v.toFixed();
                }
            })
            }
    const animations = {
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:"0",
                opacity:"1",
            } ,  
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:"0",
                opacity:"1",
            } ,  
        },        
    };
  return (
    <>
    <div id="home">
    <section>
        <div>
            <motion.h1 {...animations.h1} >
                Hi , I am <br/> Himanshu Ray
            </motion.h1>
            <Typewriter options={{
                strings:["A developer" ," A Designer" ," A Problem Solver" ],
                autoStart: true,
                loop: true,
                cursor:"",
                wrapperClassName: "typewriterpara"
            }}/>
        

        <div>
        <a href="mailto:himanshuray188@gmail.com" > Hire me </a>
        <a href="#work"> Projects <BsArrowUpRight/> </a>
        </div>

        <article>
            <p>
                +<motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
               
            </p>    
                <span> Problems Solved</span>
            
        </article>
        <aside>
        <article>
            <p>
                +
                <motion.span whileInView={animationProjectCount} ref={projectcount}></motion.span>
            </p>    
                <span> Projects Done </span>

        </article>

        <article data-special>
            <p>Contact</p>
            <span>himanshuray188@gmail.com</span>
        </article>
        </aside>
        
        </div>
    </section>
            
    <section>
         <img src={me} alt="Himanshu" />
    </section>
    <BsChevronDown/>
    </div>
    </>
  )
}

export default Home