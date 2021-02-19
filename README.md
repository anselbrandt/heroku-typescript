# heroku-typescript

A React TypeScript app served from [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ npx degit https://github.com/anselbrandt/heroku-typescript
$ cd heroku-typescript
$ yarn
$ yarn build
$ yarn start
```

Your app should now be running on [http://localhost:4000](http://localhost:4000/)

### To run in `dev` mode:

```
$ yarn
$ yarn dev
```

And in another terminal window or tab:

```
$ cd web
$ yarn start
```

Your React app will be available at [http://localhost:3000](http://localhost:3000/)  
The API server will be running on [http://localhost:4000/api](http://localhost:4000/api)

## Deploying to Heroku

If you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed:

```
$ heroku create
$ git push heroku master
$ heroku open
```

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using TypeScript on Heroku, see these Dev Center articles:

- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)

## For Better Performance, Deploy the Front End to a Static Host

After deploying the back end, deploy the front end to a static host like, [Vercel](https://vercel.com).

Make note of the URL of your deployed application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/anselbrandt/heroku-typescript)

Select the `/web` subfolder to deploy the React app.

Add the environment variable `REACT_APP_API_URL` with backend URL + `/api` as the value
