This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### How to run scraper.py

1. Navigate to `https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule`
2. For the `Term` options pick only one semester (ie `Fall` not `Fall and Winter`)
3. Pick whichever `Location` you want
4. Go to the department you want (in my case we pick `Computer Science`)
5. You should now be on the first page of course listings. Take the `URL` of this page and set it to `page1`'s value, then do the same for `page2` and so on and so forth.
6. Run `python3 scraper.py` and the new data should be populated in `src/data/data.json`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
