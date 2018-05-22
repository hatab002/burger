# Eat-Da-Burger
**This repo includes a full-stack app using mysql as a database, with the help of express and express-handlebars to generate dynamic html.**

## Walkthrough
**Users will be able to add a burger of their own choice and add it to the "Not Devoured" list with the submit button.**

**The user will then be able to move the burger from the "Not Devoured" to the "Devoured" list by pressing the "Devour" button**

##Behind the Scenes

**The submit button fires up a "post" route that adds data to the database.**

**The Devour button sets off a "put" route which will update the database, changing the "devoured" property from false (which is default) to true, thus moving it automatically to the list of devoured burgers**

###Things to install

**After downloading the repo, and from that directory you will need to run : "npm install" to get the dependancies (mysql, express, express-handlebars, body-parser) installed.**

##Running the app
**From the directory that includes the server.js file, you will run node server.js to launch the app**

## Link to the deployed Heroku app:
