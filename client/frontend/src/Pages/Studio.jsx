import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FirstNavCard from '../MyntraStudio/Components/FirstNavCard';
import UploadContent from '../MyntraStudio/Components/UploadContent';

const Studio = () => {
  return (
    <div className='h-[600px] bg-[#FDEEF1] flex items-center justify-evenly overflow-y-hidden'>

        <div className='bg-[#F4F4F5] w-[400px] h-[500px] justify-center'>

            <nav className='flex items-center justify-between px-3 bg-white p-4 sticky top-0'>

                <div className='flex items-center gap-3'>
                    <p><ArrowBackIcon/></p>
                   <p className='font-semibold'>studio</p>
                </div>
                <div className='flex items-center gap-3'>
                   <p className='font-semibold'><UploadContent/></p>
                </div>

            </nav>

            <div className='h-screen overflow-y-scroll scrollbar-hide py-5'>
               <div>
                 <FirstNavCard/>
               </div>
            </div>

        </div>

        
    </div>
  )
}

export default Studio