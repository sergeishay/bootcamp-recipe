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
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        let recipesJs = response.toString();
        let recipeArrOfObj = JSON.parse(recipesJs);
        let final = recipeArrOfObj.results
        .map(recipe =>
         {return {title : recipe.title , thumbnail : recipe.thumbnail , href:recipe.href , ingredients : recipe.ingredients }} )
        res.send(final)
    })
})


app.listen(3000, function () {
    console.log("3000 is listening")
})

