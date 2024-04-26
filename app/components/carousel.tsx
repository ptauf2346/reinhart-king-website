"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Carousel = ({ data }: {
    data: {
        image: string
    }[]
}) => {
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null)

    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <div>
            {/* Carousel container */}
            <div className='rounded-md overflow-hidden relative mx-auto' style={{ height: '300px', width: '600px'}}>
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width
                    }}
                    className='w-full h-full absolute flex transition-all duration-300'>
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div key={i} className='relative shrink-0 w-full h-full'>
                            <Image
                                className='pointer-events-none'
                                alt={`carousel-image-${i}`}
                                width={800}
                                height={800}
                                quality={75}
                                priority={i === 0}
                                src={v.image || "https://random.imagecdn.app/500/500"}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <div className='flex justify-center mt-3'>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    {">"}
                </button>
            </div>
        </div>
    )
}

export default Carousel