# qsMiddleman

    Pushing your Quantified Self data from one place to another.

Simple Node.js app I created to move my Quantified Self data from all their own little silos into one place.

At the moment this is very much focused on Webhook as an endpoint for data, but I'm building it in such a way that it will be easy to add new sources and destinations for your data.

    This is in heavy development at the moment and is not really ready for anyone to use.

If you're wondering about the why and how of this, check out [my site](http://www.greglgomez.me), as it spurred the creation of this lil' tool.

## Installation
```
npm install qsMiddleman --save
```

## Setup
Go into `config.js`, add all your api keys, relevant user/site names, etc.

## Usage
I've created basic Javascript API wrappers for:
- Exist.io
- Zenobase
- Webhook

You can simply require a wrapper for quick access to your data.
```
var exist = require('exist')
exist.today;
```
This will return the users tracked daily counts such as tweets, songs listened to, steps, etc.

```
var webhook = require('webhook');
webhook.build;
```
Will rebuild your remote Webhook site.


## Workflow
This the expected workflow for my specific use-case requirements, the scope will be inclusive once I've handed my final project in. :)
- request data from [exist.io](https://exist.io)/[zenobase](https://zenobase.com/#/), I'm using these services as they already normalise and aggregate my Quantified Self data.
- Pipe the resulting JSON through a transform stream changing keys to what my destination will expect.
- Pipe the data to the Webhook API.

## Wrappers
API methods that I've tackled so far:

### Exist.io
#### [User](https://exist.io/page/api-docs/#users)
Returns an overview of the user's personal details, and their grouped attributes containing current values.

qsMiddleman: `exist.today;`


### Webhook
#### [Build Site](http://www.webhook.com/docs/api-endpoints/#build_site)
This is the endpoint used to trigger a build for a site immediately, there is no data associated with this request, just query string parameters.

qsMiddleman: `webhook.build`

#### [Insert an Item](http://www.webhook.com/docs/api-endpoints/#insert_an_item)
This endpoint can be used to insert data into the database.

qsMiddleman: `webhook.insert`


## TODO
Currently working on:
- Wrapping other methods I need from the current API's listed.
- Adding more templates for the data transforms step.


## License
Haven't set it up yet, but will probably be MIT.


## Contributions
I'm not some code genius, so I welcome any and all input, pull requests, etc.

Of particular use are new connectors/API wrappers, whether as a source or destination.
