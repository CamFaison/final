//a class to set up the data
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eC02,
        cssSensor_TV0C,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eC02 = cssSensor_eC02;
        this.cssSensor_TV0C = cssSensor_TV0C;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magenticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "<td>";
    return msg;
}

var timeRead = data[index].time_seconds;

function updateDisplay(){

    theTime = new Date();
    document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + theTime.getMinutes() + ":" theTime.getSeconds();
        theTime.getHours() + ":"
        + (theTime.getMinutes < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + + ":"
        + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getseconds());

    var timeRead = data[index].time_seconds;

    if(timeRead >= 10){
        document.getElementById("data").rows["seconds"].innerHTML
            dataRow("Time Elapsed", data[index].time_seconds, )
         document.getElementById("data").rows["latitude"].innerHTML
            dataRow("Latitude", data[index].time_seconds, )
         document.getElementById("data").rows["longitude"].innerHTML
            dataRow("Longitude", data[index].time_seconds, )
        document.getElementById("data").rows["gps_altitude"].innerHTML
            dataRow("gps_altitude", data[index].time_seconds, )
         document.getElementById("data").rows["bmp_altitude"].innerHTML
            dataRow("bmp_altitude", data[index].time_seconds, )
        document.getElementById("data").rows["lbmp_pressure"].innerHTML
            dataRow("bmp_pressure", data[index].time_seconds, )
         document.getElementById("data").rows["bmp_temperature"].innerHTML
            dataRow("bmp_temperature", data[index].time_seconds, )
         document.getElementById("data").rows["dig_temperature"].innerHTML
            dataRow("dig_temperature", data[index].time_seconds, )
         document.getElementById("data").rows["css_temperature"].innerHTML
            dataRow("css_temperature", data[index].time_seconds, )
        document.getElementById("data").rows["css_eC02"].innerHTML
            dataRow("css_eC02", data[index].time_seconds, )
         document.getElementById("data").rows["css_TV0C"].innerHTML
            dataRow("css_TV0C", data[index].time_seconds, )
         document.getElementById("data").rows["UV"].innerHTML
            dataRow("UV", data[index].time_seconds, )
         document.getElementById("data").rows["accelX"].innerHTML
            dataRow("accelX", data[index].time_seconds, )
         document.getElementById("data").rows["accelY"].innerHTML
            dataRow("accelY", data[index].time_seconds, )
         document.getElementById("data").rows["accelZ"].innerHTML
            dataRow("accelZ", data[index].time_seconds, )
         document.getElementById("data").rows["magneticX"].innerHTML
            dataRow("magneticX", data[index].time_seconds, )
        document.getElementById("data").rows["magneticY"].innerHTML
            dataRow("magneticY", data[index].time_seconds, )
         document.getElementById("data").rows["magneticZ"].innerHTML
            dataRow("magneticZ", data[index].time_seconds, )
         document.getElementById("data").rows["gyroX"].innerHTML
            dataRow("gyroX", data[index].time_seconds, )
         document.getElementById("data").rows["gyroY"].innerHTML
            dataRow("gyroY", data[index].time_seconds, )
         document.getElementById("data").rows["gyroZ"].innerHTML
            dataRow("gyroZ", data[index].time_seconds, )
    }

    if(index < 500){
        index++;
    } else{
        index = 0;

    }
}