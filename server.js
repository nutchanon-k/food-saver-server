require("dotenv").config();
const app = require("./app");


//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


