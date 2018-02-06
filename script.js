$(document).ready(function (){
        $(".table").click(function () {
        $("form").toggleClass("show");
        var thisTable = $(this);
        var tableNumber = thisTable.text();
        $(".table-number").text(tableNumber);
        $("#save").click(function () {
            thisTable.removeClass("available");
            thisTable.addClass("reserved");
            $("form").addClass("hidden");
        });
        $("button").click(function () {
            $("#popup").addClass("hidden");
        });

    });
});




