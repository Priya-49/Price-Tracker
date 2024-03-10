"using client";
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { Button } from '@nextui-org/react';
/* import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { tenorsans, diphylleia, josefinsans, montserrat } from '../fonts/fonts'; */

const Herocontent = () => {
  return (
   <div className='flex justify-center items-center'>
    <div  className="flex w-full h-full justify-center items-center mt-[90px]">
      <div>
      <Image 
        src="/assets/images/hero.jpg"
        alt="Hero image"
        height={800}
        width={1350}
        className='opacity-65'
      />
   </div>

    <div  className= 'absolute flex flex-col  w-full h-full gap-8 justify-center items-center'>
        <div >
          <p  className='text-[1.2rem] w-full pig'>W E L C O M E  &nbsp;&nbsp;&nbsp;&nbsp;  T O</p>
        </div>       
      
        <div>
          <p
          className='text-[6rem] pig2'>Track Wise </p>
        </div>
        
        <div>
          <p className='text-[1.1rem]'> Unlock Smart Shopping with your Shopping Companion for Informed Choices, Every Price Detail and Priceless Deals.</p>
        </div>
        <div>
       
        <Button className='bg-[#ffffff] p-[10px] pl-[2rem] pr-[2rem] hero'>
           L E A R N &nbsp;&nbsp; M O R E
        </Button>
       
        </div>
        </div>  
    </div>
    </div>
  )
}

/* type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?:boolean
 
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y:0,
    x:100 
  },
  visible: {
    opacity: 1,
     y:0,
    x:9, 
    transition:{
      duraton:1
    }
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "span",
  className,
  once,
}: AnimatedTextProps) => {
   const ref=useRef(null);
  const isInView=useInView(ref,{amount:0.5}) 
  
       return <Wrapper className={className}>
           <span className='sr-only'>{text}</span> 
          <motion.span 
          initial='hidden' 
          animate="visible" 
          transition={{staggerChildren:0.1}}
           aria-hidden>
            {text.split(" ").map((word)=>(
            <span className='inline-block'>
              {word.split("").map((char)=>(
              <motion.span  className='inline-block'   variants={defaultAnimations}>{char}</motion.span>
          ))}
          <span className='inline-block'>&nbsp;</span>
          </span>
           ))}
          </motion.span> 
          </Wrapper>

};
 */
export default Herocontent