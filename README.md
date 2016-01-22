[![NPM](https://nodei.co/npm/react-liberator.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-liberator)

[![NPM](https://badge.fury.io/js/react-liberator.png)](https://www.npmjs.com/package/react-liberator)

# React Liberator

Enables React component to render its DOM away from its siblings.

This feature is the basis for building a proper windowing system (in any technology).

![Liberator!](http://dankokozar.com/images/react-liberator-1.png)

## :tv: Demo

http://dkozar.github.io/react-liberator/

* Demo 1 - Liberate!
* Demo 2 - Popup
* Demo 3 - Activate / deactivate
* Demo 4 - Maximized popup
* Demo 5 - Full screen sync

## :zap: Usage

```js
// ES6
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Liberator from './Liberator';

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: 'I\'m rendered in an overlay'
        };
    }

    render() {
        return (
            <div>
                <Button>The sibling</Button>
                <Liberator>
                    <div>{this.state.text}</div>
                </Liberator>
            </div>
        );
    }
}

render(<App />, document.body);
```

Or use it as a switch:

```js
<Liberator active={active}>
    <div>Popup</div>
</Liberator>
```

Or render it to a predefined div:

```js
<Liberator layerId={layerId}>
    <div>Popup</div>
</Liberator>
```

## :truck: Installation

### Use it as the NPM package:

```bash
npm install react-liberator --save
```

This will install the package into the *node_modules* folder of your project.

### Or download the project source:

```bash
git clone https://github.com/dkozar/react-liberator.git
cd react-liberator
npm install
```

*npm install* will install all the dependencies (and their dependencies) into the *node_modules* folder.

Then, you should run one of the builds.

### :rocket: Run the hot-loader build (local)

```bash
npm start
open http://localhost:3000
```

This will give you the build that will partially update the browser via *webpack* whenever you save the edited source file.

Additionally, it will keep the React component state *intact*.

For more info on React hot-loader, take a look into [this fantastic video](https://www.youtube.com/watch?v=xsSnOQynTHs).

### :airplane: Run the minified demo build

```bash
npm run demo
```
This should build the *demo* folder. This is how the [demo](http://dkozar.github.io/react-liberator/) is built.

### :helicopter: Run the non-minified demo build

```bash
npm run debug
```
This should build the *demo* folder. Non-minified for easier debugging.

You could install the http-server for running the demo builds:

```bash
npm install http-server
http-server
```

## Thanks to:

:rocket: [React Transform Boilerplate](https://github.com/gaearon/react-transform-boilerplate) for workflow.


![Liberator!](http://dankokozar.com/images/react-liberator-2.png)

![Liberator!](http://dankokozar.com/images/react-liberator-3.png)
