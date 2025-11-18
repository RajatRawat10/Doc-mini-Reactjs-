import React, { useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {

    const ref = useRef(null);

    const data = [
        {
            desc: "Sample file for project documentation.",
            filesize: "3.2mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download", tagcolor: "green" }
        },
        {
            desc: "Image assets for website banner.",
            filesize: "1.8mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Upload", tagcolor: "blue" }
        },
        {
            desc: "Monthly report in PDF format.",
            filesize: "5.4mb",
            close: true,
            tag: { isOpen: true, tagTitle: "View", tagcolor: "orange" }
        },
        {
            desc: "Backup of important client data.",
            filesize: "7.1mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Restore", tagcolor: "red" }
        },
        {
            desc: "Draft version of presentation slides.",
            filesize: "2.9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Edit", tagcolor: "purple" }
        }
    ];


    return (
        <div ref={ref} className='z-30 fixed bg-blue-400/50 h-screen w-full flex gap-4 flex-wrap p-6'>
            {data.map((elem, idx) => (
                <Card data={elem} key={idx} refrence={ref} />
            )
            )}
        </div>
    )
}

export default Foreground