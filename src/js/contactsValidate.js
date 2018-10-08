$(function() {
  $('#contact-form').on('click', '.btn-submit', function(e) {
    e.preventDefault();

    console.log(e);

    // var name =  document.getElementById('name').value;
    var name = $('[name="name"]').val();
    if (name == "") {
      $('#status').html("Name cannot be empty");
      return false;
    }
    var email = $('[name="email"]').val();
    if (email == "") {
      $('#status').html("Email cannot be empty");
      return false;
    } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        $('#status').html("Email format invalid");
        return false;
      }
    }
    var phone = $('[name="phone"]').val();
    if (phone == "") {
      $('#status').html("Company cannot be empty");
      return false;
    }
    var company = $('[name="company"]').val();
    if (company == "") {
      $('#status').html("Company cannot be empty");
      return false;
    }
    var message = $('[name="message"]').val();;
    if (message == "") {
      $('#status').html("Message cannot be empty");
      return false;
    }
    $('#status').html("Sending ...");

    var formData = {
      'name': $('input[name=name]').val(),
      'email': $('input[name=email]').val(),
      'phone': $('input[name=phone]').val(),
      'company': $('input[name=company]').val(),
      'message': $('textarea[name=message]').val()
    };

    $.ajax({
      url: "../mail.php",
      type: "POST",
      data: formData,
      success: function(data, textStatus, jqXHR) {
        console.log("success ",data);
        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
          $('#contact-form')
            .closest('form')
            .find("input[type=text], textarea")
            .val("");
        }
      ,
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        $('#status').text(jqXHR);
      }
    });
  });
});
