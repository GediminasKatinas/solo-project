
$.get("templatesmaybe/navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});

$.get("templatesmaybe/footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
});
