import React from 'react';
import { PropTypes } from 'prop-types';

const textSize = (str) => {
  const sizerDiv = document.createElement('div');
  sizerDiv.setAttribute('class', 'textSizer');
  const textChild = document.createTextNode(str);
  sizerDiv.appendChild(textChild);
  document.getElementsByTagName('body')[0].appendChild(sizerDiv);
  const w = sizerDiv.clientWidth;
  const h = sizerDiv.clientHeight;
  sizerDiv.remove();
  return [w, h];
};

class RunwayId extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      pattern,
      idx,
      offset,
      className,
      textClassName,
      patternIndicatorClassName,
      showPatternIndicator,
    } = this.props;

    const size = textSize(name);
    const width = size[0];
    const height = size[1];

    const line2Props = {};

    if (pattern === 'left') line2Props.x2 = -15;

    if (pattern === 'right') line2Props.x2 = 15;

    const t = offset + height - 2;

    let transform = `translate(0, ${t})`;

    if (idx === 1) transform = `translate(0, -${t}) rotate(180)`;

    const textX = idx === 1 ? (-1 * width) / 4 : (-1 * width) / 1;
    return (
      <g className={`runway-id ${className ? className : ''}`} transform={transform}>
        <text className={`runway-text ${textClassName ? textClassName : ''}`} x={textX} y={0 - 2}>
          {name}
        </text>
        {showPatternIndicator && (
          <line
            className={`runway-line ${patternIndicatorClassName ? patternIndicatorClassName : ''}`}
            x1={idx === 1 ? 6 : -6}
            x2={idx === 1 ? 6 : -6}
            y1={0}
            y2={15}
          ></line>
        )}
        {showPatternIndicator && (
          <line
            className={`runway-line ${patternIndicatorClassName ? patternIndicatorClassName : ''}`}
            x1={idx === 1 ? 6 : -6}
            y1={13.5}
            y2={13.5}
            {...line2Props}
          ></line>
        )}
      </g>
    );
  }
}

RunwayId.defaultProps = {
  showPatternIndicator: true,
};

RunwayId.propTypes = {
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  className: PropTypes.string,
  textClassName: PropTypes.string,
  patternIndicatorClassName: PropTypes.string,
  showPatternIndicator: PropTypes.bool,
};

export default RunwayId;
