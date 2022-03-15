# CS178-R-Availability 

## Table of Contents
- [Overview](#overview)
- [Team](#team)
- [Usage](#usage)
- [Diagrams](#diagrams)
- [Dependencies](#dependencies)

## Overview
R'Availability allows any UCR student and faculty to see the occupancy of selected locations at UCR. Through the website, the user is able to see how occupied a given location is. This project uses motion detectors installed at the doors to gather data on room occupancy. 

## Team
- <a href="https://github.com/msalloum" target="_blank"><img src="https://avatars3.githubusercontent.com/u/1790819?s=400&v=4" align="left" height="30px">Mariam Salloum </a>

- <a href = "https://github.com/shubham-batra" target="_blank">Shubham Batra</a>

- <a href = "https://github.com/ruiz-jorge" target="_blank">Jorge Ruiz</a>

- <a href = "https://github.com/tgustafson2" target="_blank">Thomas Gustafson</a>

- <a href = "https://github.com/XiaoFan-UCR-CompEngr" target="_blank">Xiao Fan</a>


## Usage

The website is currently deployed and viewable at https://r-availability.herokuapp.com/

To run the application locally, git clone the current project and cd into the 'reactwebsite' folder. All instances of "https://r-availability.herokuapp.com" need to be changed to "http://localhost:5000". After this, run 'npm install' in the 'reactwebsite' folder and in the root folder to install all of the required dependencies locally. After this, go to the 'reactwebsite' folder and run 'npm run build' and then go to the root to run 'node server.js'. After these steps, the website should open up on localhost:5000.

The website can also be run locally using Heroku. The user would need to first download the Heroku command line from https://devcenter.heroku.com/articles/heroku-cli and after the step of running 'npm run build' in the 'reactwebsite', simply run 'heroku local' in the root and the website should also open up on localhost:5000.

Locally running the application has only been tested on Windows. It is no guarantee it will work as intended for other operating systems.

For the hardware installation of sensors and RaspberryPi by the team are necessary for usage.


<Screenshot of application>
  
## Diagrams
 
![image](https://user-images.githubusercontent.com/19676276/144738029-82062485-f564-4237-9b74-bce7f1173abc.png)

  
## Dependencies
- Frontend:
  - @material-ui/core: v4.12.3
  - @auth0/auth0-react": ^1.9.0
  - @testing-library/jest-dom: v5.14.1
  - @testing-library/react: v11.2.7
  - @testing-library/user-event: v12.8.3
  - bootstrap: v5.1.3
  - react: v17.0.2
  - react-dom: v17.0.2
  - react-router-dom: v5.3.0
  - react-scripts: v4.0.3
  - web-vitals: v1.1.2
  - concurrently: v5.0.0
  - @emotion/styled: ^11.8.1
  - @mui/material: ^5.5.0
  - @material-ui/icons: "^4.11.2
  - react-scroll": ^1.8.6
- Backend:
  - axios: v0.24.0
  - cors: v2.8.5
  - dotenv: v10.0.0
  - express: v4.17.1
  - mongodb: v4.2.0
  - mongoose: v6.2.1
  - nodemon: v2.0.15
- Hardware:
  - Mongocxx v3.6.6
  - Libmongoc v1.17.0
  - C++17
  - CMake v3.2
  - GCC v11.2
  - GPIO v2.52

