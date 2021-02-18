import React from 'react';
import { PropTypes } from 'prop-types';

import utils from '../../utils';

const VIEW_BOX_WIDTH = 300;
const VIEW_BOX_HEIGHT = 300;

class Airport extends React.Component {
  constructor(props) {
    super(props);
    this.init(props);

    this.adjustTextCollisions = this.adjustTextCollisions.bind(this);
    this.onTooltipShow = this.onTooltipShow.bind(this);
    this.onTooltipHide = this.onTooltipHide.bind(this);
    this.onClick = this.onClick.bind(this);

    this.adjusted = {};

    this.state = {
      showTooltip: false,
      tooltipTop: '',
      tooltipLeft: '',
      tooltipText: '',
    };
  }

  adjustTextCollisions() {
    const runwaysTexts = document.getElementsByClassName('runway-id');
    for (let i = 0; i < runwaysTexts.length; i++) {
      for (let j = 0; j < runwaysTexts.length; j++) {
        const self = runwaysTexts[i];
        const selfBoundingRect = self.getBoundingClientRect();
        const that = runwaysTexts[j];
        if (self != that) {
          const thatBoundingRect = that.getBoundingClientRect();
          if (
            !(
              thatBoundingRect.left > selfBoundingRect.right ||
              thatBoundingRect.right < selfBoundingRect.left ||
              thatBoundingRect.top > selfBoundingRect.bottom ||
              thatBoundingRect.bottom < selfBoundingRect.top
            )
          ) {
            const id = that.getAttribute('data-id');
            if (!this.adjusted[id]) {
              const style = window.getComputedStyle(that);
              const matrix = new WebKitCSSMatrix(style.transform);

              const isNegative = Math.sign(matrix.m42) === -1;

              const transform = that.getAttribute('transform');
              const hasRotate = transform.includes('rotate(180)');

              let translate;
              if (!isNegative) {
                translate = matrix.m42 + 20;
              } else {
                translate = matrix.m42 - 20;
              }

              if (hasRotate)
                that.setAttribute('transform', `translate(0, ${translate}) rotate(180)`);
              else that.setAttribute('transform', `translate(0, ${translate})`);
              this.adjusted[id] = true;
              this.adjusted[self.getAttribute('data-id')] = true;
            }
          }
        }
      }
    }
  }

  componentDidMount() {
    this.adjustTextCollisions();
  }

  onClick() {
    const { onClick } = this.props;

    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  }

  onTooltipShow(event, text) {
    if (text) {
      this.setState({
        showTooltip: true,
        tooltipLeft: `${event.pageX + 10}px`,
        tooltipTop: `${event.pageY + 10}px`,
        tooltipText: text,
      });
    }
  }

  onTooltipHide() {
    this.setState({
      showTooltip: false,
      tooltipTop: '',
      tooltipLeft: '',
    });
  }

  init(props) {
    const { children } = props;

    const radians = (n) => n * (Math.PI / 180);
    const avg = (v1, v2) => 0.5 * (v1 + v2);

    const lons = children
      .map(({ props }) => [props.startingGeoPoint.long, props.endingGeoPoint.long])
      .flat()
      .map((v) => radians(v));
    const lats = children
      .map(({ props }) => [props.startingGeoPoint.lat, props.endingGeoPoint.lat])
      .flat()
      .map((v) => radians(v));
    const lonMax = Math.max(...lons);
    const lonMin = Math.min(...lons);
    const latMax = Math.max(...lats);
    const latMin = Math.min(...lats);
    const lon0 = avg(lonMin, lonMax);
    const lat0 = avg(latMin, latMax);
    const cosLat0 = Math.cos(lat0);
    const R = 20902000; // Earth radius in feet

    const long2x = (lon) => R * (lon - lon0) * cosLat0;
    const lat2y = (lat) => R * (lat - lat0);

    this.long2x = long2x;
    this.lat2y = lat2y;

    let maxRunwayLen = 0;
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      let { length, startingGeoPoint, endingGeoPoint } = element.props;

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

      if (length > maxRunwayLen) maxRunwayLen = length;
    });

    const minDimension = Math.min(VIEW_BOX_WIDTH, VIEW_BOX_HEIGHT);

    // ratio of the runways
    this.ratio = (1 / maxRunwayLen) * (minDimension - 190);
  }

  render() {
    const { showTooltip, tooltipText, tooltipLeft, tooltipTop } = this.state;
    const { width, height, tooltipClassName, className } = this.props;

    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          ratio: this.ratio,
          long2x: this.long2x,
          lat2y: this.lat2y,
          width: VIEW_BOX_WIDTH,
          height: VIEW_BOX_HEIGHT,
          onTooltipShow: this.onTooltipShow,
          onTooltipHide: this.onTooltipHide,
        });
      }
      return child;
    });

    const airportStyle = {};

    if (width) {
      airportStyle.width = width;
    }

    if (height) {
      airportStyle.height = height;
    }

    return (
      <React.Fragment>
        <svg
          viewBox={`0 0 ${VIEW_BOX_WIDTH} ${VIEW_BOX_HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
          style={airportStyle}
          className={className && className}
          onClick={this.onClick}
        >
          {childrenWithProps}
        </svg>
        {showTooltip && (
          <div
            className={`airport-diagram-tooltip ${tooltipClassName ? tooltipClassName : ''}`}
            style={{
              left: tooltipLeft,
              top: tooltipTop,
            }}
          >
            {tooltipText}
          </div>
        )}
      </React.Fragment>
    );
  }
}

Airport.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  tooltipClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Airport;
