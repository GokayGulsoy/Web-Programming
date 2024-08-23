## Testing Environment
I have used Mozilla FireFox web browser mainly as a web browser 
when testing my implementation but It is working on Chrome as well
with slight shift in "Add to Basket" text inside green button on menu 
page due CSS compatibility difference of these two web browsers.
 
### Running Web site
I have used Ubuntu 22.04 machine terminal with the following commands to run the application:

cd ceng388_hw3_270201072 (changing directory to main app folder)
cd my-app (changing directory to my-app)
npm start (for starting local development seerver)

Then Website should run on our default web browser

### List of Modules Used
1-) "react-router-dom" (for navigation purposes among pages)
I used BrowserRouter,Routes,Route, and Link components provided
by this module
2-) standard "react" module
I used useState hook in provided by "react" module

### Folder structure 
pages => this folder contains menu pages for each menu along with basket page
menu_pictures => this folder contains menu pictures 
extra_pictures => this folder contains footer pictures and basket icon
src => this folder contain components that are used in the Basket page and 
menu pages, also index.css file contains styles used in components

### IMPORTANT NOTE: 
as there is no very strict criteria related to how
get quantities I have randomly generated (either 1 or 2
for the sake of simplicity ) quantities when user clicks 
to add to basket button for chosen menu item and it calculates 
the price according to that quantity and item option.
