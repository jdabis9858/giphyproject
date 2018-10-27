var test = "test";
var APIkey = "NnfcNAAr8hD63EnSOZqxbRbfzw6DEjXI";
//var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + APIkey;



$(document).ready(function () {

    var animals = ["bird","snake","cow"];

    function renderButtons() {
        for (var i = 0; i < animals.length; i++) {
            var aniButton = $("<button class='aniButton1'>");
                aniButton.attr("data-animal", animals[i]);
                aniButton.text(animals[i]);

                $("#buttons").append(aniButton);
        }
    }

    function getGifs(animal) {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=" + APIkey;
        $("#gifs").empty();
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response)
            var gifs = response.data;
            
            for (var i = 0; i < gifs.length; i++) {
                    var animated = gifs[i].images.fixed_height.url;
                    var still = gifs[i].images.fixed_height_still.url;
                    var img = $("<img class='imgs'>");
                        img.attr("src", still);
                            $("#gifs").append(img);
                }
                

            

            });


        
    }

    renderButtons()

        $(document).on("click", ".aniButton1", function(event) {
           var searchTerm = $(this).text();
            
                getGifs(searchTerm)
        });
});