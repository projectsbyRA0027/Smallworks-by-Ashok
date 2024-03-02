import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';

export default function Projects(){
    const config = {
        projects :[
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/jvlcode/jvlcart'
            },
            {
                image: websiteImg2,
                description: 'Food Ecommerce website like Swiggy, Built with Angular & .Net',
                link: 'https://github.com/jvlcode/food'
            },
            {
                image: websiteImg3,
                description: 'Basic Blog Website . Built with Next JS and MongoDB',
                link: 'https://github.com/jvlcode/blog'
            }
        ]
    }

    return(
        <section id='projects' className='flex flex-col py-20 px-5 justify-center bg-primary text-white'>
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className='text-4xl border-b4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                    <p>These are my best projects works,created by me</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    {config.projects.map((project)=>(
                        <div className="relative">
                            <img src={project.image} alt="project-img" className='h-[200px] w-[500px]' />
                            <div className='project-desc'>
                                <p className="text-center px-5 py-5">{project.description}</p>
                                <div className="flex justify-center">
                                    <a href={project.link} target='_blank' className="btn">View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}