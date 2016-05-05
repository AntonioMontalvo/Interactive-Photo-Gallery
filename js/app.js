/*Lightbox*/

// create the lightbox and its elements
var $lightbox = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption =$("<p></p>");

//append image and caption elements to lightbox and lightbox to body

$lightbox.append($image);
$lightbox.append($caption);
$("body").append($lightbox);


//this function binds the event handler to the click
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var locateImage = $(this).attr("href");//locate the clicked image

    $image.attr("src", locateImage);//specifies "this"  image attribute and value
    $lightbox.show();//shows the lightbox

    var textToImage = $(this).children("img").attr("alt");
    $caption.text(textToImage);
});

//When overlay is clicked
$lightbox.click(function(){
    //Hide the overlay
  $lightbox.hide();
});
