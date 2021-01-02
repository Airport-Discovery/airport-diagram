## Installation

### yarn

`yarn add @airport-discovery/airport-diagram`

### npm

`yarn add @airport-discovery/airport-diagram`

## Usage

```javascript
import { Airport, Runway, RunwayId } from '@airport-discovery/airport-diagram';
import '@airport-discovery/airport-diagram/lib/styles.css';
```

```javascript
<Airport>
  <Runway
    startingGeoPoint={{
      lat: 45.650384,
      long: 8.727896,
    }}
    endingGeoPoint={{
      lat: 45.61575,
      long: 8.73749722,
    }}
    tooltip={`17L/35R`}
  >
    <RunwayId name={`17L`} pattern={`left`} />
    <RunwayId name={`35R`} pattern={`right`} />
  </Runway>
</Airport>
```
