import React from 'react'

function InputPodcasts() {
  return (
    <div className='my-4 px-4 lg:px-12'>
        <h1 className='text-2xl font-semibold '> create your podcasts</h1>
        <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="w-full lg:w-2/6 flex items-center justify-center lg:justify-start">
            <div className="size-[20vh] lg:size-[60vh] flex items-center j hover:bg-slate-50 transition-all duration-300"
            style={{border:"1px dashed black"}}>
                        <input type='file' accept='image/' id='file' name='frontImage' className='hidden'/>
                        <label htmlFor='file' className='text-xl h-[100%] p-4 hover:cursor-pointer flex items-center justify-center hover:bg-zinc-200 transition-all duration-300'>
                            <div className='text-center'>Drag and Drop the thumbnail or Click to Browse</div>
                        </label>
            </div>
            </div>

            <div className="">
                
            </div>
        </div>
    </div>
  )
}

export default InputPodcasts