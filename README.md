# 🚨 Deprecation notice 🚨
Due to problems getting translations to work properly with Next.js, we are deprecating this code and moving over to the more tersely-named [https://github.com/cds-snc/poc/](https://github.com/cds-snc/nrcan_api/).

The deployed code can still be found at [https://nrcan-poc.now.sh](https://nrcan-poc.now.sh) but as of March 14, 2018, we are not expecting to update it any longer.



## Proof of Concept for the NRCAN API

[![CircleCI](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master.svg?style=svg)](https://circleci.com/gh/cds-snc/nrcan_poc/tree/master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcds-snc%2Fnrcan_poc.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcds-snc%2Fnrcan_poc?ref=badge_shield)

This application returns housing energy efficiency data collected by NRCAN.

It is the first consumer of the groundbreaking [NRCAN API](https://github.com/cds-snc/nrcan_api/); as such, it serves two purposes:
1. it is an interface on top of the API allowing non-developers to query NRCAN data
2. it provides an implementation example for future services that will connect to the API


### Startup

#### Prerequisites

You're going to need `npm` installed globally, and preferably `yarn` as well.

#### Liftoff :rocket:

1. Clone repo
2. Install dependencies with `yarn`
3. Run the app locally with `yarn dev`
4. [http://localhost:3002/](http://localhost:3002/)

Nice! You're now at the bleeding edge of Canadian Government tech. Treat yourself to a congratulatory Timbit.


### Tests

Run the tests with:

```bash
yarn test
yarn lint
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcds-snc%2Fnrcan_poc.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcds-snc%2Fnrcan_poc?ref=badge_large)