import HeroImg from '../assets/hero.png';
import {AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin} from 'react-icons/ai';

export default function Hero(){
    const config ={
        subtitle:'I am a full-stack Developer',
        social:{
            twitter: 'https://twitter.com/',
            facebook: 'https://facebook.com/',
            linkedin: 'https://in.linkedin.com/company/'
        }
    }

    return(
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
         <div className="md:w-1/2 flex flex-col">
            <h1 className='text-white text-6x1 font-hero-font'>Hi,<br />Im <span className='text-black'>R.</span>Ashok
            <p className='text-2x1'>{config.subtitle}</p>
            </h1>
          <div className="flex py-10">
              <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}></AiOutlineTwitter></a> 
              <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}></AiOutlineFacebook></a>
              <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}></AiOutlineLinkedin></a> 
          </div>  
        </div>
        <img src={HeroImg} className='md:w-1/3'/>
        </section>
    )
}