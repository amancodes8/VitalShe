import React, { useEffect, useRef } from 'react';

function Card() {
    const Cards = [
        {
            image: "https://via.placeholder.com/150",
            quote: "We are providing the solution",
        },
        {
            image: "https://via.placeholder.com/150",
            quote: "We are not providing the solution",
        },
        {
            image: "https://via.placeholder.com/150",
            quote: "We have provided the solution",
        },
        {
            image: "https://via.placeholder.com/150",
            quote: "We have provided the solution",
        },
    ];

    const cardRefs = useRef([]);


    return (
        <div className='pb-6 relative overflow-hidden px-2'>

            {/* Horizontal scrolling container */}
            <div className='w-full h-fit no-scrollbar flex flex-row gap-8 overflow-x-auto px-4 pt-4 pb-8 mt-8 border-b border-opacity-50 border-black'>
                {Cards.map((card, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className='card h-60 w-[40%] min-w-[180px] overflow-hidden border-gray-400 border-2 rounded-3xl flex flex-col items-center justify-center shadow-md shadow-black transition-transform ease-linear duration-300'
                    >
                        <img
                            src={card.image}
                            alt={`Card ${index}`}
                            className='w-full h-24 object-cover rounded-t-3xl'
                        />
                        <p className='p-2 text-center text-black'>{card.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
