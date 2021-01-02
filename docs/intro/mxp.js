import React from 'react';
import ReactDOM from 'react-dom';

import { Airport, Runway, RunwayId } from '../../src';
import '../../src/styles.css';

const MXP = () => {
  const MXPrunways = [
    {
      startingGeoPoint: {
        lat: '45.650384',
        long: '8.727896',
      },
      endingGeoPoint: {
        lat: '45.61575',
        long: '8.73749722',
      },
      _id: '5fe525251c3a1e29704da02f',
      direction1: '17L',
      direction2: '35R',

      lengthF: 12861,
      width: 197,
      surface: 'ASP',
    },
    {
      startingGeoPoint: {
        lat: '45.64545278',
        long: '8.718725',
      },
      endingGeoPoint: {
        lat: '45.611074',
        long: '8.728277',
      },
      _id: '5feedc525c3a1e29704da030',
      direction1: '17R',
      direction2: '35L',

      lengthF: 12861,
      width: 197,
      surface: 'ASP',
    },
  ];

  return (
    <div style={{ background: '#033d55' }}>
      <Airport width={500} height={500} className="airport-diagram">
        {MXPrunways.map((runway) => (
          <Runway
            key={runway._id}
            startingGeoPoint={{
              lat: Number.parseFloat(runway.startingGeoPoint.lat, 10),
              long: Number.parseFloat(runway.startingGeoPoint.long, 10),
            }}
            endingGeoPoint={{
              lat: Number.parseFloat(runway.endingGeoPoint.lat, 10),
              long: Number.parseFloat(runway.endingGeoPoint.long, 10),
            }}
            className="airport-runway"
            runwayLineWidth={2}
            tooltip={`${runway.direction1}/${runway.direction2}`}
          >
            <RunwayId
              name={runway.direction1}
              pattern={runway.direction1.endsWith('L') ? 'left' : 'right'}
              textClassName="airport-text"
              patternIndicatorClassName="airport-pi"
            />
            <RunwayId
              name={runway.direction2}
              pattern={runway.direction2.endsWith('L') ? 'left' : 'right'}
              textClassName="airport-text"
              patternIndicatorClassName="airport-pi"
            />
          </Runway>
        ))}
      </Airport>
    </div>
  );
};

export default MXP;
