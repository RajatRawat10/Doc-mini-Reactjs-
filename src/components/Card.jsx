import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "motion/react"


const Card = ({ data, refrence }) => {
    return (
        <motion.div drag dragConstraints={refrence} whileDrag={{ scale: 1.1 }} className=' shrink-0 relative h-70 w-60 bg-zinc-400 text-white py-8 px-3 rounded-4xl overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm leading-tight  mt-5 font-semibold '>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0 '>
                <div className='flex items-center py-3 px-5 justify-between '>
                    <h5>{data.filesize}</h5>
                    <span>
                        {data.close ? <IoCloseCircle size={25} /> : <MdOutlineFileDownload size={25} />}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className="w-full flex items-center py-3 justify-center"
                        // bypass tailwind to use dynamic color 
                        style={{ backgroundColor: data.tag.tagcolor }}>
                        <h3 className='text-white text-lg font-semibold '>
                            {data.tag.tagTitle}
                        </h3>
                    </div>)}

            </div>
        </motion.div>

    )
}

export default Card