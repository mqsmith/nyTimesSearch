var apiKey = "m26NDaGVAdyor4kgdcmxEOhxjlryTF3Q";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&" + startYear + "&" + endYear + "&api-key=" + apiKey;
var keyword = "";
var startYear
var endYear

console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}) .then(function (response) {
console.log(response);
keyword = "GA Tech";
startYear = 1999;
endYear = 2019;
});









