import React from 'react';
import Slider from 'rc-slider';
import './Slider.css'

const { Range } = Slider;

export class DynamicBounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 10000,
    };
  }

  onSliderChange = (value) => {
    // console.log(value);
  };

  onMinChange = (e) => {
    this.setState({
      min: +e.target.value || 0,
    });
  };

  onMaxChange = (e) => {
    this.setState({
      max: +e.target.value || 100,
    });
  };

  render() {
    return (
      <div>
        <Range
          defaultValue={[0, 5000]}
          min={this.state.min}
          max={this.state.max}
          onChange={this.onSliderChange}
        />
      </div>
    );
  }
}
