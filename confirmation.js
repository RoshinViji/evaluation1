let flight_id=localStorage.getItem("flightid");
let var1=localStorage.getItem("firstName");
let var2=localStorage.getItem("lastName");
let var3=localStorage.getItem("age");
let var4=localStorage.getItem("a2");
let var5=localStorage.getItem("a1");
let var6=localStorage.getItem("phone");
let var7=sessionStorage.getItem("firstName1");
let var8=sessionStorage.getItem("lastName1");
let var9=sessionStorage.getItem("age1");
let var10=sessionStorage.getItem("gender");
 
flight_id-=1;


console.log(flight_id);





let content='';

function display_value(data)
{
    departure=new Date(data[flight_id].departTime);
    arrival=new Date(data[flight_id].ArrivalTime);

    content +=  `
    
    


        <div class="column">
        
    <div class="info" >
    <h3> Personal Details :</h3
    <h4> Name: ${var1} ${var2}</h4>
    <h4> Age: ${var3} </h4>
    <h4> Gender: ${var4} </h4>
    <h4> Email: ${var5}</h4>
    <h4> PhoneNumber: ${var6} </h4>
    </div>
            <div class="card" >
                <h3> Flight Details: </h3>
                <h4> ${data[flight_id].flightNum}</h4>
                <h4>Origin: <span> ${data[flight_id].origin}</span></h4>
                <h4>Destination: <span> ${data[flight_id].destination}</span></h4>
                <h4>Departure: <span>${departure.toUTCString()} </span></h4>
                <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
                <h4>Price: <span> &#8377;${data[flight_id].price}</h4>
            </div>
            <div style="display:none" id="newPassenger">
            <h3> Next Passenger Details:</h3
          <h4> Name: ${var7} ${var8}</h4>
          <h4> Age: ${var9} </h4>
          <h4> Gender: ${var10} </h4>
          
        </div>
</div>
    
    
    
    


`
document.querySelector("#card-collection").innerHTML = content;

if(var7!=null) {
    document.getElementById('newPassenger').style = "display:true";
}
else{
    document.getElementById('newPassenger').style.display = none;

}

}

fetch('flight.json')
.then(response => response.json())
.then(data => display_value(data));


