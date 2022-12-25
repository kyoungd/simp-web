# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Dataset for strategy subscription technique.
1054473799891955732
6cgxpcV4CzkjFbUYfsOcWcavZimxW0ZC

const a = [
    {
        "id": 1,
        "sequence": 2,
        "title": "ABCD PATTERN (DAY)",
        "subtitle": "August 2, 2022",
        "description": "The ABCD pattern is a highly recognizable value pattern that happens in stocks across the globe every day. \nThe main recognizable feature of an ABCD pattern is that the A to B leg (AB leg) matches the C to D leg (CD leg) — in other words, AB ≈ CD. The B to C leg (BC leg) meanwhile, represents pullbacks and consolidation of value. These patterns can go both ways and can thus be bullish or bearish. Depending on which it is, the investor will either buy or sell at the D point.\nThe ABCD pattern, though varied, is one of the most reliable and established patterns in trading. It can be used for investments in both bearish and bullish trends and gives the information necessary to avoid heavy losses. Although these patterns offer information to the investor, it is still paramount that they do their own research before investing, as markets can be affected by a plethora of external factors.",
        "video": "C9G5KgB9Ze4",
        "summary": "The ABCD pattern is one of the most popular strategies.  It is easy to recognize and implement.  It is common to look for additional confirmation with volume, MACD histogram, level 2 and time of the day.",
        "createdAt": "2022-10-25T22:10:06.336Z",
        "updatedAt": "2022-12-18T03:44:36.513Z",
        "publishedAt": "2022-10-25T22:10:07.970Z",
        "strategy": "ABC-001"
    },
    {
        "id": 2,
        "sequence": 1,
        "title": "FIRST PULLBACK (DAY)",
        "subtitle": "August 1, 2022",
        "description": "Pullback strategies are popular because they are relatively simple to identify and have a solid track record in terms of investor returns.\nTrading pullbacks requires a degree of patience. The price movement is one big giveaway that a pullback is occurring – price falling away from a price peak being the obvious signal. There are other metrics to consider and, as importantly, at what time to step into the market to trade. At the time that price starts to change direction, there is every chance that the move could be more than short-lived.\nIf trading volumes increase at the time of the trade reversal, the move might be more fundamental in nature. If volumes are consistent, then there is more chance that the price move is short term in nature.\nAny price move accompanied by, or triggered by, market events or company news could signal a change in the perception of valuations and that the price move will be greater and longer-lasting.\nIf technical indicators such as trend lines and moving averages offer support to price, then this is an indication that the move is down to buyers temporarily running out of steam. The buyers are there, just at lower price levels. If price crashes through support levels, then this could be a sign that the price change is based on something else.",
        "video": "N9SUmtuGnHQ",
        "summary": "The first pullback of the day is a tried-and-true strategy used by seasoned and novice traders alike. It is the right entry and exit that makes the difference. ",
        "createdAt": "2022-10-25T22:11:31.359Z",
        "updatedAt": "2022-12-18T03:45:37.420Z",
        "publishedAt": "2022-10-25T22:11:32.277Z",
        "strategy": "FPB-001"
    },
];

const b = ["ABC-001"];

Create a react table with light background displaying this data with a selectable checkbox.  Use styled components for css.  Display id, title, summary and popup youtube video referenced by video field.  The value of the checkbox is set with useStrategy key.  Also, update the useStrategy key when checkbox is changed.


create a react checkbox component with css. use styled-components. pass in the link text to display after checkbox.  add onClick event handler for when the link text is clicked.  Add onChange event handler for when checkbox is changed.

### 

To integrate Discord login with your website, you can use the Discord OAuth2 API. Here's a general outline of the steps you will need to follow:

Create a Discord Developer account at https://discord.com/developers/ and create a new application.
In your application's settings, enable the "OAuth2" feature and add a redirect URL for your website. This is the URL that the user will be redirected to after they grant your website access to their Discord account.
On your website, create a link or button that will initiate the login process. The link should use the following format:



Create a react native app using expo.io.  Use clean design with light background.  Use React Native Element for UI. Once activated, a text display screen should show up. It will listen and convert the voice to text (speech to text). Ignore all text until the word "dex". Capture and display all the text on the screen until there is a 2 second pause. Convert the captured phrase to json to format.  { "inquery": "captured-speech" }.  Use axios and HTTP post to upload the json string to the url "https://simp-admin.herokuapp.com/api/gpt3".  It will return a json string back.  You should be able to access the speech data as 'data.attributes.result'.  Display this on this text on the screen. Converts the response to speech (text to speech).  and say it. It will start to listen again and wait for the word "dex" to repeat the process.


Create a General Weekly Schedule calendar in React with light background and styled-components.  CRUD this json string as data.
[
  {
    "id": 1,
    "end": "11:00:00Z",
    "days": [
      1,
      2,
      3,
      4,
      5
    ],
    "start": "09:30:00Z",
    "title": "Class A1",
    "bgColor": "green"
  },
  {
    "id": 2,
    "end": "16:30:00Z",
    "days": [
      1,
      2,
      3,
      4,
      5
    ],
    "start": "15:30:00Z",
    "title": "Class B2",
    "bgColor": "green"
  }
]


import { alpha, styled } from '@mui/material/styles';

const RootStyle = styled('div')({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});

const SimpleBarStyle = styled(SimpleBarReact)(() => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha('#637381', 0.48)
    },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

convert RootStyle and SimpleBarStyle to styled-component.
