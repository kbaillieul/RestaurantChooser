Overview:
This is the first html/css/javascript project I created mostly while on the waitlist to join the Get Coding program and continue to work on as I formally begin the program. The purpose of this project is to select a restaurant in the St. John's metro region based on selections for cuisine type, neighbourhood and price point.

Outline:
HTML, CSS, and JavaScript were used to create the page layout which has three main sections:

1. The first section at the top is a box containing the project title ("St. John's Metro Region Restaurant Chooser").
2. The second section is a box which contains user instuctions on how to use the application.
3. Finally the third section is a box which is split in two. The left side contains a Google Map with conditional markers for each restaurant included in my project using the Google Maps API. Due to privacy/security concerns, I have chosen to exclude my Google Maps API key from my public GitHub repository. The code contained in this repositiory will not load the map portion of my project correctly, but when the valid API key is used it resembles the image below. The right side contains a form which allows the user to select from a drop-down menu for cuisine type, neighbourhood, and price point.

![alt text](https://github.com/kbaillieul/RestaurantChooser/blob/master/Capture.JPG?raw=true)

How it Works:

1. The user will select a cuisine type (Pizza, Mexican, or Sushi), neighbourhood (Downtown, East End, or West End), and price point ($, $$, or $$$) then clicks the "Submit" button.
2. JavaScript is used to loop through 15 different restaurant variables that have their name, cuisine type, neighbourhood, and price point listed in arrays then record the restaurants which meet all the users criteria.
3. A pop-up window will then be displayed to indicate the restaurant(s) that meet the users selected criteria. If no restaurants meet the user's selected criteria, a pop-up window will be displayed to indicate that no restaurants meet their chosen criteria.
   ![alt text](https://github.com/kbaillieul/RestaurantChooser/blob/master/Capture2.JPG?raw=true)
4. Finally, the Google Map will display the location of the restaurant(s) that meet the user's criteria using locational markers.
   ![alt text](https://github.com/kbaillieul/RestaurantChooser/blob/master/Capture3.JPG?raw=true)
