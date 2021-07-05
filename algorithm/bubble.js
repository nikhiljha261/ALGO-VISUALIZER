// for (i = 0; i < n-1; i++)      
//        for (j = 0; j < n-i-1; j++)
//            if (arr[j] > arr[j+1])
//               swap(&arr[j], &arr[j+1]);




function Bubble()
{
    c_delay=0;
    // document.getElementById("about").innerHTML = "BUBBLE SORT";
    // document.getElementById("0").innerHTML="Bubble Sort is the algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order";
    // document.getElementById("1").innerHTML = "WORST CASE TC : O(N^2) "
    // document.getElementById("2").innerHTML = "BEST CASE TC : O(N) "
    // document.getElementById("3").innerHTML = "SC : O(1) "
    // document.getElementById("4").innerHTML = "STABLE : YES "
    // document.getElementById("5").innerHTML = "INPLACE : YES"

    document.getElementById("property").innerHTML = "";
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j],"red");
                div_update(divs[j+1],div_sizes[j+1],"red");


                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                // var x=divs[j].innerHTML;

                div_update(divs[j],div_sizes[j],"red");//height updation
                // divs[j].innerHTML=divs[j+1].innerHTML;
                div_update(divs[j+1],div_sizes[j+1],"red");//height updation
                // divs[j+1].innerHTML=x;
                // console.log(x);

            }
            div_update(divs[j],div_sizes[j],"blue");
        }
        div_update(divs[j],div_sizes[j],"green");
    }
    div_update(divs[0],div_sizes[0],"green");
    unlock();
}