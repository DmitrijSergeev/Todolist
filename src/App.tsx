import './App.css'
import {useEffect, useState} from "react";

export type Photos = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
export type AllPhotos = {
    allPhotos: Photos[]
}
function App() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {

    }, []);

    const scrollHandler = () => {
        console.log('scroll')
    }

    return (
        <>

        </>
    )
}

export default App
