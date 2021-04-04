
$(document).ready(() => {
  $(document).keypress((key) => {
    if (key.which === 13 && $('#user-input').is(':focus')) {
      let input = $('#user-input').val();
      alert(input);
    }
  });
});
