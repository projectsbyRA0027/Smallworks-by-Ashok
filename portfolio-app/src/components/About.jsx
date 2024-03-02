import AboutImg from '../assets/about.png';

export default function About(){
    const config ={
        line1:'Hi, My Name Is R.Ashok, I Am a Full-Stack Web Developer. I built and Designed websites with React,Tailwind and Bootstrap',
        line2:'I am Proficiant in Front End Skills like React,Redux,Redux Tool kit,tailwind,bootstrap and many more.',
        line3:'In Backend I know Node.js,Express.js,MongoDB,Mongoose and Mysql'
    }


    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
             <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="about" />
             </div>
             <div className='md:w-1/2 flex justify-center'>
              <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'></h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
              </div>
             </div>
        </section>
    )
}