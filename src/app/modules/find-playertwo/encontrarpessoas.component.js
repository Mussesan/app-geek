function inicial() {
  window.location.href = "/app/Pages/inicial/inicial.component.html";
}
function chat() {
  window.location.href = "/app/Pages/chat/chat.component.html";
}

$(document).ready(function () {
  $("#pocentagemMatch").click(function () {
    $(".to_show").toggle("slow");
  });
});
