import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isVisible } from './helpers';
import { box, thumbnail, image } from './styles';

class Img extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startLoad: false,
      thumbnail: {
        loaded: false,
      },
      image: {
        laoded: false,
      },
    };
  }

  componentDidMount() {
    const { imgContainer } = this;
    const { lazyLoad } = this.props;

    if (lazyLoad === 'none') {
      this.setState({ startLoad: true }); // eslint-disable-line
      return;
    }

    const self = this;

    window.addEventListener('scroll', function checkVisible() { // eslint-disable-line
      if (isVisible(imgContainer)) {
        self.setState({ startLoad: true });
        window.removeEventListener('scroll', checkVisible); // eslint-disable-line
      }
    });
  }

  onLoadThumbnail = () => {
    const { thumbnail: thumbState } = this.state;

    this.setState({
      thumbnail: {
        ...thumbState,
        loaded: true,
      },
    });
  }

  onLoadImage = () => {
    const { image: imgState } = this.state;

    this.setState({
      image: {
        ...imgState,
        loaded: true,
      },
    });
  }

  renderThumbnail = () => {
    const { thumbnail: src, blur, alt, lazyLoad } = this.props;
    const { startLoad } = this.state;

    if (lazyLoad === 'all' && !startLoad) return;

    const { loaded } = this.state.thumbnail;
    const style = thumbnail(blur, loaded);

    return (
      <img
        src={src}
        style={style}
        onLoad={this.onLoadThumbnail}
        alt={alt}
      />
    );
  }

  renderImage = () => {
    const { lazyLoad } = this.props;
    const { startLoad } = this.state;

    if (lazyLoad === 'image' && !startLoad) return;

    const { loaded: thumbLoaded } = this.state.thumbnail;

    if (!thumbLoaded) return;

    const { src, alt } = this.props;
    const { loaded } = this.state.image;
    const style = image(loaded);

    return (
      <img
        src={src}
        style={style}
        onLoad={this.onLoadImage}
        alt={alt}
      />
    );
  }

  render() {
    const {
      aspectRatio,
      color,
    } = this.props;

    const style = box(aspectRatio, color);

    return (
      <div style={style} ref={(imgContainer) => { this.imgContainer = imgContainer; }}>
        { this.renderThumbnail() }
        { this.renderImage() }
      </div>
    );
  }
}

Img.propTypes = {
  color: PropTypes.string,
  aspectRatio: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  blur: PropTypes.number,
  alt: PropTypes.string,
  lazyLoad: PropTypes.string,
};

Img.defaultProps = {
  color: '#B9E1DC',
  blur: 40,
  alt: '',
  lazyLoad: 'image',
};

export default Img;
