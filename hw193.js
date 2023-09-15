function getQuarters(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) {
      return "Invalid date";
    }
  
    const quarters = [
      "I quarter (Jan - Mar)",
      "II quarter (Apr - Jun)",
      "III quarter (Jul - Sep)",
      "IV quarter (Oct - Dec)"
    ];
  
    const month = date.getMonth();
    return quarters[Math.floor(month / 3)];
  }
  
  const result = getQuarters("2023-02-26");
  console.log(result); 
  