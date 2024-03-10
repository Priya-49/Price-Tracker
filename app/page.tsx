import HeroCarousel from '@/components/HeroCarousel';
import Searchbar from '@/components/Searchbar';
import Image from 'next/image';
import React, { Children } from 'react'
import { getAllProducts } from '@/lib/actions';
import ProductCard from '@/components/ProductCard';

import Link from 'next/link';
import { useRouter,Router } from 'next/router';
import { revalidatePath } from 'next/cache';
import Home from './amazon/page';
import Navbar from '@/components/main/Navbar';
import Hero from '@/components/main/Hero';
import Cards from '@/components/main/Cards';
import Footer from '@/components/main/Footer';




const Home2= () => {
  return (
    <html lang="en">
    <body className= 'bg-[#F9F6F6] overflow-y-scroll overflow-x-hidden'>
   
      <Navbar/>
      <Hero/>
      <Cards/>
       <br/><br/><br/><br/><br/>
       <br/><br/><br/>
       
       <Footer/> 

     
    </body>
  </html>
  )
}



export default Home2;

