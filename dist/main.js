const getTeam = function () {
    let input = $("input").val()
    $.get(`/teams/${input}`, function (team1) {
        console.log(team1)
        let source = $('#playersTemplate').html();
        let template = Handlebars.compile(source);
        $('.container').empty();
        let newHTML = template({ team1 });
        $('body').append(newHTML);

    })
}
$(".container").on("click" ,".player-card" ,function(){

})