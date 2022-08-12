$(document).ready(function () {
  $(
    ".register-form-box input, .register-form-box textarea, #login-form .form-group input"
  ).val("");
  $(
    ".register-form-box .form-group input, .register-form-box .form-group textarea, #login-form .form-group input"
  ).focusout(function () {
    var text_val = $(this).val();
    if (text_val === "") {
      // console.log("empty!");
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });
});

$(window).scroll(function() {
  if ($(".menu-area").length && $(".menu-area").offset().top > 50) {
      $(".menu-sticky").addClass("menu-fixed");
  }
  else {
      $(".menu-sticky").removeClass("menu-fixed");
  }
});
