/*
    BACK END REVIEW

    The following file is to conceptually test your ability to understand the back end. Each question will ask you
    to answer the following question. If you need to reference code, please do. After you finish this code, push
    to your Github and send me your link so I can go over your answers.

    When writing purely text answers, you can use comments to write them out.
*/

/*
    Question 1: How does the front end know how to hit a specific endpoint? (One word, two syllables).
*/

// ANSWER BELOW




/*
    Question 2: In what data type/form does the back end receive front end data in?
*/

// ANSWER BELOW




/*
    Question 3: What two parameters does a back end endpoint take? 
*/

// ANSWER BELOW




/*
    Question 4: What are the four endpoint methods?
*/

// ANSWER BELOW




/*
    Question 5: How do I send a response back to the front end? Type out the actual code using a status code of "200" and a string saying "Hello, world".
*/

// ANSWER BELOW




/*
    Question 6: Destructure the following body on the back end.

        let body = {
            firstName: "Jeddy",
            lastName: "Hwang",
            age: 26
        }
*/

// ANSWER BELOW




/*
    Question 7: What is a controller file used for? 
*/

// ANSWER BELOW




/*
    Question 8: Write the basic structure of a controller file with a function called "getUsers". Make "getUsers" send back the array called "users".
*/

// ANSWER BELOW

let users = ["Bob", "Billy", "Bojangles"];




/*
    Question 9: Complete the following GET endpoint by passing in a function called "getMovies". Notice "getMovies" has already been destructured.
*/

// ANSWER BELOW

const {getMovies} = require("controller.js");

app.get("/api/movies", /* CODE HERE */);




/*
    Question 10: What is req and res in an endpoint? Give the word that they're short for, as well as a detailed description of how they work.
*/

// ANSWER BELOW




/*
    Question 11: What is the body? What is included in the body?
*/

// ANSWER BELOW




/*
    Question 12: Complete the following POST endpoint by destructuring "title" and "director" from the body. Create a new object using "title"
    and "director" and push that into the intialized "movies" array.
*/

// ANSWER BELOW

let movies = [];
let gloablId = 0; // Explain what is happening here

app.post("/api/movies", (/* CODE HERE */) => {
    const {/* CODE HERE */} = /* CODE HERE */;

    let newMovie = {
        id: globalId,
        /* CODE HERE */
    };

    globalId++; // Explain what is happening here

    res.status(200).send(/* CODE HERE */);
});




/*
    Question 13: What is a param?
*/

// ANSWER BELOW




/*
    Question 14: How do I grab a param from the front end to use on the back end? 
*/

// ANSWER BELOW




/*
    Question 15: Complete the following DELETE request by destructuring "id" from the front end and removing the associated movie from the "movies" array.
    (hint, use .splice()).
*/

// ANSWER BELOW

const movies = [
    {
        id: 0,
        title: "The Matrix",
        director: "The Wachowski Sisters"
    },
    {
        id: 1,
        title: "Dune",
        director: "Denis Villeneuve"
    },
    {
        id: 2,
        title: "Harry Potter and the Sorcerer's Stone",
        director: "Chris Columbus"
    }
];

app.delete("/api/movies/:id", (req, res) => {
    const {/* CODE HERE */} = req./* CODE HERE */;

    movies./* CODE HERE*/;
    res.status(200).send(movies);
});




/*
    Question 16: Why does the PUT method need a body?
*/

// ANSWER BELOW




/*
    Question 17: Complete the following PUT request by updating "Harry Potter and the Sorcerer's Stone" to whatever is destructured off the body.
    You will have to find a way to grab the id and correlate it to the index of the array (note that the id is a number).
    Using dot notation, set the title appropriately.
*/

// ANSWER BELOW

const movies = [
    {
        id: 0,
        title: "The Matrix",
        director: "The Wachowski Sisters"
    },
    {
        id: 1,
        title: "Dune",
        director: "Denis Villeneuve"
    },
    {
        id: 2,
        title: "Harry Potter and the Sorcerer's Stone",
        director: "Chris Columbus"
    }
];

app.put("/api/movies/:id", (req, res) => {
    const {newMovie} = req.body;
    const {/* CODE HERE */} = req./* CODE HERE */;

    /* CODE HERE */


    res.status(200).send(movies);
});





/*
    Question 18: What is express, and how do we use it in the back end?
*/

// ANSWER HERE




/*
    Question 19: What does app.use(express.json()) do?
*/

// ANSWER HERE




/*
    Question 20: Successfully write 3 more endpoints using POST, PUT, and DELETE. This problem is to be built from scratch, and is totally up to you.
    You may use comments to describe what you're doing (REQUIRED), and if you'd like some inspiration you can use the movies example above, the users example above,
    or anything from previous exercises. Note that you will not be able to run this code, so this question is to test your muscle memory in creating endpoints.
    I have written out the GET request for you. I will be checking the following closely...

        - Endpoint names
        - Method types (POST, PUT, DELETE)
        - Variable name consistency
*/

// ANSWER HERE

let bookList = [
    {
        id: 0,
        title: "To Kill a Mockingbird"
    },
    {
        id: 1,
        title: "1984"
    },
    {
        id: 2,
        title: "Our Mutual Friend"
    },
    {
        id: 3,
        title: "Beloved"
    },
    {
        id: 4,
        title: "This Side of Paradise"
    }
]

app.get("/api/books", (req, res) => {
    res.status(200).send(bookList)
});