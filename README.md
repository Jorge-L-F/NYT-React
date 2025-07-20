# NYT-Feed
This is a simple application built with HTML, CSS, React and Next.js to retrieve and show a news feed from the [New York Times journal](https://www.nytimes.com/). This is por of an app I previously made with Vue and Node.js, which can be found [here](https://github.com/Jorge-L-F/NYT-Feed).

##### Setup:
- Get a token for the journal's api.
- Replace the `token` string in the `secrets.json.example` file with your api key and rename the file to `secrets.json`.
- Open a terminal in the project directory, run `npm install` to get the dependencies and then run `npm run dev` to start the app.

The application should be functional in all displays from 4 inch screens to 4K monitors. However, the testing and tweaking I could do for resolutions higher than 1080p is quite limited due to hardware constraints.

Note that this application has been tested with Node 22. Ideally it should work with other versions, but may not work with older ones without downgrading the npm packages.
