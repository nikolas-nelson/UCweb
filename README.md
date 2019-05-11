# UCweb (www.united-clan.cz)



This project/website was made for my clan in Clash of Clans mobile game that I’m playing for 3 yers. 

The goal for this project was create simple page which will be contain general information about our clan to preset to Clash of clans community or for potential players who want to join our clan. 

Section what the website should have: 

1. Little introduction who we are.
2. Info about recruiting 
3. Our clan rules (can be changed any time)
4. Information how to connect to our Discord 
5. Videos from our YouTube channel (added automatically from our YT channel)
6. Real time information from the game (displays information from the game API)

Because it’s a mobile game the website should be responsive as much as possible and simple to navigate. 

## Design

Design was created in Adobe XD the exported pdf you can find in the design folder in the project. There was made some changes from the first design for better look on mobile phone screens. 

## Technology 

For this project was used Angular 6 for better folder structure and Api connection to end points. 
Node.js was used to bypass CORS policy to fetch data from third party API. 
Bootstrap 4 used to make website responsive across different screens  and speed up styling. 
Ng2 animate on scroll was used for better user experience with interaction of the web page. 
Font Awesome for icons.
SASS for better organisation of css.

## Deployment 

Project was deployed on my Linode server running on Ubuntu 14 using Nginx and Cerbot for SSL. To run node.js I’m using Pm2 and some times needs restart or start again because of some issue/changes with API or server itself. 

## API 

This project using three different API for data.
Firebase DB and API for clan rules. 
YouTube API for videos.
Game API for the clan informations.  

## Testing 

The project was tested in chrome dev tools, in angular cli and AB testing on website. Also was tested by few clan mates from user perceptivity. 

## How to run:

1. Clone project to your computer.
2. Run `npm install` to install npm packages 
3. Run `ng start-proxi` to run project and node.js
4. Open browser with http://localhost:4200/ 

And you should see the webpage. 

## Credits

Angular documentation 

Node documentation 

Bootstrap documentation 

GitHub for animate on scroll 

Stack owerflow

Linode documentation/forum 
