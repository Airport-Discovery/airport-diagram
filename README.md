# Airport Diagram

Airport runways diagram based on Geo Coordinates 📍 for React.

Please read the [documentation](https://airport-discovery.github.io/airport-diagram/) and check out the [demo](https://airport-discovery.github.io/airport-diagram/#/demo) for more usage instructions.

## Installation

### yarn

`yarn add @airport-discovery/airport-diagram`

### npm

`yarn add @airport-discovery/airport-diagram`

## Documentation

Please read the [documentation](https://airport-discovery.github.io/airport-diagram/) and check out the [demo](https://airport-discovery.github.io/airport-diagram/#/demo) for more usage instructions.

## Usage

```javascript
import { Airport, Runway, RunwayId } from '@airport-discovery/airport-diagram';
import '@airport-discovery/airport-diagram/lib/styles.css';
```

```jsx
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
  >
    <RunwayId name={`17L`} pattern={`left`} />
    <RunwayId name={`35R`} pattern={`right`} />
  </Runway>
</Airport>
```

## Development

`yarn start`

Then go to `http://localhost:4000` where you can see the documentation and test the modifications.

## License

MIT ©
