function getDayNumber(dateString) {
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; 
    const day = parseInt(parts[2], 10);
  
    const startOfYear = new Date(year, 0, 1);
    const endOfDay = new Date(year, month, day);
  
    const dayNumber = Math.floor((endOfDay - startOfYear) / (24 * 60 * 60 * 1000)) + 1;
    return dayNumber;
  }
  console.log(getDayNumber("2023-01-12")); 
  console.log(getDayNumber("2023-02-26")); 
  