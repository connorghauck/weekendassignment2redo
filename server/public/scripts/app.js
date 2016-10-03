var peoples = [];
var index = 0;
var disp = 'show';


$(function(){
// $('#ajax-people').hide();
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        //console.log(data["people"][0]);

        data.forEach(function(person){
            function appendArray(person){
                peoples[index] = person;
                appendDom(person, index, disp);
                console.log(peoples[index]);
                index++;
                disp = 'hide';
            }
            appendArray(person);
        });
      }
  });
console.log(peoples);



$('#next').click(function () {
    var $next = $('.show').next();

    $('.show').removeClass('show').addClass('hide');

    if ($next.size() == 0) $next = $('.cont_div').first();

    $next.removeClass('hide').addClass('show');

})

$('#prev').click(function () {
    var $prev = $('.show').prev();

    $('.show').removeClass('show').addClass('hide');

    if ($prev.size() == 0) $prev = $('.cont_div').last();

    $prev.removeClass('hide').addClass('show');

})



//testing the button
  // function previous(){
  //     alert("hello");
  // }

  // function next(){
  //     alert("hi");
  // }

  function appendDom(person, index, disp){ //this will take in the person object, aka something that represents a person
      var $personDiv = $('<div class="cont_div ' + disp + '" id="person' + index + '"></div>'); //make an empty div with a class of person to append to the ajax-people

          //we can then reference the person div and append the image to it
          $personDiv.append('<h2>' + person.name + '</h2>');
          $personDiv.append('<p>' + person.githubUserName + '</p>');
          $personDiv.append('<p>' + person.shoutout + '</p>');
      //to append to the dom, yu're gonna wanna check the html for the id that we plan to append to (ajax-people)
      $('#ajax-people').append($personDiv);//leave this empty for now and build up the data elsewhere real quick before you fill the parentheses

  }



});
