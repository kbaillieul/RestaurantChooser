Overview:
This is the first html/css/javascript project I created in the Get Coding program. The purpose of this project is to select a restaurant in the St. John's metro region based on selections for neighbourhood and price point. This project uses the Google Maps API and I have chosen not to include the key in Github for security purposes. The project will not execute without the API key but functions as outlined below.

Outline:
HTML, CSS, and JavaScript were used to create two pages:

1. The Home page contains the Google Maps API and a form the user can use to make selections for neighbourhood and price point. The results are generated using a call to the Google Places Libray.
   ![alt text](https://github.com/kbaillieul/RestaurantChooser/blob/master/Capture.JPG?raw=true)
2. The Menus page contains links to the menus of restaurants featured in this project.
   ![alt text](https://github.com/kbaillieul/RestaurantChooser/blob/master/Capture4.JPG?raw=true)

How it Works:

1. The user will select a neighbourhood (Downtown, City Centre, East End, West End, North End, Mount Pearl, Paradise or CBS), and price point ($, $$, or $$$) then clicks the "Submit" button.
2. The Google Maps API makes a call using the Places Library to return restaurants in the users selected area and price point.
3. Markers are generated to mark restaurants on the map and results are listed in the 'Results' section of the page.
   ![alt text](https://github.com/kbaillieul/RestaurantChooser/blob/master/Capture2.JPG?raw=true)
