const express = require("express");
const path = require("path");
const urllib = require("urllib")
const app = express()



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get("/sanity", function (req, res) {
    res.send("ok")

})




app.get("/recipes/:ingredient", function (req, res) {
    ingredient = req.params.ingredient
    console.log(ingredient)
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        let recipesJs = response.toString();
        let recipeObj = JSON.parse(recipesJs);
        res.send(recipeObj)
    })
})


// GET https://www.googleapis.com/youtube/v3/search






app.listen(8080, function () {
    console.log("8080 is listening")
})

