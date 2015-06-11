# qsMiddleman

    Pushing your Quantified Self data from one place to another.

Simple Node.js app I created to move my Quantified Self data from all their own little silos into one place.

At the moment this is very much focused on Webhook as an endpoint for data, but I'll be refactoring the modules in such a way that it will be easy to add new destinations for your data.

    This is in heavy development at the moment and is not really ready for anyone to use.

If you're wondering about the why and how of this, check out [my site](http://www.greglgomez.me), as it spurred the creation of this lil' tool.

## Installation
```
npm install qsMiddleman --save
```

## Setup
Go into `config.js`, add all your api keys, relevant user/site names, etc.

## Usage
`app.js` is set to pull exist.io daily data once a day with other `cron` jobs setup for calls of higher frequency, just drop 'em in, `forever` it and you're good to go.

## TODO
- working on mapping more data from exist.io such as insight and correlation data.
- pulling tweets is almost there, just working on an a lightweight tweet ID store to track new tweets.
- heroku instructions.

## License
[MIT](https://github.com/greglgomez/qsMiddleman/blob/master/LICENSE.md)

## Contributions
I'm not some code genius, so I welcome any and all input, pull requests, etc.

Of particular use are new sources/destinations and their relevant data mappings.

## Acknowledgements
Big thanks to Adam Jaggard for his help refactoring a lot of my messy, scatterbrain code. :)
