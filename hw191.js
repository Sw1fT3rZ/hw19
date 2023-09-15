function getDaysInYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return 366;
    } else {
      return 365;
    }
  }
  
  console.log(getDaysInYear(2021)); 
  console.log(getDaysInYear(2020)); 
  