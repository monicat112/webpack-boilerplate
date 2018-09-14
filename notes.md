# Webpack 

## Importing and exporting

Named export
```javascript
// utilities.js
export const add = (a, b) => a + b

// index.js
import { add } from './utilities'
```

Default export - only one per file
```javascript
// utilities.js
const square = (x) => x * x
export default square

// index.js
import anyName
```

Export everything at the bottom of the page
```javascript
// utilities.js
export { add, square as default }

// index.js
import anyName, { add } from './scream'
```