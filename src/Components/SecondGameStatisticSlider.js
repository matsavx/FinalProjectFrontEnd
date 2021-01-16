import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import secondGameStatisticFirst from '../StatisticImages/SecondGameStatisticFirts.jpg';
import secondGameStatisticSecond from '../StatisticImages/SecondGameStatisticSecond.jpg';

export default class FirstGameStatisticSlider extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondGameStatisticFirst}
                        alt="secondGameStatisticFirst"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondGameStatisticSecond}
                        alt="secondGameStatisticSecond"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}