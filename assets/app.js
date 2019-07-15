$(document).ready(function() {
    var questions = [
        {
            question: "Steve Rogers, aka Captain America, hails from what part of New York?",
            choice: ["Queens, Brooklyn, Upper East Side, Manhatten"],
            answer: 1,
            photo: "assets/images/captain.jpg"
        },

        {
            question: "What is Black Panther's suit and Captain America's shield made out of?",
            choice: ["Steel, Titanium, Unobtanium, Vibranium"],
            answer: 3,
            photo: "assets/images/panther.jpg"
        },

        {
            question: "What is the name of Thor's Hammer?",
            choice: ["Mjolnir, Stormbreaker, Leviathan, Hammer McHammerson"],
            answer: 0,
            photo: "assets/images/thor.gif"
        },

        {
            question: "Who owes Moon Knight money?",
            choice: ["Thor, Iron Man, Dracula, Hulk"],
            answer: 2,
            photo: "assets/images/moon.jpg"
        },

        {
            question: "Who is the Marvel Chaaracter that has been resurrected the most?",
            choice: ["Jean Grey, Daredevil, Namor, Star Lord"],
            answer: 0,
            photo: "assets/images/jean.jpg"
        },

        {
            question: "On the other hand, who is the one charachter who has never been resurrected?",
            choice: ["Wolverine, Iron Man, Captain America, Uncle Ben"],
            answer: 3,
            photo: "assets/images/ben.jpg"
        },

        {
            question: "Who attacked Red Skull after finding out he was a Nazi?",
            choice: ["Wolverine, Captain America, Magneto, Joker"],
            answer: 3,
            photo: "assets/images/joker.png"
        },

        {
            question: "Who cameo'd as Loki in Thor Ragnarock?",
            choice: ["Ben Affleck, Matt Damon, Jimmy Fallon, Jimmy Kimmel"],
            answer: 1,
            photo:"assets/images/matt.png"
        },

        {
            question: "How long was Loki falling in Dr.Strange's portal?",
            choice: ["10 Mins, 20 Mins, 30 Mins, 4 Years"],
            answer: 2,
            photo:"assets/images/lokiFalling.gif"
        },
        {
            question: "Who is the true Strongest Avenger?",
            choice: ["Hulk, Thor, Captain America, Iron Man"],
            answer: 1,
            photo: "assets/images/point.jpg"
        }];
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 20;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = questions.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];

    $("#reset").hide();
})