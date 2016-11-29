"use strict";

const trumpCabinetPicks = require("..");

trumpCabinetPicks().then(function (data) {
    console.log(JSON.stringify(data, null, 2));
}).catch(function (e) {
    console.error(e);
});
// {
//   "cabinetPositions": [
//     {
//       "title": "Commerce Secretary",
//       "description": "The Commerce Department ...",
//       "senate_confirmation": "Requires Senate confirmation",
//       "confirmed": false,
//       "predictions": [
//         {
//           "name": "Wilbur Ross",
//           "image": "https://static01.nyt.com/ne...",
//           "description": "Mr. Trump is expected..."
//         }
//       ]
//     },
//     ...
//   ]
// }
