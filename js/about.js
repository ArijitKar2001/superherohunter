//Get the items, stored in local storage and
var resultId = localStorage.getItem("id");

fetchData();

// Get all the data from Fetch
function fetchData() {
  var Request = new XMLHttpRequest();
  // Fetch the records by particular ID.
  var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?ts=1&apikey=b95f70c57d199e7dc5539edeacd50ab6&hash=dc095909d0f722c3d7a8a77d3ec2ac7c`;
  Request.open("get", url, true);
  Request.send();
  Request.onload = function () {
    var response = JSON.parse(Request.response);

    // getting Id's of element and change its text.
    document.getElementById(
      "my-img"
    ).src = `${response.data.results[0].thumbnail.path}.${response.data.results[0].thumbnail.extension}`;
    document.getElementById("name").innerHTML =
      "<b>Name: </b> " + response.data.results[0].name;
    document.getElementById("id").innerHTML =
      "<b>Hero ID: </b> " + response.data.results[0].id;
    document.getElementById("desc").innerHTML =
      "<b>Description: </b> " + response.data.results[0].description;
    document.getElementById("comic").innerHTML =
      "<b>Comic Available: </b>" + response.data.results[0].comics.available;
    document.getElementById("series").innerHTML =
      "<b>Series Available: </b>" + response.data.results[0].series.available;
    document.getElementById("stories").innerHTML =
      "<b>Stories Available: </b>" + response.data.results[0].stories.available;
    document.getElementById("count").innerHTML =
      "<b>Count: </b>" + response.data.count;
    document.getElementById("modified").innerHTML =
      "<b>Modified: </b>" + response.data.results[0].modified;
    document.getElementById("status").innerHTML =
      "<b>Status: </b>" + response.status;
    document.getElementById("total").innerHTML =
      "<b>Total: </b>" + response.data.total;
    document.getElementById("limit").innerHTML =
      "<b>Limit: </b>" + response.data.limit;
    document.getElementById("offset").innerHTML =
      "<b>Offset: </b>" + response.data.offset;
    document.getElementById("code").innerHTML = "<b>Code: </b>" + response.code;
  };
}
