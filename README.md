# Cookie Monster Slackbot #

## Develop and deploy the bot on Heroku ##

### Prerequisites: ###

1. Slack team to abuse with cookies
2. Heroku account
3. Heroku CLI

### Create a slack app and bot user ###

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click the "Create New App" button
3. Give your app a name and select a team where the app will be installed
4. Go to "Bots" under "Add features and functionality"
5. Add a bot user, give it a name and remember to switch **off** the "Always Show My Bot as Online" setting
6. Go back to your app's overview page and select "Install your app to your team"
7. Click the "Install your app to your team" button

### Obtain bot user's access token ###

1. Visit your slack app's overview page
2. Go to "Permissions" under "Add features and functionality"
3. Copy the "Bot User OAuth Access Token" token

### Deply the bot on your Heroku server ###

1. Checkout from GitHub repository
2. Navigate to project's folder
3. Create new Heroku app and add it as remote to your local GIT repository ```
heroku create <your-app-name>
```
4. Set the bot user's OAuth access token as environmental variable for your Heroku Node server by running the following command: ```
heroku config:set BOT_AUTH_TOKEN=<access-token-here>
```
5. Deploy the app on Heroku ```
git push heroku master
```
6. You should now see the bot user as online on your Slack channel
