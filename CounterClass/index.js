
    let start = document.getElementById("start")
    let increment = document.getElementById("inc")
    let decrement = document.getElementById("dec")

    let min = "0";
    let sec = "0";
    let count = "0";

    start.addEventListener("click", function(){
        if(start.innerText=="Start"){
            timer = true;
            CounterClass()
            start.innerText = "Stop"
        }
        else if(start.innerText == "Stop"){
            timer = false
            start.innerText = "Start"
        }
        
    })
    increment.addEventListener("click", function(){
        timer = false;
        sec++
        if(sec>=60){
            min++
            sec = 0
        }
        document.getElementById("min").innerText = min
        document.getElementById("sec").innerText = sec

    })
    decrement.addEventListener("click", function(){
        timer = false;
        sec--
        if(sec<=0){
            min--
            sec = 59
        }
        document.getElementById("min").innerText = min
        document.getElementById("sec").innerText = sec
 
    })
    function CounterClass(){
        if (timer){
            count++;
            if (count==100){
                sec++;
                count = 0
            }
            if(sec==60){
                min++
                sec = 0
                
            }
            if (sec>0){
                document.getElementById("sec").innerText = sec
            }
            else if(min>0){
                document.getElementById("min").innerText = min
                document.getElementById("sec").innerText = sec
                document.getElementById("count").innerText = count
            }
           
            setTimeout(CounterClass, 10)
        }
    }
