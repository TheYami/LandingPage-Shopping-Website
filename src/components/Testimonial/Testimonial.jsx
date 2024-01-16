import React from 'react'
import Slider from 'react-slick'

const TestimonialData = [
    {
        id:1,
        name:"Luffy",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://avatars.pfptown.com/244/luffy-pfp-4503.png"
    },
    {
        id:2,
        name:"Zolo",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/564x/c4/3f/25/c43f25e59a724e0ae7331682f5e65899.jpg"
    },
    {
        id:3,
        name:"Nami",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/564x/19/82/a6/1982a6184011e41357552a98242da639.jpg"
    },
    {
        id:4,
        name:"Usopp",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/564x/81/a8/4c/81a84cb1d0300caba29bf65e20893d46.jpg"
    },
    {
        id:5,
        name:"Sanji",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/564x/ef/4b/22/ef4b2250c712f4c191d742300763d548.jpg"
    },
    {
        id:6,
        name:"Chopper",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/736x/ec/5b/57/ec5b57209323835ff8513238a48811eb.jpg"
    },
    {
        id:7,
        name:"Robin",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/564x/f7/f0/c3/f7f0c3a27feca210f8b53edc33936ad8.jpg"
    },
    {
        id:8,
        name:"Franky",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/736x/8a/f1/5c/8af15cb16ab00d72336482ad5a40b693.jpg"
    },
    {
        id:9,
        name:"Brook",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/564x/70/1e/ad/701ead49714d97417735bf9d634c80ce.jpg"
    },
    {
        id:10,
        name:"Jinbei",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia tempora dolorum quo necessitatibus numquam, deleniti earum molestias nemo repellat voluptates!",
        img:"https://i.pinimg.com/564x/ff/2d/2f/ff2d2f3c94c903f74d879f8722b47e42.jpg"
    },
]

function Testimonial() {

    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase:"linear",
        pauseOnHover:false,
        pauseOnFocus:true,
        autoplay:true,
        autoplaySpeed:2000,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            }
        ]
    }

  return (
    <div className='py-10 dark:bg-gray-950'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold dark:text-white'>Testimonial</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, a.</p>
            </div>

            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {TestimonialData.map((data)=>(
                        <div className='my-6'>   
                            <div key={data.id}
                                className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl mx-4 dark:bg-gray-800 bg-primary/10 relative'>
                                <div className='flex justify-center mb-4'>
                                    <img src={data.img} alt="" className='w-20 h-20 rounded-full'/>
                                </div>
                                
                                <div className='flex items-center gap-4 flex-col'>
                                    <div className='spce-y-3'>
                                        <p className='text-xs text-gray-400 pt-3'>{data.desc}</p>
                                        <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial