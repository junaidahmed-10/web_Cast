import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify"

function InputPodcasts() {

    const [frontImage, setFrontImage] = useState(null)
    const [dragging, setDragging] = useState(false)
    const [audioFile, setAudioFile] = useState(null)
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        category: ""
    })


    const handleChangeImage = (e) => {
        const file = e.target.files[0]
        setFrontImage(file)
    }

    const handleDragEnter = (e) => {
        e.preventDefault()
        setDragging(true)
    }
    const handleDragLeave = (e) => {
        e.preventDefault()
        setDragging(false)
    }
    const handleDragOver = (e) => {
        e.preventDefault()
        // setDragging(false)
    }

    const handleDropImage = (e) => {
        console.log("Dropped");
        e.preventDefault()
        setDragging(false)
        const file = e.dataTransfer.files[0]
        setFrontImage(file)
    }

    const handleAudioFile = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        setAudioFile(file)
        // console.log(file);
    }

    const onChangeInputs = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmitPodcast = async () => {
        // console.log({inputs, frontImage, audioFile});
        const data = new FormData()
        data.append("title", inputs.title)
        data.append("description", inputs.description)
        data.append("category", inputs.category)
        data.append("frontImage", inputs.frontImage)
        data.append("audioFile", inputs.audioFile)

        try {
            const res = await axios.post("http://localhost:5000/api/v1/addPodcasts", data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            console.log(res.data.message);

        } catch (error) {
            console.log("handleSubmitPodcast: ", error);

        }

        finally {
            setInputs({
                title: "",
                description: "",
                category: ""
            })
            setFrontImage(null)
            setAudioFile(null)
        }
    }


    return (
        <div className='my-4 px-4 lg:px-12'>
            <ToastContainer />
            <h1 className='text-2xl font-semibold '> create your podcasts</h1>
            <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="w-full lg:w-2/6 flex items-center justify-center lg:justify-start">
                    <div className="size-[20vh] lg:size-[60vh] flex items-center j hover:bg-slate-50 transition-all duration-300"
                        style={{ border: "1px dashed black" }}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDropImage}
                    >
                        <input type='file' accept='image/' id='file' name='frontImage' className='hidden' onChange={handleChangeImage} />
                        {frontImage
                            ?
                            (<img src={URL.createObjectURL(frontImage)} alt='thumbnail' className='h-[100%] w-[100%] object-cover' />)
                            :
                            (<><label htmlFor='file' className={`text-xl h-[100%] w-[100%] p-4 hover:cursor-pointer flex items-center justify-center ${dragging ? "bg-blue-200" : " "} hover:bg-zinc-200 transition-all duration-300`}
                            >
                                <div className='text-center'>Drag and Drop the thumbnail or Click to Browse</div>
                            </label></>)}

                    </div>
                </div>

                <div className="w-full lg:w-4/6">
                    <div className="flex flex-col ">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' name='title' placeholder='Title for you podcast'
                            className='mt-4 px-4 py-2 outline-none border border-zinc-800 rounded'
                            value={inputs.title} onChange={onChangeInputs} />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="title">Description</label>
                        <textarea type="text" id='description' name='description' placeholder='Description for you podcast'
                            className='mt-4 px-4 py-2 outline-none border border-zinc-800 rounded' rows={4}
                            value={inputs.description} onChange={onChangeInputs} />
                    </div>
                    <div className="flex mt-4">
                        <div className="flex flex-col w-2/6">
                            <label htmlFor="audioFile">select audio</label>
                            <input type='file' accept='.mp3, .wav, .m4a, .ogg' id='audioFile' className='mt-4' onChange={handleAudioFile} />
                        </div>
                        <div className="flex flex-col w-4/6">
                            <label htmlFor="category">select category</label>
                            <select name="category" id="category" className='border border-zinc-900 mt-4 outline-none px-4 py-2'
                                value={inputs.category} onChange={onChangeInputs}>
                                <option value="">Select Category</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Bussiness">Bussiness</option>
                                <option value="Education">Education</option>
                                <option value="Government">Government</option>
                                <option value="Hobbies">Hobbies</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-6 flex">
                        <button
                            className='bg-zinc-900 w-full text-white rounded px-8 py-2 font-semibold hover:bg-zinc-800 transition-all duration-300'
                            onClick={handleSubmitPodcast}>
                            Create Podcast
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputPodcasts