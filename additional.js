const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World, I made a discovery');
});

app.get('/home', (req, res) => {
   res.send('This is the home page');
});

app.get('/about', (req, res) => {
   res.send('This is the about page');
});

app.get('/contact', (req, res) => {
   res.send('This is the contact page');
});

app.get('/register', (req, res) => {
   res.send('This is the register page');
});

app.get('/login', (req, res) => {
    res.send('This is the login page');
 });

 app.get('/logout', (req, res) => {
    res.send('This is the logout page');
 });


app.get("/api/courses", (req, res) => {
    res.send(JSON.stringify([1, 2, 3]));
});

// Additional route for user_info
app.get('/user_info', (req, res) => {
   // Dummy user data for John Doe
   const user = {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe123",
      email: "johndoe@example.com",
      age: 30
   };
   // Including user information in the response
   const userInfoResponse = {
      message: "User information",
      user: user
   };
   res.json(userInfoResponse);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
