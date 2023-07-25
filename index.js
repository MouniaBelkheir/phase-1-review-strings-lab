// Write your code in this file!
const currentUser = 'Grace Hopper';
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";

const excitedWelcomeMessage = welcomeMessage.toLocaleUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!` 

/*
excitedWelcomeMessage
1) contains "WELCOME TO FLATBOOK, "
2) contains the value of the 'currentUser' variable
3) ends with an exclamation point
shortGreeting
4) contains "Welcome, "
5) contains the first initial of the name stored in the 'currentUser' variable
6) ends with an exclamation point */
