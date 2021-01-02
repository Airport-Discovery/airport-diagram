import React from 'react';
import ReactDOM from 'react-dom';

import { Airport, Runway, RunwayId } from '../../src';
import '../../src/styles.css';

import './index.css';

const App = () => {
  const DENrunways = [
    {
      startingGeoPoint: {
        lat: '39.84094556',
        long: '-104.72665694',
      },
      endingGeoPoint: {
        lat: '39.84065639',
        long: '-104.68393611',
      },
      _id: '5feedc5b1c3a1e2sfgsgbdc',
      direction1: '07',
      direction2: '25',
      width: 150,
      surface: 'CON',
    },
    {
      startingGeoPoint: {
        lat: '39.87755583',
        long: '-104.66222917',
      },
      endingGeoPoint: {
        lat: '39.87724361',
        long: '-104.61948556',
      },
      _id: '5feedc5bsgsg4d9bdc',
      direction1: '08',
      direction2: '26',
      width: 150,
      surface: 'CON',
    },
    {
      startingGeoPoint: {
        lat: '39.89703583',
        long: '-104.686805',
      },
      endingGeoPoint: {
        lat: '39.86410417',
        long: '-104.68718806',
      },
      _id: '5feedc5b1c3a1e297sda',
      direction1: '16L',
      direction2: '34R',
      width: 150,
      surface: 'CON',
    },
    {
      startingGeoPoint: {
        lat: '39.89579631',
        long: '-104.69608383',
      },
      endingGeoPoint: {
        lat: '39.85188686',
        long: '-104.69658858',
      },
      _id: '5feedc5gsgha1e29704d9bdd',
      direction1: '16R',
      direction2: '34L',
      width: 200,
      surface: 'CON',
    },
    {
      startingGeoPoint: {
        lat: '39.86495194',
        long: '-104.64130472',
      },
      endingGeoPoint: {
        lat: '39.83201972',
        long: '-104.64170972',
      },
      _id: '5fehfh5b1c3a1e29704d9bde',
      direction1: '17L',
      direction2: '35R',
      width: 150,
      surface: 'CON',
    },
    {
      startingGeoPoint: {
        lat: '39.86124528',
        long: '-104.66015444',
      },
      endingGeoPoint: {
        lat: '39.82831306',
        long: '-104.66055139',
      },
      _id: '5f23edc5b1c3a1e29704d9bdf',
      direction1: '17R',
      direction2: '35L',
      width: 150,
      surface: 'CON',
    },
  ];

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
      width: 197,
      surface: 'ASP',
    },
  ];

  const AMSrunways = [
    {
      startingGeoPoint: {
        lat: '52.30037222',
        long: '4.78348333',
      },
      endingGeoPoint: {
        lat: '52.314025',
        long: '4.803025',
      },
      _id: '5feedbf81c3a1e29704d982b',
      direction1: '04',
      direction2: '22',
      surface: 'ASP',
    },
    {
      startingGeoPoint: {
        lat: '52.28913056',
        long: '4.73729167',
      },
      endingGeoPoint: {
        lat: '52.30458056',
        long: '4.77751667',
      },
      _id: '5feedbf81c3a1e29704d982c',
      direction1: '06',
      direction2: '24',
      surface: 'ASP',
    },
    {
      startingGeoPoint: {
        lat: '52.33139722',
        long: '4.74003056',
      },
      endingGeoPoint: {
        lat: '52.30583056',
        long: '4.73768333',
      },
      _id: '5feedbf81c3a1e29704d982d',
      direction1: '18C',
      direction2: '36C',
      surface: 'ASP',
    },
    {
      startingGeoPoint: {
        lat: '52.31668889',
        long: '4.74766111',
      },
      endingGeoPoint: {
        lat: '52.318375',
        long: '4.79689167',
      },
      _id: '5feedbf81c3a1e29704d982e',
      direction1: '09',
      direction2: '27',
      surface: 'ASP',
    },
    {
      startingGeoPoint: {
        lat: '52.31615',
        long: '4.77969167',
      },
      endingGeoPoint: {
        lat: '52.290825',
        long: '4.77734722',
      },
      _id: '5feedbf81c3a1e29704d982f',
      direction1: '18L',
      direction2: '36R',
      surface: 'ASP',
    },
    {
      startingGeoPoint: {
        lat: '52.36025833',
        long: '4.711725',
      },
      endingGeoPoint: {
        lat: '52.32858056',
        long: '4.70883611',
      },
      _id: '5feedbf81c3a1e29704d9830',
      direction1: '18R',
      direction2: '36L',
      surface: 'ASP',
    },
  ];

  return (
    <div className="container">
      <div className="airport-card">
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
              tooltip={`${runway.direction1}/${runway.direction2} Surface: ${runway.surface}`}
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

        <div className="airport-name">MXP</div>
        <div className="airport-desc">Malpensa Airport</div>
      </div>

      <div className="airport-card">
        <Airport width={500} height={500} className="airport-diagram">
          {DENrunways.map((runway) => (
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
              length={runway.lengthF}
              className="airport-runway"
              runwayLineWidth={2}
              tooltip={`${runway.direction1}/${runway.direction2} Surface: ${runway.surface}`}
            >
              <RunwayId
                name={runway.direction1}
                pattern={runway.direction1.endsWith('L') ? 'left' : 'right'}
                textClassName="airport-text"
                showPatternIndicator={false}
              />
              <RunwayId
                name={runway.direction2}
                pattern={runway.direction2.endsWith('L') ? 'left' : 'right'}
                textClassName="airport-text"
                showPatternIndicator={false}
              />
            </Runway>
          ))}
        </Airport>

        <div className="airport-name">DEN</div>
        <div className="airport-desc">Denver International Airport</div>
      </div>

      <div className="airport-card">
        <Airport width={500} height={500} className="airport-diagram">
          {AMSrunways.map((runway) => (
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
              length={runway.lengthF}
              className="airport-runway"
              runwayLineWidth={2}
              tooltip={`${runway.direction1}/${runway.direction2} Surface: ${runway.surface}`}
            ></Runway>
          ))}
        </Airport>

        <div className="airport-name">AMS</div>
        <div className="airport-desc">Amsterdam Airport Schiphol</div>
      </div>
    </div>
  );
};

export default App;
