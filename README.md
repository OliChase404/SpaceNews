# Space "News"

The Spaciest news site (with limited actual news).  There are useful features of this application detailed below, but it's main purpose is as a demonstration of React component architecture, client-side routing, fetch calls, and local json database manipulation.  This application is a labor of love created for a React group project by Oli Chase and Wally Pfingsten, both software engineering students at Flatiron School.

## Installation

1. Clone the repository
```
git clone git@github.com:OliChase404/SpaceNews.git
```
2. Change to the project directory
```
cd SpaceNews
```
3. Install the dependencies
```
npm install
```
4. Install 'json-server' globally (if you haven't already)
```
npm install -g json-server
```
5. Run the server
```
npm run server
```
6. Configure API keys --

This application makes use of API keys for NASA and Google Maps.  They must be stored in a `secret.js` file within the `src` directory.  The `secret.js` file should note the API keys as follows:
```
export const nasaApiKey = "YOUR_NASA_API_KEY";
export const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY";
```
Replace YOUR_NASA_API_KEY and YOUR_GOOGLE_MAPS_API_KEY with your actual API keys.

7. Launch the application
```
npm start
```
This should open a new browser window to run the app on http://localhost:3000

Additionally, the server should now be running at port 3001.  You can view the endpoint at http://localhost:3001/posts to view the contents of the database (a collection of forum threads)

## Main Components and Usage

### Home
The Home page contains the Welcome text, along with two child components:
* PictureOfTheDay -- An interesting photo from the NASA API which is updated daily
* PeopleInSpace -- A list of all humans (known to be) in space at this moment -- This is updated in real-time from the NASA API

### Forum
The Forum page is a place for users to post threads about space travel and other space-related topics.  It consists of three child components:
* ThreadList -- A readout on the right side of the page showing all existing forum threads from the `db.json` file
* NewThreadForm -- A form for users to write and submit forum threads to the `db.json` file
* SearchThreads -- A pair of one-field forms allowing users to search and filter the forum threads by title or content, along with a button to clear their search

### ISS Tracker
The ISS Tracker page displays a map of Earth with an icon displaying the current location of the International Space Station in orbit.  This map gets the location coordinates from a public API (see Licenses section below) and automatically updates every 20 seconds.  The map has Google Maps positioning and zooming functionality.

### Mars Gallery
The Mars Gallery page contains three child components, each showing the complete image databases from three of NASA's most successful Mars rovers.  Within each rover's component, users can select the Sol (Martian day) of the mission from a field at the top of the page, and the call to the NASA API will pull in all images taken on that day.  The three rovers are:
* Curiosity
* Opportunity
* Spirit

## Future Functionality and Unused Components
You may notice throughout the components in the Forum folder that there are mentions and props referring to `comment`.  There's even a `Comment` component in that folder.  One of our nice-to-have stretch goals was to allow users to comment on existing threads.  This idea was shelved for MVP, but it's something we may explore in the future.

As of first release (2023.03.31) there is no commenting functionality on this application.

## Contributing

Feel free to fork and clone your own copy of this repository for your own purposes.  This project's creators intend to tweak and improve its functionality in the future.  Comments are welcome, but please do not attempt to alter our source  project's code or repository in any way.

## Licenses

[NASA](https://api.nasa.gov/mars-photos/api/v1/rovers/) (API Key Required for functionality and database viewing)

[WhereTheIssAt](https://api.wheretheiss.at/v1/satellites/25544) (No API Key Required)

[GoogleMaps](https://console.cloud.google.com/google/maps-apis/) (API Key Required for functionality)

[MIT](https://choosealicense.com/licenses/mit/)

This application was created and is owned by Oli Chase of Seattle, WA and Walter Pfingsten of Seattle, WA (2023)