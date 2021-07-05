var inp_as=document.getElementById('a_size');
var inp_aspeed=document.getElementById('a_speed');
var inp_gen=document.getElementById('a_generate');
var cont=document.getElementById("array_container");
var buttons=document.querySelectorAll(".algos button");
var array_size=inp_as.value;
// inp_gen.addEventListener("click",nikhil);
// function nikhil()
// {
//     console.log(inp_as.value);
//     console.log(inp_aspeed.value);
// }


//function calling
inp_gen.addEventListener("click",generate_array);//generate array
inp_as.addEventListener("input",update_array);//changing size of array




//function to update array
function update_array()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=(update_array);//initially a array is generated



//function to call generate array
var div_sizes=[];// we are storing the values of array at particular index
var divs=[];// we are putting the values of array as a child to out html(document);
cont.style="flex-direction:collumn";
var margin_size;
function generate_array()
{
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random()*0.5*(100-inp_as.min))+10;//random value
        divs[i]=document.createElement("div");
        divs[i].innerHTML = div_sizes[i];
        margin_size=0.1;
        cont.append(divs[i]);
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue;  width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}



//function to call a sorting algorithm

var n=buttons.length;
for(var i=0;i<n;i++)
{
    buttons[i].addEventListener("click",sort);
}

function lock()
{
    for(var i=0;i<n;i++)
    {
        // buttons[i].classList=[];
        // buttons[i].classList.add("butt_locked");
        buttons[i].disabled=true;
    }
}

function sort()
{
    inp_as.disabled=true;
    inp_gen.disabled=true;
    inp_aspeed.disabled=true;
    lock();
    // this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort" : Bubble();
                   break;
        case "Merge Sort" : Merge();
                 break;
    }
    
}

