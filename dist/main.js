const render = new Renderer();

const getRecipes = function () {
    let input = $("input").val()
    $.get(`/recipes/${input}`)
        .then(function (data) {
            render.rendrer(data)
        })
}
