 
function getName() {
    var nam = document.getElementById("na").value;
    return parseInt(nam);
}

function getSize() {
    var si = document.getElementById("pizza").value;
    return parseInt(si);
}

function getToppping(){
    var top = document.getElementById("tp").value;
    return parseInt(top);
}

function getCrust() {
    var c = document.getElementById("cs").value;
    return parseInt(c);
}
function getDelivery() {
    var d = document.getElementById("dv").value;
    return d;
    //alert("The delivery  charge of 2000 will be added to your bill");
}
function calctotalPrice(e) {
    //preventDefault();
    //var totalPrice = (getCrust() + getToppping());
    
       // console.log(totalPrice);
   alert("Hello Your order of  is completed.Your total amount you are requested to pay is." )//
alert("Thank you")
}

