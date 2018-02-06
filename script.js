$(document).ready(function (){
        $(".table").click(function () {
        $("form").toggleClass("show");
        var thisTable = $(this);
        var tableNumber = thisTable.text();
        $(".table-number").text(tableNumber);
        $("#save").click(function () {
            thisTable.removeClass("available");
            thisTable.addClass("reserved");
        });
        $("button").click(function () {
            $("form").removeClass("show");
        });

    });
});




