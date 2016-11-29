
















# trump-cabinet-picks

NYT cabinet predictions for Trump admin.




## Installation

```sh
$ npm i trump-cabinet-picks
```









## Example






```js
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

```






## Documentation





### `trumpCabinetPicks(cb)`
Scrapes the NYT page and extracts the relevant information.

#### Params
- **Function** `cb`: An optional callback.

#### Return
- **Promise** A promise object.






## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].



## License
See the [LICENSE][license] file.


[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
