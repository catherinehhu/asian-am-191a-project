# ASIAN AM 191A Project WELLness: Community Health Around the Inglewood Oil Field 

## Table of Contents
* [Objective](#objective)
* [Empowerment](#empowerment)
* [Technologies](#technologies)
* [Repurposing](#repurposing)
* [Features](#features)

## Objective
This project’s primary objectives are to help raise awareness among those living near the Inglewood Oil Field about the health effects and prevalence of oil drilling, as well as to empower residents to share their stories, find support in their community, and advocate for the safe and effective closure of oil wells. 

## Empowerment
Our project hopes to act as a platform for people living near neighborhood oil drills to share their health experiences and stories, which may hopefully act as a source of empowerment for communities to stand together against this environmental injustice. Through our map, this provides accessible information for community members around the Inglewood Oil Field about the health effects (and the prevalence of these health effects) due to living near urban oil wells. These community-sourced narratives of health experiences will be clearly visualized on our map for community members to access, contribute to, and use for policy changes and advocacy.

This prototype of our project would serve as a place to aggregate stories and provide a space for even more people to share their stories with a larger audience, especially because those most affected by oil drilling are low-income people of color with limited representation and political power. We hope this will help bring people together and empower them to drive positive change in their communities. 

## Technologies
We used free hosting on GitHub Pages and built this site using vanilla HTML/CSS/JS and Leaflet.JS for mapping. Our data is stored and accessed through Google Sheets. Moreover, to protect the individuals who share their stories with us via our Google Survey, we do not record any personally identifiable information such as phone number, email, or address. To aid in our mapping process, we only ask for zip code, which is general enough to provide respondents with anonymity when filling out our survey. 

## Repurposing
In order for the project that we build to be more accessible and easily maintained (or applied to other community engagement work), we've set up the form and site in a way that can automatically populate the map with new responses, host the site on a free service, and will keep the code public on GitHub so people can help help maintain it. 

In addition, this could also provide people with a framework to use for creating their own sites geared towards supporting their own communities, whether it’s a site oriented towards the health issues of oil drilling or not. Beyond impacting individuals, this site is intended to be utilized as a tool by community organizations to more effectively facilitate change in their fight to end neighborhood oil drilling with the power of community-sourced data. 

## Features
List the ready features here:
- Pop-up
  - Loads upon arriving on the site, providing important context and information for the user before they begin navigating. 
![Example screenshot](./img/screenshot.png)

- Map Functionalities
  - Choropleth map of nearby zip codes, based on proportion of total responses from a given zip code. 
  - Hovering displays of response counts 
  - Clickable zipcodes population of side panel 
![Example screenshot](./img/screenshot.png)

- Map Side Panel 
  - Stories tab: scrollable list of all stories collected from respondents in a selected zip code. 
  - Summary tab: visualizations of aggregated information from respondents in a selected zip code, including demographics breakdown and sentiment overview. 
![Example screenshot](./img/screenshot.png)
