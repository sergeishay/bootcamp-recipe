class Renderer {
    rendrer(data) {
        let source = $('#recipesTemplate').html();
        let template = Handlebars.compile(source);
        // $('.container').empty();
        let newHTML = template({ data });
        $('body').append(newHTML);
    }
}
