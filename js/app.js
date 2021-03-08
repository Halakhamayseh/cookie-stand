'use strict';
let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let city={
  Seattle:{
    cityName: 'Seattle',
    minCust: 23,
    maxCust: 65,
    AvgCookie: 6.3,
    hours:[],
  },
  Tokyo:{
    cityName: 'Tokyo ',
    minCust: 3,
    maxCust: 24,
    AvgCookie: 1.2,
    hours: [],
  },
  Paris:{
    cityName: 'Paris',
    minCust: 20,
    maxCust: 38,
    AvgCookie: 2.3,
    hours: [],
  },
  Dubai:{
    cityName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    AvgCookie: 3.7,
    hours: [],
  },
  Lima:{
    cityName: 'Lima',
    minCust: 2,
    maxCust: 16,
    AvgCookie: 4.6,
    hours:[],
  },
  randomNumberOfCustomersAndAvgCookies:function(){
    for(let i = 0;i<hours.length;i++){
      let randomCus= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      let cookiesPerHour= (Math.floor(this.AvgCookie* this.random()));
      cookiesPerHour=cookiesPerHour[i];
      return randomCus+cookiesPerHour;
    }
  },
  limaResults:function(){
    let sum = 0;
    let result = sum + this.cookiesPerHour;
  }
};
let result=[];
let main= document.getElementById('main');
let ul = document.createElement('ul');
hours = document.createElement('li');
result = document.createElement('li');
hours.innertext=city.hours;
result.innertext=city.result;
ul.appendchild(hours);
ul.appendchild(result);

//     for(let i = 0;i<hours.length;i++){
//       randomCus=randomCus[i];
//       cookiesPerHour=cookiesPerHour[i];
// sattelResults:function(){[this.randomCus,this.cookiesPerHour];
//     console.log this.sattelResults;
// ////////////////

//     randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
//         return randomNumberOfCustomers;
//         }
//           cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
//               return this.cookiesPurchasedPerHour;
//               tokyoResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
//                 console.log this.tokyoResults;
//               }
//       }
// /* 4*/

//     randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//         return randomNumberOfCustomers;
//         }
//           cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
//               return this.cookiesPurchasedPerHour;
//       }
//       parisResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
//         console.log this.pariseResults;
//       }
//     }
// ////////////////

//     randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
//         return randomNumberOfCustomers;
//         }
//           cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
//               return this.cookiesPurchasedPerHour;
//       }
//       dubaiResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
//         console.log this.dubaiResults;
//       }
//     }
// ///////////////////

//     randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
//         return randomNumberOfCustomers;
//         }
//           cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
//               return this.cookiesPurchasedPerHour;
//       }
//       limaResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
//         console.log this.limaResults;
//       }
//     }
//     ///////////////////////////////
  
   
   

  
  