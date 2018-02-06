$(document).ready(function () {
    $(".table").click(function () {
        $("form").toggleClass("show");
        var thisTable = $(this);
        var tableNumber = thisTable.text();
        $(".table-number").text(tableNumber);

    });

    $("button").click(function () {
        $("form").removeClass("show");

    });

    $("#save").click(function () {
        var tableNumber = $(".table-number").text()
        var thisTable = $(".table:contains(" + tableNumber + ")")
        thisTable.removeClass("available");
        thisTable.addClass("reserved");
        thisTable.append("<div class= 'hover'></div>");
        var name = $("#name").val();
        var phone = $("#phone").val();
        var party = $("#party").val();
        $(thisTable).children(".hover").append("<p class= 'name'></p>");
        $(thisTable).children(".hover").append("<p class= 'phone'></p>");
        $(thisTable).children(".hover").append("<p class= 'party'></p>");
        $(thisTable).children(".hover").children(".name").text("Name: " + name);
        $(thisTable).children(".hover").children(".phone").text("Phone Number: " + phone);
        $(thisTable).children(".hover").children(".party").text("Party Size: " + party);
        $("#name").val("");
        $("#phone").val("");
        $("#party").val("");



    });
});




