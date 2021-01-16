import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import firstGameStatisticFirst from '../StatisticImages/firstGameStatisticFirts.jpg';
import firstGameStatisticSecond from '../StatisticImages/firstGameStatisticSecond.jpg';

export default class FirstGameStatisticSlider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstGameStatisticFirst}
                        alt="FirstGameStatisticFirst"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstGameStatisticSecond}
                        alt="secondGameStatisticSecond"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}