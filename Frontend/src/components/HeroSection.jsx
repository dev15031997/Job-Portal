import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    // const [query, setQuery] = useState("");
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>#1 Job Site</span>
                <h1 className='text-5xl font-bold'>The <span className='text-[#6A38C2]'>largest </span><br /> Job board for Tech Jobs </h1>
                <p>The #1 platform for exceptional tech job listings. Reach skilled professionals ready to make an impact. </p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Job title, keywords, or company'
                        // onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection