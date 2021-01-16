import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import thirdGameStatisticFirst from '../StatisticImages/ThirdGameStatisticFirts.jpg';
import thirdGameStatisticSecond from '../StatisticImages/ThirdGameStatisticSecond.jpg';

export default class FirstGameStatisticSlider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={thirdGameStatisticFirst}
                        alt="thirdGameStatisticFirst"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={thirdGameStatisticSecond}
                        alt="thirdGameStatisticSecond"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}