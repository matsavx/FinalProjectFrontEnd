import React, {Component} from "react";
import GameResultsSlider from "../Components/GameResultsSlider";

export default class Results extends Component {
    render() {
        return (
            <div>
                <h1 className="">Results of the last games</h1>
                <GameResultsSlider/>
            </div>
        )
    }
}