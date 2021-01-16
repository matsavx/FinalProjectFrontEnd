import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import firstGameResultImage from '../ResultsImages/firstGameResult.jpg';
import secondGameResultImage from '../ResultsImages/secondGameResult.jpg';
import thirdGameResultImage from '../ResultsImages/thirdGameResult.jpg';


export default class GameResultsSlider extends Component {
    render() {
        return (
            <Carousel className="w-50 mr-auto ml-auto mt-3 border-dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstGameResultImage}
                        alt="FirstGameResultImage"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondGameResultImage}
                        alt="SecondGameResultImage"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={thirdGameResultImage}
                        alt="ThirdGameResultImage"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}