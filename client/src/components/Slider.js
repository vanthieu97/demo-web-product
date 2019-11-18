import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <header className='container-fluid'>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='./assets/sliders/slider-1.webp' alt='slider-1' />
                            <div className="carousel-caption">
                                <h2 className="display-4">First Slide</h2>
                                <p className="lead">This is a description for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='./assets/sliders/slider-2.webp' alt='slider-2' />
                            <div className="carousel-caption">
                                <h2 className="display-4">Second Slide</h2>
                                <p className="lead">This is a description for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='./assets/sliders/slider-3.webp' alt='slier-3' />
                            <div className="carousel-caption">
                                <h2 className="display-4">Third Slide</h2>
                                <p className="lead">This is a description for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='./assets/sliders/slider-4.webp' alt='slier-4' />
                            <div className="carousel-caption">
                                <h2 className="display-4">Third Slide</h2>
                                <p className="lead">This is a description for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='./assets/sliders/slider-5.webp' alt='slier-5' />
                            <div className="carousel-caption">
                                <h2 className="display-4">Third Slide</h2>
                                <p className="lead">This is a description for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='./assets/sliders/slider-6.webp' alt='slier-6' />
                            <div className="carousel-caption">
                                <h2 className="display-4">Third Slide</h2>
                                <p className="lead">This is a description for the third slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src='./assets/sliders/slider-7.webp' alt='slier-7' />
                            <div className="carousel-caption">
                                <h2 className="display-4">Third Slide</h2>
                                <p className="lead">This is a description for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </header>
        );
    }
}

export default Slider;