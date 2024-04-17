const express = require("express");
const router = express.Router();
const cities = require("../cities.json");
const vehicles = require("../vehicles.json")



router.get("/cities", (req, res) => {
  res.json(cities);
});


router.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

// Route to simulate fugitive's location
router.get("/fugitive", (req, res) => {
  res.json({ location: fugitiveLocation });
});

//capture the fugitive
router.post('/capture', (req, res) => {
    const { selectedCities, selectedVehicles } = req.body;
    const fugitiveLocation = cities[Math.floor(Math.random() * cities.length)]
    let capturingCop = null;
  
    for (const [cop, city] of Object.entries(selectedCities)) {
      const vehicle = selectedVehicles[cop];
      console.log(fugitiveLocation.name, city )
        if(city === fugitiveLocation.name){
            capturingCop = cop
            break
        }

    }
  
    if (capturingCop) {
      res.json({ success: true, capturingCop });
    } else {
      res.json({ success: false });
    }
  });

module.exports = router;
