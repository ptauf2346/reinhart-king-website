import Link from 'next/link';
import React from 'react';


import Carousel from './components/carousel'
const DATA = [{ image: "/images/2021-Denim.jpg" },
 { image: "/images/cakes.jpg" }, 
 { image: "/images/contact.jpg" },
 { image: "/images/home.jpg" }, 
 { image: "/images/home1.jpg" },
 { image: "/images/home2014.jpg" },
 { image: "/images/home2015.jpg" },
 { image: "/images/home2016.jpg" },
 { image: "/images/home2018.jpg" },
 { image: "/images/home2020.jpg" },
 { image: "/images/news.jpg" },
 { image: "/images/people.jpg" },
 { image: "/images/publications.jpg" },
 { image: "/images/research.jpg" }
]


export default function HomePage() {
  const AdminURL = `${process.env.POCKETBASE_URL_DOMAIN}/_/`;

  return (
    <div className="w-full text-center">
      <h1 className="text-center text-2xl py-2">Home Page</h1>
      <Link href={AdminURL} className="text-blue-100">Edit Website</Link>
      <Carousel data={DATA}/>
    </div>
  )
}