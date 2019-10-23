import React, { Component } from 'react';
import classnames from 'classnames';
import '../slider.scss';

import canvass from '../assets/Canvass.jpg';
import debate from '../assets/Debate.jpg';
import gantry from '../assets/Gantry.jpg';
import katch from '../assets/Katch.jpg';
import laptop from '../assets/Laptop.jpg';
import lisa from '../assets/Lisa.jpg';
import liz from '../assets/Liz.jpg';
import sanger from '../assets/Sanger.jpg';
import signs from '../assets/Signs.jpg';
import tabling from '../assets/Tabling.jpg';

const images = [canvass, debate, gantry, katch, laptop, lisa, liz, sanger, signs, tabling];

class Slider extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      intervalId: 0,
    };
    this.goNext = this.goNext.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
  }

  componentDidMount() {
    const intervalId = setInterval(this.goNext, 7500);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  goNext() {
    const { index } = this.state;
    let next;
    if (index === images.length - 1) {
      next = 0;
    } else {
      next = index + 1;
    }
    this.setState({ index: next });
  }

  renderSlides() {
    const { index } = this.state;
    return images.map((url, idx) => (
      <img src={url} alt="" key={url} className={classnames('slider__img',
        { 'slider__img--hidden': idx !== index })}
      />
    ));
  }

  render() {
    return (
      <div className="slider">
        {this.renderSlides()}
      </div>
    );
  }
};

export default Slider;
