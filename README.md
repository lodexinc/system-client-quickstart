# system-client-quickstart

This is a minimal project to start a client app system.

This app can be debugging with [System Designer](https://system-designer.github.io).

## Installation

```sh
# Clone this repository
$ git clone https://github.com/system-sdk/system-client-quickstart.git
# Go to the repository
$ cd system-client-quickstart
# Install System Runtime
$ npm install
$ bower install
# Run the app
$ grunt start
```

## Developement

* Launch [System Designer](https://system-designer.github.io),
* open the *Configuration* panel,
* select *Client-side* as value for *Type of debugging*,
* set `http://localhost:9001/index.html` as value for *Url of the page to debug*,
* click on the debug button,
* a panel *A system has been found* is shown
* click on *OK*.

The system running in node will be then imported in [System Designer](https://system-designer.github.io).

All your modifications to the current system in [System Designer](https://system-designer.github.io) will be injected into web page. 

## Licence

CC0 1.0 Universal