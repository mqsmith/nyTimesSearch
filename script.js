var apikey = m26NDaGVAdyor4kgdcmxEOhxjlryTF3Q;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userinput + "&api-key=" + apikey;
var userinput = "";
console.log(url);

$.ajax({
    url: queryURL,
    method: "GET"
}) .then(function (response) {
console.log(response);
userinput = "GA Tech";
});






console.log(response);


