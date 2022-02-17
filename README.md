# CS178-R-Availability 

## Table of Contents
- [Overview](#overview)
- [Team](#team)
- [Usage](#usage)
- [Diagrams](#diagrams)
- [Dependencies](#dependencies)

## Overview
R'Availability allows any UCR student and faculty to see the occupancy of selected locations at UCR. Through the website, the user is able to see the total occupancy of a given location and how occupied a location is. This project uses motion detectors installed at the doors to gather data on room occupancy.

## Team
- <a href="https://github.com/msalloum" target="_blank"><img src="https://avatars3.githubusercontent.com/u/1790819?s=400&v=4" align="left" height="30px">Mariam Salloum </a>

- <a href = "https://github.com/shubham-batra" target="_blank">Shubham Batra</a>

- <a href = "https://github.com/ruiz-jorge" target="_blank">Jorge Ruiz</a>

- <a href = "https://github.com/tgustafson2" target="_blank">Thomas Gustafson</a>

- <a href = "https://github.com/XiaoFan-UCR-CompEngr" target="_blank">Xiao Fan</a>


## Usage

The website is currently deployed and viewable at https://r-availability.herokuapp.com/

To run the application, git clone the current project and cd into the reactwebsite folder in one terminal and websiteserver folder in another terminal. In the reactwebsite folder, type 'npm start'. In the websiteserver folder, type 'nodemon server.js'. After this, the website will open up on localhost:3000.


<Screenshot of application>
  
## Diagrams
 
![image](https://user-images.githubusercontent.com/19676276/144738029-82062485-f564-4237-9b74-bce7f1173abc.png)

  
## Dependencies
- Frontend:
  - @material-ui/core: v4.12.3
  - @testing-library/jest-dom: v5.14.1
  - @testing-library/react: v11.2.7
  - @testing-library/user-event: v12.8.3
  - axios: v0.24.0
  - bootstrap: v5.1.3
  - react: v17.0.2
  - react-dom: v17.0.2
  - react-router-dom: v5.3.0
  - react-scripts: v4.0.3
  - web-vitals: v1.1.2
- Backend:
  - cors: v2.8.5
  - dotenv: v10.0.0
  - express: v4.17.1
  - mongodb: v4.2.0
  - mongoose: v6.2.1
  - nodemon: v2.0.15
  - concurrently: v5.0.0
  

