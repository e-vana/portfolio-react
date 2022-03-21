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
                    <img src="/images/mortgage_sm.png" alt="mortgage_sm" />
                </div>
                <div>
                    <img src="/images/morel_login.png" alt="morel_login" />
                </div>
                <div>
                    <img src="/images/coffee_404.png" alt="coffee_404" />
                </div>

                <div>
                    <img src="/images/lan_logo.png" alt="lan_logo" />
                </div>
                <div>
                    <img src="/images/meal_manager.png" alt="meal_manager" />
                </div>

                <div>
                    <img src="/images/pedal.png" alt="pedal" />
                </div>
                <div>
                    <img src="/images/grandcanyon.png" alt="grandcanyon" />
                </div>
            </Carousel>
          </div>
        );
    }
};

export default DemoCarousel;