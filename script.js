var keyword = "boeing";
var startYear = 1999;
var endYear = 2019;

var apiKey = "m26NDaGVAdyor4kgdcmxEOhxjlryTF3Q";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&" + startYear + "&" + endYear + "&api-key=" + apiKey;


console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}) .then(function (response) {
console.log(response);

});









