$(document).ready(function () {
    var keyword;
    var startYear;
    var endYear;
    var numberArt = 5;
    var articlecounter = 0;
    var apiKey = "m26NDaGVAdyor4kgdcmxEOhxjlryTF3Q";
    var queryURL;
    

    $(document).on("click", "#submitButton", function (event) {
        event.preventDefault();
        console.log("Click");
        keyword = $("#exampleInputPassword1").val();
        startYear = $("#exampleInputEmail1").val();
        endYear = $("#exampleFormControlTextarea1").val();
        console.log(keyword);
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&" + startYear + "0101&" + endYear + "1201&api-key=" + apiKey;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            for (i = 0; i < numberArt; i++) {
                articlecounter++;
                console.log(articlecounter);

            }
        });



    });
});










