$(document).ready(function (){
    $("body").addClass("body-style");
    $("h1").before("<button>New Button</button>")
    $("h1").addClass("body-h1 margin-20");
    
    $("button").html("<strong>Hello World</strong>");
})