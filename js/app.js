'use strict';
let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function Cookies(cityName,minCust,maxCust,AvgCookie){
  this.cityName=cityName;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.AvgCookie=AvgCookie;
  this.allCokiesPerHour=[];
  this.sum=0;
}
let form=document.getElementById('slaes inbout data');
Cookies.prototype.newDataCity=function(){
  form.addEventListener('submit',function(event){
    event.preventDefault();
    this.cityName= event.target.newcity.value;
    this.minCust = event.target.newmin.value;
    this.maxCust = event.target.newmax.value;
    this.AvgCookie = event.target.newavg.value;
    // console.log(this.cityName);
    // console.log(this.maxCust);
  });
};
let Seattle= new Cookies ('Seattle',23,65,6.3);
let Tokyo= new Cookies ('Tokyo',3,24,1.2);
let Paris= new Cookies ('paris',20,38,2.3);
let Dubai= new Cookies ('Dubai',11,38,3.7);
let Lima = new Cookies ('lima',2,16,4.6);
let newLocation=new Cookies (this.cityName,this.minCust,this.maxCust,this.AvgCookie);
Cookies.prototype.allCokiesPerHours =function(){
  for(let i = 0;i<hours.length;i++){
    let randomCus= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    let cookiesPerHour= (Math.floor(this.AvgCookie* randomCus));
    this.allCokiesPerHour.push(cookiesPerHour);
    this.sum= this.sum+cookiesPerHour;
  }
};
let divT=document.getElementById('divTable');
divT.setAttribute('border', '4' ,'solid');
divT.style.color='brown';
divT.style.fontSize='14pt';
divT.style.backgroundColor='white';
Cookies.prototype.renderCityHeader=function(){
  let tableRow1 = document.createElement('tr');
  divT.appendChild(tableRow1);
  let LoctionName= document.createElement('td');
  LoctionName.innerText= 'City Name';
  tableRow1.appendChild(LoctionName);
  for(let j=0;j<hours.length;j++){
    let workingHours = document.createElement('td');
    workingHours.innerText= hours[j];
    tableRow1.appendChild(workingHours);
  }
  let totalWord = document.createElement('td');
  totalWord.innerText='Daily'+'Location'+'Total';
  tableRow1.appendChild(totalWord);
};
Cookies.prototype.renderCityValue=function(){
  this.allCokiesPerHours();
  let tableRow2 = document.createElement('tr');
  divT.appendChild(tableRow2);
  let cell= document.createElement('td');
  cell.innerText= this.cityName;
  tableRow2.appendChild(cell);
  for(let d=0;d<hours.length;d++){
    let cookiesHour = document.createElement('td');
    cookiesHour.innerText=this.allCokiesPerHour[d];
    tableRow2.appendChild(cookiesHour);
  }
  let totalSum = document.createElement('td');
  totalSum.innerText=this.sum;
  tableRow2.appendChild(totalSum);
};
Cookies.prototype.newData=function (){
  this.newDataCity();
  this.allCokiesPerHours();
  this.renderCityValue();
};
Seattle.allCokiesPerHours();
Tokyo.allCokiesPerHours();
Paris.allCokiesPerHours();
Dubai.allCokiesPerHours();
Lima.allCokiesPerHours();
Seattle.renderCityHeader();
Seattle.renderCityValue();
Tokyo.renderCityValue();
Paris.renderCityValue();
Dubai.renderCityValue();
Lima.renderCityValue();
newLocation.newData();
