
$(document).ready(function() {

  $('#more-input-button').on('click', function(){

    $('#name-inputs').append("<input type='text'>");

    $('#name-inputs input:last-child').focus();
  })
});

function validateInputs() {
  $('#name-inputs > input').each(function(){
    if ($(this).val() ===""){
      $(this).removeClass().addClass('alert');
    } else {
      $(this).removeClass().addClass('ok');
    }
  });
}
$('#name-inputs').delegate('input[type="text"]', 'keyup blur', function(){
  validateInputs();
});

$('#submit-button').on('click', function(){
  
})
