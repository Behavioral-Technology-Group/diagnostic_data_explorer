Views Feedback's diagnostic data in a more human-friendly display.

## Setup

1. Clone this repository.
2. Install dependencies with `npm i`
3. Start the development server with `npm start` to view it at [localhost:3000](http://localhost:3000).

## Development and deployment

To develop, create a branch from master, do your changes and create a pull request. **DO NOT MAKE CHANGES ON MASTER**.

As of now, this repo is linked to Netlify's pipeline. So it will **auto-deploy any changes to master**. It will also create a review app for any pull request that passes the CI tests.

## Usage

As of now, it relies on an id param, which is sent to the parser server. This server can be sleeping, so, at times, it can take a while to load.

`id` param needs to be specified in the query string (ie: `?id=the_id`).
`debug=true` is an optional param to get the raw JSON instead of the view.

### Order and timing

Items are displayed in the reverse order they are recorded (last items are most recent). Due to some technical effects, timestamps can get jumbled up and are **not** the source of truth for sequence.

### Times and timezones

We are still deciding on how to save and present time. By trying to save it _in user's timezone_, one can get mixed results, as both the timezone can change (say, by hard resetting the devide) or because of other factors, such as daylight savings time or travel. This can cause problems with understanding time.

On the other hand, by saving it as absolute times (ie: UTC), we can convert it to any timezone. But, in this case, there is no guarantee that the time will match what happened for the user (ie: user was in EST before performing a hard reset. Then, all info from before is EST and after is UTC).

This is an open-ended question with no perfect solution. Hence, we need input from users about what would be more useful so that we can try to optimize it to that fashion.
