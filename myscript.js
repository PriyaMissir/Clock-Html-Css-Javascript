setInterval(()=>{
    d = new Date();
    hours = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    hrot = 30*hours + minute/2;
    mrot = 6*minute
    msec = 6*second

    hour.style.transform =`rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${msec}deg)`;
    
},1000)