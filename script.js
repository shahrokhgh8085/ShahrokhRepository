var $ = document;
var myinput = $.getElementById("myinput");
var mycolors = $.querySelectorAll("span");
var addText = $.getElementById("add");
var clearText = $.getElementById("clear");
var boxShow = $.getElementById("showvalue");

mycolors.forEach(color => {


    color.addEventListener("click", (event) => {


        switch (event.target.className) {

            case "white":
                myinput.style.backgroundColor = "white";
                break;

            case "red":
                myinput.style.backgroundColor = "red";
                break;

            case "blue":
                myinput.style.backgroundColor = "blue";
                break;

            case "green":
                myinput.style.backgroundColor = "green";
                break;

            case "yellow":
                myinput.style.backgroundColor = "yellow";
                break;

            case "hotpink":
                myinput.style.backgroundColor = "hotpink";
                break;

            case "cyan":
                myinput.style.backgroundColor = "cyan";
                break;

            case "cadetblue":
                myinput.style.backgroundColor = "cadetblue";
                break;

            case "darkorange":
                myinput.style.backgroundColor = "darkorange";
                break;

            case "gold":
                myinput.style.backgroundColor = "gold";
                break;

        }


    });
})


addText.onclick = () => {

    if (myinput.value.length > 1) {
        var mybox = $.createElement("div");
        boxShow.style.display = "flex";
        mybox.style.display = "flex";
        boxShow.style.flexWrap = "wrap";
        mybox.style.width = myinput.length;
        mybox.style.justifyContent = "center";
        mybox.style.cursor = "pointer" ;
        mybox.style.alignItems = "center";
        mybox.style.marginLeft = "0.5rem";
        mybox.style.marginTop = "0.5rem";
        mybox.style.height = "10vh";
        mybox.style.fontSize = "18px";
        mybox.style.padding = "5px";
        mybox.style.border = "1px solid black";
        mybox.style.borderRadius = "10px";
        mybox.append(myinput.value);
        boxShow.append(mybox);
        mybox.style.backgroundColor = myinput.style.backgroundColor;
    }
   

    myinput.value = " ";

   mybox.setAttribute("onclick" , "removefunc(event)");



}







clearText.addEventListener("click", function () {


    myinput.value = " ";


});


function upfunc(event) {

    if (event.keyCode == 13) {
        addText.onclick();
    }

}



function removefunc(event) {

 
    // var rmBox = event.target.parentNode ;

    // rmBox.remove();
    
  let removeBoxes = event.target;
   removeBoxes.remove();
}
