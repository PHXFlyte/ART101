let myCommutes = ["UCSC bus", "E-Bike", "Car", "Walking"];
//array

let myFavouriteCommute = {
    type: "Bike",
    tires: "2",
    color: "black",
    hasMiddleDoor: true,
    speed: ["twenty mph", "ten mph"],

};

//text variable, number variable, text var 2, boolean, array

let megaSentence;   

megaSentence = "<p> My top two paths to campus are: " + myCommutes[0] + ", " + myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " 
+ myFavouriteCommute.type + ", color - " + myFavouriteCommute.color + 
", a max speed of: " + myFavouriteCommute.speed[0] + "</p>";
//whoooooole bunch of appending. so much appending. wait this is just python again ugh i hate python
//oh shit it says to change your examples ugh

$("#output").html(megaSentence);
//puts div=output to display megasentence but. it's not working??? wtf?