import React, { useRef, useState } from 'react'
import { IoPlayBack } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { playerAction } from '../../store/player';
import { useEffect } from 'react';


function AudioPlayer() {
    const [isSongPlaying, setIsSongPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState()
    const [duration, setDuration] = useState(0)
    const dispatch = useDispatch()
    const playerDivState = useSelector((state) => state.player.isPlayerDiv)
    const songPath = useSelector((state) => state.player.songPath)
    const img = useSelector((state) => state.player.img)

    const audioRef = useRef()
    // const duration = audioRef.current.duration;
    console.log(duration);
    const formatTime = (time) => {
        const minute = Math.floor(duration / 60)
        const second = Math.floor(duration % 60)
        return `${minute}:${second < 10 ? "0" : ""}${second}`
    }



    const closeAudioPlayerDiv = (e) => {
        e.preventDefault();
        dispatch(playerAction.closeDiv())
        dispatch(playerAction.changeImage(`http://localhost:5000/${items.frontImage}`))
        dispatch(playerAction.changeSong(`http://localhost:5000/${items.audioFile}`))
    }

    const handlePlayPodcast = () => {
        setIsSongPlaying(!isSongPlaying)
        if (isSongPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
        }
    }

    const handleLoadedMetaData = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration)
        }
    }

    const backward = () => {
        if (audioRef.current) {
            let newTime = Math.max(currentTime - 10, 0)
            audioRef.current.currentTime(newTime)
            setCurrentTime(newTime)
        }
    }

    const forward = () => {
        if (audioRef.current) {
            let newTime = Math.min(currentTime + 10, duration)
            audioRef.current.currentTime(newTime)
            setCurrentTime(newTime)
        }
    }

    const handleSeek = () => {
        if (audioRef.current) {
            const newTime = (e.target.value / 100) * duration;
            audioRef.current.currentTime(newTime)
        }
    }

    useEffect(() => {
        handlePlayPodcast()
        const currentAudio = audioRef.current;
        if (currentAudio) {
            currentAudio.addEventListener("timeUpdate", handleTimeUpdate)
            currentAudio.addEventListener("loadedMetaData", handleLoadedMetaData)
        }
    }, [songPath])

    return (
        <div className={`${playerDivState ? "fixed" : "hidden"} 
    fixed bottom-0 left-0 w-[100%] bg-zinc-900 text-zinc-300 p-4 rounded flex items-center gap-4`}>
            <div className="hidden md:block w-1/3">
                <img src={img} alt=""
                    className={`size-12 rounded-full object-cover`} />
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                <div className="w-full flex items-center justify-center gap-4 text-xl">
                    <button onClick={backward}><IoPlayBack /></button>
                    <button onClick={handlePlayPodcast}>{isSongPlaying ? <FaPause /> : <FaPlay />}</button>
                    <button onClick={forward}><IoPlayForward /></button>
                </div>
                <div className="w-full flex items-center justify-center mt-3">
                    <input type="range" min="0" max="100" value={(currentTime / duration) * 100 || 0}
                        className='w-full hover:cursor-pointer'
                        onChange={handleSeek} />
                </div>
                <div className="w-full flex items-center justify-between text-sm">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
            <div className="w-1/3 flex items-center justify-end">
                <button onClick={closeAudioPlayerDiv}>
                    <ImCross />
                </button>
            </div>
            <audio ref={audioRef} src={songPath} />
        </div>
    )
}

export default AudioPlayer