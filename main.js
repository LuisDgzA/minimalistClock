var diasSemana = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
var meses = ["En", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
function setTime(){ 
    var date = new Date;
    var mes = meses[date.getMonth()];
    var day = diasSemana[date.getDay()];
    var hora = addZero(convertHour(date.getHours()));
    var minutos = addZero(date.getMinutes());
    
    
    var meridiano = date.getHours() < 12 ? "AM" : "PM";
    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML = hora;
    document.getElementById("minute").innerHTML = minutos;
    document.getElementById("meridiano").innerHTML = meridiano;
    document.getElementById("month").innerHTML = mes;
      
    
    setTimeout(setTime, 1000);
}

function addZero(num){
    if(num < 10){
        return "0"+num;
    }else{
        return num;
    }
}

function convertHour(hour){
    if(hour > 12){
        return hour%=12;
    }else if(hour == 0){
        return 12;
    }else{
        return hour;
    }
}



setTime();