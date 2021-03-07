'use strict';
let hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Seattle={
  cityName: 'Seattle',
  minCust: 23,
  maxCust: 65,
  AvgCookie: 6.3,
  hours,
  randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
  return randomNumberOfCustomers;
  }
    cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
        return this.cookiesPurchasedPerHour;
}
sattelResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
    console.log this.sattelResults
}
}
////////////////
let Tokyo ={
    cityName: 'Tokyo ',
    minCust: 3,
    maxCust: 24,
    AvgCookie: 1.2,
    hours,
    randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
        return randomNumberOfCustomers;
        }
          cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
              return this.cookiesPurchasedPerHour;
              tokyoResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
                console.log this.tokyoResults;
              }
      }
/* 4*/
let Paris={
    cityName: 'Paris',
    minCust: 20,
    maxCust: 38,
    AvgCookie: 2.3,
    hours,
    randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        return randomNumberOfCustomers;
        }
          cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
              return this.cookiesPurchasedPerHour;
      }
      parisResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
        console.log this.pariseResults;
      }
    }
////////////////
let Dubai={
    cityName: 'Dubai',
    minCust: 11,
    maxCust: 38,
    AvgCookie: 3.7,
    hours,
    randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
        return randomNumberOfCustomers;
        }
          cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
              return this.cookiesPurchasedPerHour;
      }
      dubaiResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
        console.log this.dubaiResults;
      }
    }
///////////////////
let Lima={
    cityName: 'Lima',
    minCust: 2,
    maxCust: 16,
    AvgCookie: 4.6,
    hours,
    randomNumberOfCustomers:function(){Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust
        return randomNumberOfCustomers;
        }
          cookiesPurchasedPerHour :function(){Math.floor(this.AvgCookie* this.randomNumberOfCustomers())
              return this.cookiesPurchasedPerHour;
      }
      limaResults:function(){[this.randomNumberOfCustomers,this.cookiesPurchasedPerHour];
        console.log this.limaResults;
      }
    }
