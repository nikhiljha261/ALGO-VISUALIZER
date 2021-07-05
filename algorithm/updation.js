var speed=1000;
inp_aspeed.addEventListener("input",get_speed);



function get_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);    //time
}

var delay_time=10000/(Math.floor(array_size/10)*speed); 
var c_delay=0;



function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.innerHTML=height;
        // console.log(val);
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}




function unlock()
{
    window.setTimeout(function(){
        for(var i=0;i<buttons.length;i++)
        {
            // butts_algos[i].classList=[];
            // butts_algos[i].classList.add("butt_unselected");
            buttons[i].disabled=false;
        }
        inp_as.disabled=false;
        inp_gen.disabled=false;
        inp_aspeed.disabled=false;
        document.getElementById("about").innerHTML = "CLICK ON THE ABOVE BUTTONS AGAIN TO GET STARTED!!";
        document.getElementById("0").innerHTML="";
        document.getElementById("1").innerHTML = " "
        document.getElementById("2").innerHTML = ""
        document.getElementById("3").innerHTML = ""
        document.getElementById("4").innerHTML = ""
        document.getElementById("5").innerHTML = ""


    },c_delay+=delay_time);
}