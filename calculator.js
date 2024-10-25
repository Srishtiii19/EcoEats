function calculate() {
    // Get user input values
    const wastePerDay = document.getElementById("waste").value;
    const numPeople = document.getElementById("people").value;
    const management = document.getElementById("management").value;
  

    let dailyWaste = wastePerDay;
    if (numPeople > 0) {
      dailyWaste = (50000/365)* numPeople; // Assuming MCAFPD report data (50kg/person/year)
    } 
   
    let emissionFactor = 0.6; // Default for landfill disposal
    if (management === "composting") {
      emissionFactor = 0.0; // Minimal emissions for home composting
    } 
    if (management === "biogas") { 
      emissionFactor = 0.2; // Reduced emissions for biogas capture (example value)
    }
  
    // Calculate CO2 equivalent emissions
    const co2Equivalent = dailyWaste * emissionFactor * 25; // 25 is the methane conversion factor
  
    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your estimated daily CO₂ equivalent emissions from organic waste are: ${co2Equivalent.toFixed(2)} g.`;
  }