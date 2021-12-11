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

To run the application, clone the current project and open two terminals. Go into the reactwebsite directlry in one terminal and websiteserver directory in another terminal. In the terminal where the reactwebsite directory is open, type 'npm start'. In the terminal where websiteserver directory is open, type 'nodemon server.js'. After this, the website will open up on localhost:3000.

Installation of hardware will currently be executed by team. Team will place sensors and Raspberry Pi in location. Once setup the team will then enter command to run program for motion sensor.

<Screenshot of application>
  
## Diagrams

![image](https://user-images.githubusercontent.com/19676276/145661039-1b65827b-2401-4b71-a79f-557d5321aa7c.png)

  
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
  

