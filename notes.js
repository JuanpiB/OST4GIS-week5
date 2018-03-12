$("#textbox").val('abc123')
console.log($("#textbox").val())
var data= $.ajax($("#text-input1").val());
data.then(function(d){$("#textbox").val(d)})
$("myButton").click(function(e){
  console.log("#text-input1")
})

$("#textbox").val('abc123')
var data= $.ajax("https://github.com/CPLN-692-401/datasets/blob/master/json/philadelphia-solar-installations.json");
data.then(function(d){$("#textbox").val(d)})
$("myButton").click(function(e){
  console.log("#text-input1")
