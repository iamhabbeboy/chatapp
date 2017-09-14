
$(function() {

  var newscrollHeight = $('#old-chat').height();
  $('#old-chat').animate({
     scrollTop: $('#chat-instant').offset().top
   }, 10);

  $('#send').click(function(e) {
    e.preventDefault();
    var chat_key  = $('#chat-key');
    var chat_text = $('#chat-text');
    var r_id = $('#receiver-id')

    if ( chat_key.val() === '') {
      chat_key.focus();
      return false;
    } else if ( chat_text.val() === '') {
      chat_text.focus();
      return false;
    } else {
      $(this).html('<small><i>loading...</i></small>');
      $.post('/send-chat', 'key='+chat_key.val()+'&text='+chat_text.val() + '&id='+r_id.val(), function(resp) {
        if(resp == 'received') {

          $('#chat-instant').fadeIn('slow')
          $('#now').text(chat_text.val());

          var newscrollHeight = $('#old-chat').height()
          $('#old-chat').animate({
             scrollTop: $('#chat-instant').offset().top
           }, 10);

          chat_text.focus().val('');
          chat_key.val('');
          $('#send').html('Send <i class="fa fa-send"></i>')

        }
      })
     ;
    }
  });

})
