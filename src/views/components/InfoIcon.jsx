import React from 'react';
import SVGFactory from '../components/SVG';
var SVG;

class InfoIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._play = this._play.bind(this);
  }

  render() {
    return (
      <SVG className='SVG-icon InfoIcon' width={20} height={20} fallbackText='info'>
        <circle className='SVG-fill' cx='10' cy='10' r='10'/>
        <path className='SVG-fill-bg' d='M10,8.666626c-0.736328,0-1.333313,0.596985-1.333313,1.333313v6.666687 c0,0.736328,0.596985,1.333313,1.333313,1.333313s1.333313-0.596985,1.333313-1.333313V9.999939 C11.333313,9.263611,10.736328,8.666626,10,8.666626z'/>
        <circle className='SVG-fill-bg' cx='10' cy='4.999969' r='1.666656'/>
      </SVG>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (!SVG.ENABLED) {
      return;
    }
    var played = nextProps.played;
    if (typeof played !== 'undefined' && played !== this.props.played) {
      this._play(played);
    }
  }

  _play(bool, instant) {
    //TODO
  }
}

InfoIcon.defaultProps = {
  played: false,
};

function InfoIconFactory(app) {
  SVG = SVGFactory(app);
  return app.mutate('core/components/InfoIcon', InfoIcon);
}

export default InfoIconFactory;
