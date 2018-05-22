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
$("body").on("click", ".devour", (event) => {
    event.preventDefault();
    var id = $(this).data("id");
    console.log($(this))
    console.log(id)
    var newData = {
        devoured: true
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