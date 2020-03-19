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
    // Add a burger from the Add Burger form into the list of uneaten burgers
    $(".create-form").on("submit", function(event){

        event.preventDefault();
        const newBurger = {
            burger_name: $("#burgerName").val().trim()
        };
        // prevent empty strings
        if (newBurger.burger_name === ""){
            return;
        }
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        })
    })
    // Erase all content when "Clear your Plate" is clicked
    $(".delete").on("click", function(event){
        event.preventDefault();
        $.ajax("/api/burgers",{
            type:"DELETE"
        }).then(function(){
            location.reload();
        })
    })
})
