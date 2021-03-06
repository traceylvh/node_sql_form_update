$(document).ready(function() {

    $('#submit-button').on('click', postData);


});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });

}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {
            console.log(data);
            appendDom(data);
        }
    });
}

function appendDom(personData){
  for(var i=0; i < personData.length; i++){
    $('.container').append('<div class="normal"><div>');
    var $el = $('.normal').children().last();
  $el.append('<p>' + personData[i].name + ', ' + personData[i].address + ', ' + personData[i].city
    + ', ' + personData[i].state + ', ' + personData[i].zip_code + '<p>');
  }
}
