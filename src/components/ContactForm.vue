<template>
  <div class="center">
    <h1 id="contact-header">Contact</h1>
    <form id="form" method="POST" action="/">
      <p><input class="contact-info" type="text" name="name" placeholder="name"></p>
      <p><input class="contact-info" type="email" name="email" placeholder="email"></p>
      <p><textarea id="message-box" name="message" rows="6" placeholder="What's going down, Charlie Brown?"></textarea></p>
      <p><button id="submit-button" type="button" @click="submitForm" class="shadow-one">Done</button></p>
      <div id="message-conf" />
    </form>
  </div>
</template>

<script>
export default {
  submitForm() {
    const formValues = $('form').serialize();
    $.post("/", formValues, function(data) {
      if (data === "Message Sent.") { 
        var form = document.getElementById('form');
        form.reset();
        $('form input').prop("disabled", true);
        $('form textarea').prop("disabled", true);
        $('form button').prop("disabled", true);
      };
      $("#message-conf").html(data);       
    })
  }
}
</script>

<style>
</style>
