# Airport Diagram

Airport runways diagram based on Geo Coordinates 📍 for React.

## Overview

With airport diagram you can create an airport diagram with it's runways completely out of geo coordinates,
each Runway has a starting and ending point, for example _Malpensa_ airport has two runways:

### [`17L/35R`](https://www.google.com/maps?ll=45.63307,8.732697&z=13&t=h&hl=en-US&gl=US&mapclient=apiv3)

- Starting point: `45.650384` `8.727896`
- Ending point: `45.61575` `8.73749722`

```image
src: "/assets/mxp-17l-35r.jpg"
plain: true
title: Malpensa MXP 17L/35R
```

### [`17R/35L`](https://www.google.com/maps?ll=45.628266,8.723501&z=13&t=h&hl=en-US&gl=US&mapclient=apiv3)

- Starting point: `45.64545278` `8.718725`
- Ending point: `45.611074` `8.728277`

```image
src: "/assets/mxp-17r-35l.jpg"
plain: true
title: Malpensa MXP 17R/35L
```

The result is a responsive SVG diagram with those two runways, with true heading (bearing), length, runway identification, and pattern indicator.

```react
showSource: false
noSource: true
plain: true
frame: true
---
<MXP />
```
