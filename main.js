//getElementsByClassName by Jane
var elements = document.getElementsByClassName("list-unstyled components");
var r = [];
for (var i=0; i < elements[0].children.length; i++) {
    var Name = elements[0].children[i].getElementsByClassName("name");
    var Dot =  elements[0].children[i].getElementsByClassName("dot");
    var txtName = ""; var txtDot = "";
    if (typeof Dot[0] !== "undefined") { txtDot = Dot[0].innerHTML; }
    r.push({'Name':Name[0].innerHTML, 'Dot': txtDot});
}
console.log(r);
