import {Carousel} from 'react-bootstrap';
import image1 from "./../../img/carousel/start.png";
import image2 from "./../../img/carousel/ezh.png";
import image3 from "./../../img/carousel/final.png";

function NewsCarousel() {
    return (
        <Carousel className="mt-4">
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    
        )
}

export default NewsCarousel;