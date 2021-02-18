webpackJsonp([3],{795:function(n,e,t){var i=t(10),s=t(45),o=t(299).PageRenderer;o.__esModule&&(o=o.default);var r=s({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(799)}},componentWillMount:function(){},render:function(){return i.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,n.exports=r},799:function(n,e){n.exports="## `<Airport>`\n\nAirport component is the container of runways. Must have <Runway> childeren.\n\n### Props\n\n```table\nrows:\n  - Props: width\n    Type: string\n    Description: width applied to the `svg` style\n  - Props: height\n    Type: string\n    Description: height applied to the `svg` style\n  - Props: className\n    Type: string\n    Description: css class name\n  - Props: tooltipClassName\n    Type: string\n    Description: runway tooltip css class name\n  - Props: onClick\n    Type: function\n    Description: onClick event\n```\n\n## `<Runway>`\n\nRunway component is the runway main line.\n\n### Props\n\n```table\nrows:\n  - Props: length\n    Type: number\n    Description: length of runway in feet, it\\'s optional since it\\'s calculated dynamically from the geo points.\n  - Props: 'runwayLineWidth (default 3)'\n    Type: number\n    Description: runway line width\n  - Props: 'startingGeoPoint **Required**'\n    Type: 'Object `{ lat: number, long: number}`'\n    Description: Runway starting coordinates\n  - Props: 'endingGeoPoint **Required**'\n    Type: 'Object `{ lat: number, long: number}`'\n    Description: Runway ending coordinates\n  - Props: className\n    Type: string\n    Description: css class name\n  - Props: tooltip\n    Type: string | React component\n    Description: Tooltip on runway hover\n```\n\n## `<RunwayId>`\n\nRunwayId component is the runway's identifications text and pattern indicator.(child of <Runway>) a Runway has two RunwayIds.\n\n### Props\n\n```table\nrows:\n  - Props: name  **Required**\n    Type: string\n    Description: runway identifications (ex. 17R)\n  - Props: pattern **Required**\n    Type: '`right` | `left`'\n    Description: pattern indicator for the runway\n  - Props: 'className'\n    Type: string\n    Description: css class name\n  - Props: 'textClassName'\n    Type: string\n    Description: text css class name\n  - Props: patternIndicatorClassName\n    Type: string\n    Description: pattern indicator css class name\n  - Props: showPatternIndicator (default true)\n    Type: boolean\n    Description: show/hide pattern indicator\n```\n"}});
//# sourceMappingURL=3.fcbad143.chunk.js.map