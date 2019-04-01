/* check for the completed class */
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

/* click to delete To-Do*/
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500,function() {
        $(this).remove();
    });
    event.stopPropagation();
});

/* Add new To-Dos */
$("input[type='text']").keypress(function (event) { 
    if(event.which === 13) {
        //get the input value
        var addTodo = $(this).val();
        // clear the input field
        $(this).val(""); 
        // create a new li and add to the ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + addTodo + "</li>");
    }
});

/* toggle the plus button */
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})