import Head from "next/head"
import PostCard from "@/components/PostCard";
import { getPosts } from "../../services"
import HeroSection from "../../src/components/HeroSection";
import Navbar from "../../src/components/Navbar";
import PostWidget from "@/components/PostWidget";
import Categories from "@/components/Categories";
import EmailSection from "@/components/EmailSection";
import Merchandize from "@/components/Merchandize";
import Script from "next/script";




export default function Home({ posts }) {
  return (
  
    <main className='flex min-h-screen flex-col bg-white' >

    <Navbar/>
    <br></br>
    <br></br>
      <div className='container mx-auto px-12 py-4'></div>
      <HeroSection/>
       <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8382537736577233"
        crossorigin="anonymous"></Script>
          <meta name="google-adsense-account" content="ca-pub-3624894722008525">
         
      
        <br></br>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
      <h2 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">Blogs</h2>
        {posts.map((post )=> <PostCard post={post.node} key={post.title}/>)}
      </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
          <br></br>
        
          <PostWidget/>
  
          <Categories/>
          </div>
         
        </div>
      </div>
      <h2 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">Contact</h2>
     
      <EmailSection/>
      <Merchandize/>
    </main>
    
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return{
    props:{ posts }
  }
}
