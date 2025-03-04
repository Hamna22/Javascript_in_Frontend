//date

function check(){
    //logic
    const time = new Date();
    console.log(time);
    
    
    let hour = time.getHours()
    console.log(hour);

    let min = time.getMinutes()
    console.log(min);

    let sec =time.getSeconds()
    console.log(sec);

    // let minsec = time.getMilliseconds()

    result.innerHTML = `${hour}:${min}:${sec}`

    setTimeout(()=>{
        check()

    },1000)
    
    
    
    
}


check()