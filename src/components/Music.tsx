import React, { useRef, useState } from 'react';
import { IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, VolumeDown } from '@mui/icons-material';

const Music: React.FC<{ src: string; title?: string }> = ({ src, title }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.1);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (_: Event, newValue: number | number[]) => {
        const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    };

    return (
        <div className="audio-player">
            {title && <h3 className="audio-title">{title}</h3>}
            <audio ref={audioRef} src={src} preload="metadata" />
            <div className="controls">
                <IconButton onClick={togglePlay} color="primary">
                    {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
                <div className="volume-control">
                    <VolumeDown />
                    <Slider
                        value={volume}
                        onChange={handleVolumeChange}
                        min={0}
                        max={0.3}
                        step={0.1}
                        sx={{
                            color: '#007bff',
                            width: '100px',
                            '& .MuiSlider-thumb': {
                                boxShadow: '0px 0px 5px rgba(0, 123, 255, 0.5)',
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Music;
