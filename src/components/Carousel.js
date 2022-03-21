import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./carousel-style.css"

class DemoCarousel extends Component {
    render() {
        return (
          <div className="alignment-container">
            <Carousel width={500} dynamicHeight={true} thumbWidth={40}>

                <div>
                    <img src="/images/mortgage_sm.png" />
                </div>
                <div>
                    <img src="/images/morel_login.png" />
                </div>
                <div>
                    <img src="/images/coffee_404.png" />
                </div>

                <div>
                    <img src="/images/lan_logo.png" />
                </div>
                <div>
                    <img src="/images/meal_manager.png" />
                </div>

                <div>
                    <img src="/images/pedal.png" />
                </div>
                <div>
                    <img src="/images/grandcanyon.png" />
                </div>
            </Carousel>
          </div>
        );
    }
};

export default DemoCarousel;