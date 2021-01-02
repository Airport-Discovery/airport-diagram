import React from 'react';
import { PropTypes } from 'prop-types';

import utils from '../../utils';

class Runway extends React.Component {
  renderRunway() {
    const radians = (n) => n * (Math.PI / 180);
    const degrees = (n) => n * (180 / Math.PI);
    const avg = (v1, v2) => 0.5 * (v1 + v2);

    const {
      width,
      height,
      long2x,
      lat2y,
      ratio,
      length: originalLength,
      startingGeoPoint,
      endingGeoPoint,
      className,
      runwayLineWidth,
      tooltip,
      onTooltipShow,
      onTooltipHide,
    } = this.props;

    const [startingLong, endingLong, startingLat, endingLat] = [
      startingGeoPoint.long,
      endingGeoPoint.long,
      startingGeoPoint.lat,
      endingGeoPoint.lat,
    ].map((v) => radians(v));
    const [x1, x2] = [startingLong, endingLong].map(long2x);
    const [y1, y2] = [startingLat, endingLat].map(lat2y);
    let heading = Math.atan2(x2 - x1, y2 - y1);
    heading = degrees(heading);
    const x = avg(x1, x2);
    const y = avg(y1, y2);

    let length = originalLength;

    if (!length) {
      const locationX = {
        latitude: startingGeoPoint.lat,
        longitude: startingGeoPoint.long,
      };

      const locationY = {
        latitude: endingGeoPoint.lat,
        longitude: endingGeoPoint.long,
      };
      length = utils.distanceBetweenLocations(locationX, locationY);
    }

    const runwayVisualLength = length * ratio;

    const tx = width / 2;
    const ty = height / 2;

    const ox = x * ratio;
    const oy = -1 * y * ratio;

    const transform = `translate(${tx}, ${ty}) translate(${ox}, ${oy}) rotate(${heading})`;

    const childrenWithProps = React.Children.map(this.props.children, (child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          offset: runwayVisualLength / 2,
          idx: i,
        });
      }
      return child;
    });

    return (
      <g
        transform={transform}
        onMouseMove={(event) => onTooltipShow(event, tooltip)}
        onMouseLeave={onTooltipHide}
        className="runway-g"
      >
        {childrenWithProps}
        <rect
          className={`runway-rect ${className}`}
          width={runwayLineWidth}
          height={runwayVisualLength}
          x={-8}
          y={(-1 * runwayVisualLength) / 2}
        ></rect>
      </g>
    );
  }

  render() {
    return this.renderRunway();
  }
}

Runway.defaultProps = {
  runwayLineWidth: 3,
};

Runway.propTypes = {
  length: PropTypes.number,
  runwayLineWidth: PropTypes.number,
  startingGeoPoint: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number,
  }).isRequired,

  endingGeoPoint: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number,
  }).isRequired,
  className: PropTypes.string,
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Runway;
