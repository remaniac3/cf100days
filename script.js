document.addEventListener("DOMContentLoaded", init);

var artistSlots = [];
const sourceURL = "http://art30days.s3.amazonaws.com/artists.json";

function init() {
    getData();
}

function getData() {
    $.getJSON(sourceURL, { mode: 'no-cors' }, function(data) {
        $.each(data, function(index, value) {
            artistSlots.push(value);
        })
        console.log(artistSlots);
        populateTable();
    })
}

function populateTable() {
    let table = $("#artists-table");

    table.append("<thead><th>Day</th><th>Name</th><th>Email</th></thead>");

    $.each(artistSlots, function(index, x) {
        var artistsListLength = x.artists.length;

        var dayAndDate = "<span class='day'>" + x.day + "</span><br><span class='date'>" + x.date + "</span>";

        let row = $("<tr>");

        if (artistsListLength === 0) {
            row.append($("<td>").html(dayAndDate));
            table.append(row);

        } else if (artistsListLength === 1) {
            row.append($("<td>").html(dayAndDate));
            getArtistDetails(0);
            table.append(row);

        } else if (artistsListLength === 2) {
            row.append($("<td rowspan='2'>").html(dayAndDate));
            getArtistDetails(0);
            table.append(row);
            resetRow();
            getArtistDetails(1);
            table.append(row);

        } else if (artistsListLength === 3) {
            row.append($("<td rowspan='3'>").html(dayAndDate));
            getArtistDetails(0);
            table.append(row);
            resetRow();
            getArtistDetails(1);
            table.append(row);
            resetRow();
            getArtistDetails(2);
            table.append(row);

        } else {
            console.log("ERR - INVALID ARRAY LENGTH");
        }

        function getArtistDetails(index) {
            row.append($("<td>").html(x.artists[index].name));
            row.append($("<td>").html(x.artists[index].email));
        }

        function resetRow() {
            row = $("<tr>");
        }
    });
}