$(function() {
  function buildSendMessageHTML(message){
    image = (message.image === null) ? "" : `<img src="${message.image}" class="lower-message__image">`
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                  </div>
                </div>
                ${image}`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message_data){
      var html = buildSendMessageHTML(message_data);
      $('.messages').append(html)
      $('#new_message')[0].reset()
      $(`.textbox`).val('');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('メッセージの送信に失敗しました');
    })
    .always(function() {
      $('.form__submit').prop('disabled',false);
    })
  })
});
