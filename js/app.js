'use strict';
let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle={
  cityName: 'Seattle',
  minCust: 23,
  maxCust: 65,
  AvgCookie: 6.3,
  allCokiesPerHour:[],
  sum:0,
  randomNumberOfCustomersAndAvgCookies:function(){
    for(let i = 0;i<hours.length;i++){
      let randomCus= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      let cookiesPerHour= (Math.floor(this.AvgCookie* randomCus));
      this.allCokiesPerHour.push(cookiesPerHour);
      this.sum= this.sum+cookiesPerHour;
    }
  },
  render:function(){
    this.randomNumberOfCustomersAndAvgCookies();
    let uol=document.getElementById('ul');
    let cityLoction = document.createElement('li');
    cityLoction.innerText=this.cityName;
    uol.appendChild(cityLoction);
    for(let j=0;j<hours.length;j++){
      let workingHours = document.createElement('li');
      workingHours.innerText=hours[j]+': '+this.allCokiesPerHour[j]+'cookies';
      uol.appendChild(workingHours);

    }
    let totalCookies = document.createElement('li');
    totalCookies.innerText='Total: '+this.sum +'cookies';
    uol.appendChild(totalCookies);
  }
};
Seattle.render();
let Tokyo={
  cityName: 'Tokyo ',
  minCust: 3,
  maxCust: 24,
  AvgCookie: 1.2,
  allCokiesPerHour:[],
  sum:0,
  randomNumberOfCustomersAndAvgCookies:function(){
    for(let i = 0;i<hours.length;i++){
      let randomCus= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      let cookiesPerHour= (Math.floor(this.AvgCookie* randomCus));
      this.allCokiesPerHour.push(cookiesPerHour);
      this.sum= this.sum+cookiesPerHour;
    }
  },
  render:function(){
    this.randomNumberOfCustomersAndAvgCookies();
    let uol=document.getElementById('ul');
    let cityLoction = document.createElement('li');
    cityLoction.innerText=this.cityName;
    uol.appendChild(cityLoction);
    for(let j=0;j<hours.length;j++){
      let workingHours = document.createElement('li');
      workingHours.innerText=hours[j]+': '+this.allCokiesPerHour[j]+'cookies';
      uol.appendChild(workingHours);

    }
    let totalCookies = document.createElement('li');
    totalCookies.innerText='Total: '+this.sum +'cookies';
    uol.appendChild(totalCookies);
  }
};
Tokyo.render();
let Paris={
  cityName: 'Paris',
  minCust: 20,
  maxCust: 38,
  AvgCookie: 2.3,
  allCokiesPerHour:[],
  sum:0,
  randomNumberOfCustomersAndAvgCookies:function(){
    for(let i = 0;i<hours.length;i++){
      let randomCus= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      let cookiesPerHour= (Math.floor(this.AvgCookie* randomCus));
      this.allCokiesPerHour.push(cookiesPerHour);
      this.sum= this.sum+cookiesPerHour;
    }
  },
  render:function(){
    this.randomNumberOfCustomersAndAvgCookies();
    let uol=document.getElementById('ul');
    let cityLoction = document.createElement('li');
    cityLoction.innerText=this.cityName;
    uol.appendChild(cityLoction);
    for(let j=0;j<hours.length;j++){
      let workingHours = document.createElement('li');
      workingHours.innerText=hours[j]+': '+this.allCokiesPerHour[j]+'cookies';
      uol.appendChild(workingHours);

    }
    let totalCookies = document.createElement('li');
    totalCookies.innerText='Total: '+this.sum +'cookies';
    uol.appendChild(totalCookies);
  }
};
Paris.render();
let Dubai={
  cityName: 'Dubai',
  minCust: 11,
  maxCust: 38,
  AvgCookie: 3.7,
  allCokiesPerHour:[],
  sum:0,
  randomNumberOfCustomersAndAvgCookies:function(){
    for(let i = 0;i<hours.length;i++){
      let randomCus= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      let cookiesPerHour= (Math.floor(this.AvgCookie* randomCus));
      this.allCokiesPerHour.push(cookiesPerHour);
      this.sum= this.sum+cookiesPerHour;
    }
  },
  render:function(){
    this.randomNumberOfCustomersAndAvgCookies();
    let uol=document.getElementById('ul');
    let cityLoction = document.createElement('li');
    cityLoction.innerText=this.cityName;
    uol.appendChild(cityLoction);
    for(let j=0;j<hours.length;j++){
      let workingHours = document.createElement('li');
      workingHours.innerText=hours[j]+': '+this.allCokiesPerHour[j]+'cookies';
      uol.appendChild(workingHours);

    }
    let totalCookies = document.createElement('li');
    totalCookies.innerText='Total: '+this.sum +'cookies';
    uol.appendChild(totalCookies);
  }
};
Dubai.render();
let Lima={
  cityName: 'Lima',
  minCust: 2,
  maxCust: 16,
  AvgCookie: 4.6,
  allCokiesPerHour:[],
  sum:0,
  randomNumberOfCustomersAndAvgCookies:function(){
    for(let i = 0;i<hours.length;i++){
      let randomCus= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      let cookiesPerHour= (Math.floor(this.AvgCookie* randomCus));
      this.allCokiesPerHour.push(cookiesPerHour);
      this.sum= this.sum+cookiesPerHour;
    }
  },
  render:function(){
    this.randomNumberOfCustomersAndAvgCookies();
    let uol=document.getElementById('ul');
    let cityLoction = document.createElement('li');
    cityLoction.innerText=this.cityName;
    uol.appendChild(cityLoction);
    for(let j=0;j<hours.length;j++){
      let workingHours = document.createElement('li');
      workingHours.innerText=hours[j]+': '+this.allCokiesPerHour[j]+'cookies';
      uol.appendChild(workingHours);

    }
    let totalCookies = document.createElement('li');
    totalCookies.innerText='Total: '+this.sum +'cookies';
    uol.appendChild(totalCookies);
  }
};
Lima.render();
