import React, { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        const audioPlayer = document.getElementById('audioPlayer');

        const playAudio = () => {
            audioPlayer.play();
            document.removeEventListener('click', playAudio);
        };

        document.addEventListener('click', playAudio);

        return () => {
            document.removeEventListener('click', playAudio);
        };
    }, []);

    return (
        <div className="App">
            <img src='/download.jpeg' className='w-full h-52 mb-4' alt='QrCode Image' />
            <div className='mb-10 text-center'>You can add Your QrCode</div>
            <div className="audio-container">
                <audio controls id="audioPlayer">
                    <source src="/audio.mp3" type="audio/mp3" />
                    Your browser does not support the audio tag.
                </audio>
            </div>
        </div>
    );
}

export default App;
