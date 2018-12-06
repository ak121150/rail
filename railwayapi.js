document.write('Railway Train cancell api ready');
var api='https://api.railwayapi.com/v2/cancelled/date/';
var date='dd';
var key='/apikey/XXXXX/'; ///xxxx is your api key


// Stores the User input data into Url string and Adding the variable 

function store()
    {  var x="";
var data = document.getElementById("dd").value;
var data =data.split("-").reverse().join("-");     //Add this var function if data return s in Wrong format.
var total=api+data+key;


   
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
     {      
           if (this.readyState == 4 && this.status == 200) 
         {
            {
            var myObj = JSON.parse(this.responseText);
            for(i in myObj.trains)
            {    
                 var x=x+myObj.trains[i].number+"  <br> * ";
                     x=x+myObj.trains[i].name+ " ";
            
            }
            
            
            
         
          document.getElementById("name").innerHTML =x ;
          }
     }
            
    }
       
    
    
    
    xmlhttp.open("GET",total,true);
    xmlhttp.send();
    
    }


