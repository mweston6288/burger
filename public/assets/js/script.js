$(function(){
    
    // change a burger's status to devoured when the devour button is clicked
    $(".devour-button").on("click", function(event){
        const id = $(this).data("id");

        $.ajax("/api/burgers/"+id, {
            type: "PUT",
        }).then(function(){
            location.reload();
        })
    });

    $(".create-form").on("submit", function(event){

        event.preventDefault();
        const newBurger = {
            burger_name: $("#burgerName").val().trim()
        };
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        })
    })
})