$(() => {


$("#submitBtn").on("click", (event) => {
    event.preventDefault();
    var addBurger = $("#burgerInput").val().trim();
        var newData = {
            burger_name: addBurger,
            devoured: 0
        };
        $.ajax("/api/burgers", {
           type: "POST",
           data:  newData}).then(() => {
            console.log("New burger entry")
            location.reload();
        })
    
});
$("#devour").on("click", () => {
    var id = $(this).data("id");
    var newData = {
        objColVal : { devoured: 1},
    };
    $.ajax(`/burgers/${id}`, {
        type: "PUT",
        data: newData
    }).then(() => {
        console.log("DEVOURED!!!")
        location.reload();
    })
})
})