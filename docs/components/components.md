## `<Airport>`

Airport component is the container of runways. Must have <Runway> childeren.

### Props

```table
rows:
  - Props: width
    Type: string
    Description: width applied to the `svg` style
  - Props: height
    Type: string
    Description: height applied to the `svg` style
  - Props: className
    Type: string
    Description: css class name
  - Props: tooltipClassName
    Type: string
    Description: runway tooltip css class name
```

## `<Runway>`

Runway component is the runway main line.

### Props

```table
rows:
  - Props: length
    Type: number
    Description: length of runway in feet, it\'s optional since it\'s calculated dynamically from the geo points.
  - Props: 'runwayLineWidth (default 3)'
    Type: number
    Description: runway line width
  - Props: 'startingGeoPoint **Required**'
    Type: 'Object `{ lat: number, long: number}`'
    Description: Runway starting coordinates
  - Props: 'endingGeoPoint **Required**'
    Type: 'Object `{ lat: number, long: number}`'
    Description: Runway ending coordinates
  - Props: className
    Type: string
    Description: css class name
  - Props: tooltip
    Type: string | React component
    Description: Tooltip on runway hover
```

## `<RunwayId>`

RunwayId component is the runway's identifications text and pattern indicator.(child of <Runway>) a Runway has two RunwayIds.

### Props

```table
rows:
  - Props: name  **Required**
    Type: string
    Description: runway identifications (ex. 17R)
  - Props: pattern **Required**
    Type: '`right` | `left`'
    Description: pattern indicator for the runway
  - Props: 'className'
    Type: string
    Description: css class name
  - Props: 'textClassName'
    Type: string
    Description: text css class name
  - Props: patternIndicatorClassName
    Type: string
    Description: pattern indicator css class name
  - Props: showPatternIndicator (default true)
    Type: boolean
    Description: show/hide pattern indicator
```
