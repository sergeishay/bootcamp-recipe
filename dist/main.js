// const Rendrerer = require(`./Rendrerer`);


const getRecipes = function () {
    let input = $("input").val()
    $.get(`/recipes/${input}`, function (recipes) {
        console.log(recipes)
        let source = $('#recipesTemplate').html();
        let template = Handlebars.compile(source);
        $('.container').empty();
        let newHTML = template({ recipes });
        $('body').append(newHTML);
    })
}
