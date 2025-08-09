import { useCallback, useEffect, useState , useContext } from "react"
import SeaImage from "../../assets/images/sea.png";
import LakeImage from "../../assets/images/lake.png";
import MountainImage from "../../assets/images/mountain.png";
import MountainDawnImage from "../../assets/images/mountainDawn.png";
import LakeEveningImage from "../../assets/images/lakeEvening.png";
import { WeatherContext } from "../WeatherContext/WeatherContext";
export const Carousel = () => {
      const { city } = useContext(WeatherContext);
    const [current, setCurrent] = useState(0)
    const [startX, setStartX] = useState(0);
    const [images, setImages] = useState([
        { id: 1, webformatURL: SeaImage },
        { id: 2, webformatURL: LakeImage },
        { id: 3, webformatURL: MountainImage },
        { id: 4, webformatURL: MountainDawnImage },
        { id: 5, webformatURL: LakeEveningImage },
    ])
    const fetchImages = useCallback(async () => {
        const key = "50531843-b8fbb02fd39d6518fd4d2cd71"
        const responsive = await fetch(`https://pixabay.com/api/?key=${key}&q=${city}&image_type=photo&orientation=horizontal&per_page=5`)
        const data = await responsive.json()
        console.log(data)
        if (data.hits?.length === 5) setImages(data.hits);
    }, [city])
    useEffect(() => {
            fetchImages()
            setCurrent(0);
    }, [fetchImages])
    const hadleNextImage = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    }
    const handlePreviousImage = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
    const getPosition = (index) => {
        const position = (index - current + images.length) % images.length;
        const lefts = [0, 180, 360, 540, 720];
        const zIndexes = [1, 2, 6, 5, 4]
        return {
            left: `${lefts[position]}px`,
            zIndex: zIndexes[position]
        }
    }
    return (
        <>
            <p className="title-gallary">Beautiful nature</p>
            <ul className="gallary" onTouchStart={(e) => setStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => {
                    const endX = e.changedTouches[0].clientX;
                    if (startX - endX > 30) hadleNextImage();
                    else if (endX - startX > 30) handlePreviousImage();
                }}
            >
                {images.map((elem, index) => {
                    return (
                        <li key={elem.id} className="gallary-item" style={getPosition(index)}>
                            <img src={elem.webformatURL} alt={elem.tags} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}