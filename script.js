
const carData = {
  Toyota: {
    Corolla: {
      price: "£18,578-£23,451",
      engine: "1298 cc to 1800 cc",
      fuel: "Petrol/Hybrid",
      mileage:"10 to 17 km/liter",
      transmission: "Automatic & Manual",
      image: "assets/corolla.jpg"
    },
    Yaris: {
      price: "£14,162-£19,644",
      engine: "1329 cc to 1496 cc",
      fuel: "Petrol",
      mileage:"12 to 16 km/liter",
      transmission: "Automatic & Manual",
      image: "assets/yaris.jpg"
    },
    Hilux: {
      price: "£34,721-£48,122",
      engine: "2755 cc",
      fuel: "Diesel",
      mileage:"10 to 13 km/liter",
      transmission: "Automatic & Manual",
      image: "assets/hilux.png"
    },
    Hiace: {
      price: "£39,898-£63,959",
      engine: "2693 cc to 2755 cc",
      fuel: "Diesel & Petrol",
      mileage:"10 to 12 km/liter",
      transmission: "Automatic & Manual",
      image: "assets/hiace.jpg"
    },
    Fortuner: {
      price: "£45,380-£62,436",
      engine: "2694 cc to 2755 cc",
      fuel: "Diesel & Petrol",
      mileage:"8 to 11 km/liter",
      transmission: "Automatic",
      image: "assets/fortuner.png"
    },
    Coaster: {
      price: "£81,624",
      engine: "4009 cc",
      fuel: "Diesel",
      mileage:"7 to 9 km/liter",
      transmission: "Manual",
      image: "assets/coaster.jpg"
    },
    Prado: {
      price: "£167,500-£182,700",
      engine: "2693 cc to 2755 cc",
      fuel: "Diesel & Petrol",
      mileage:"10 to 15 km/liter",
      transmission: "Automatic",
      image: "assets/prado.jpg"
    },
    LandCruiser: {
      price: "£289,000",
      engine: "3345 cc to 3445 cc",
      fuel: "Diesel & Petrol",
      mileage:"10 to 9 km/liter",
      transmission: "Automatic",
      image: "assets/landcruiser.png"
    },
  },

Ford: {
  "Fiesta": {
    price: "£17,000",
    engine: "1.0L EcoBoost Petrol",
    fuel: "Petrol",
    mileage: "19 to 24 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/ford_fiesta.jpg"
  },
  "Focus": {
    price: "£23,000",
    engine: "1.5L EcoBlue Diesel",
    fuel: "Diesel",
    mileage: "18 to 26 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/ford_focus.jpg"
  },
  "Puma": {
    price: "£25,000",
    engine: "1.0L EcoBoost Hybrid",
    fuel: "Petrol/Hybrid",
    mileage: "20 to 25 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/ford_puma.jpg"
  },
  "Kuga": {
    price: "£31,000",
    engine: "2.5L Duratec PHEV",
    fuel: "Petrol/Hybrid",
    mileage: "40 to 60 km/liter (combined)",
    transmission: "Automatic",
    image: "assets/ford_kuga.jpg"
  },
  "Mondeo": {
    price: "£28,000",
    engine: "2.0L Hybrid",
    fuel: "Petrol/Hybrid",
    mileage: "17 to 23 km/liter",
    transmission: "Automatic",
    image: "assets/ford_mondeo.jpg"
  },
  "Mustang": {
    price: "£52,000",
    engine: "5.0L V8",
    fuel: "Petrol",
    mileage: "6 to 10 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/ford_mustang.jpg"
  },
  "Mustang Mach-E": {
    price: "£50,000",
    engine: "Electric Motor 210kW–358kW",
    fuel: "Electric",
    mileage: "370 to 600 km on full charge",
    transmission: "Automatic",
    image: "assets/ford_mach_e.jpg"
  },
  "Ranger": {
    price: "£34,000",
    engine: "2.0L Bi-Turbo Diesel",
    fuel: "Diesel",
    mileage: "10 to 13 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/ford_ranger.jpg"
  },
  "Edge": {
    price: "£38,000",
    engine: "2.0L TDCi Diesel",
    fuel: "Diesel",
    mileage: "14 to 18 km/liter",
    transmission: "Automatic",
    image: "assets/ford_edge.jpg"
  },
  "EcoSport": {
    price: "£21,000",
    engine: "1.0L EcoBoost Petrol",
    fuel: "Petrol",
    mileage: "16 to 21 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/ford_ecosport.jpg"
  }
 },

  BMW: {
    "3 Series": {
      price: "£35,000",
      engine: "2.0L TwinPower Turbo",
      fuel: "Petrol/Diesel",
      mileage:"10  to 16 km/liter",
      transmission: "Automatic",
      image: "assets/bmw3.jpg"
    },
    "5 Series": {
      price: "£45,000",
      engine: "2.0L Hybrid",
      fuel: "Petrol/Hybrid",
      mileage:"19 to 28 km/liter",
      transmission: "Automatic",
      image: "assets/bmw5.jpg"
    },
    "7 Series": {
    price: "£75,000",
    engine: "3.0L TwinPower Turbo",
    fuel: "Petrol/Hybrid",
    mileage:"8 to 13 km/liter",
    transmission: "Automatic",
    image: "assets/bmw7.jpg"
  },
  "X1": {
    price: "£32,000",
    engine: "2.0L TwinPower Turbo",
    fuel: "Petrol",
    mileage:"12 to 22 km/liter",
    transmission: "Automatic & Manual",
    image: "assets/bmwx1.jpg"
  },
  "X3": {
    price: "£42,000",
    engine: "2.0L TwinPower Turbo",
    fuel: "Diesel/Petrol",
    mileage:"20 to 18 km/liter",
    transmission: "Automatic",
    image: "assets/bmwx3.jpg"
  },
  "X5": {
    price: "£65,000",
    engine: "3.0L Hybrid",
    fuel: "Hybrid",
    mileage:"10 to 12 km/liter",
    transmission: "Automatic",
    image: "assets/bmwx5.jpg"
  },
  "i4": {
    price: "£51,000",
    engine: "Electric Motor 250kW",
    fuel: "Electric",
    mileage:"483 to 590 km on full charge",
    transmission: "Automatic",
    image: "assets/bmwi4.jpg"
  },
  "iX": {
    price: "£69,000",
    engine: "Electric Motor 300kW",
    fuel: "Electric",
    mileage:"429 to 626 km on Full Charge", 
    transmission: "Automatic",
    image: "assets/bmwiX.jpg"
  },
  "M3": {
    price: "£70,000",
    engine: "3.0L TwinPower Turbo",
    fuel: "Petrol",
    mileage:"9 to 14 km/liter",
    transmission: "Automatic",
    image: "assets/bmwm3.jpg"
  },
  "M5": {
    price: "£95,000",
    engine: "4.4L V8 TwinPower Turbo",
    fuel: "Hybrid",
    mileage:"19 to 28 km/liter",
    transmission: "Automatic",
    image: "assets/bmwm5.jpg"
  }
  },
  Suzuki: {
  "Swift": {
    price: "£16,000",
    engine: "1.2L Dualjet Hybrid",
    fuel: "Petrol/Hybrid",
    mileage: "21 to 26 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/suzuki_swift.jpg"
  },
  "Baleno": {
    price: "£17,500",
    engine: "1.2L Dualjet Petrol",
    fuel: "Petrol",
    mileage: "19 to 24 km/liter",
    transmission: "Manual",
    image: "assets/suzuki_baleno.jpg"
  },
  "Vitara": {
    price: "£25,000",
    engine: "1.4L Boosterjet Hybrid",
    fuel: "Petrol/Hybrid",
    mileage: "17 to 22 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/suzuki_vitara.jpg"
  },
  "S-Cross": {
    price: "£27,000",
    engine: "1.4L Boosterjet Mild Hybrid",
    fuel: "Petrol/Hybrid",
    mileage: "18 to 23 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/suzuki_scross.jpg"
  },
  "Ignis": {
    price: "£15,500",
    engine: "1.2L Dualjet Hybrid",
    fuel: "Petrol/Hybrid",
    mileage: "22 to 28 km/liter",
    transmission: "Manual / CVT",
    image: "assets/suzuki_ignis.jpg"
  },
  "Jimny": {
    price: "£21,500",
    engine: "1.5L Petrol",
    fuel: "Petrol",
    mileage: "13 to 17 km/liter",
    transmission: "Manual",
    image: "assets/suzuki_jimny.jpg"
  },
  "Alto": {
    price: "£12,500",
    engine: "1.0L Petrol",
    fuel: "Petrol",
    mileage: "22 to 30 km/liter",
    transmission: "Manual",
    image: "assets/suzuki_alto.jpg"
  },
  "Celerio": {
    price: "£13,000",
    engine: "1.0L Petrol",
    fuel: "Petrol",
    mileage: "24 to 32 km/liter",
    transmission: "Manual / AMT",
    image: "assets/suzuki_celerio.jpg"
  },
  "Dzire": {
    price: "£14,500",
    engine: "1.2L Petrol",
    fuel: "Petrol",
    mileage: "22 to 28 km/liter",
    transmission: "Manual / AMT",
    image: "assets/suzuki_dzire.jpg"
  },
  "Ertiga": {
    price: "£19,000",
    engine: "1.5L Petrol",
    fuel: "Petrol/Hybrid",
    mileage: "17 to 21 km/liter",
    transmission: "Manual / Automatic",
    image: "assets/suzuki_ertiga.jpg"
  }
}
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const carSpecs = document.getElementById("car-specs");


function populateBrands() {
  Object.keys(carData).forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });
}


brandSelect.addEventListener("change", function () {
  const selectedBrand = this.value;
  modelSelect.innerHTML = '<option value="">-- Select Model --</option>';
  carSpecs.classList.remove("active");
  carSpecs.innerHTML = "";

  if (selectedBrand) {
    modelSelect.disabled = false;
    const models = Object.keys(carData[selectedBrand]);
    models.forEach(model => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else {
    modelSelect.disabled = true;
  }
});


modelSelect.addEventListener("change", function () {
  const brand = brandSelect.value;
  const model = this.value;

  if (brand && model) {
    const specs = carData[brand][model];
    carSpecs.innerHTML = `
      <img src="${specs.image}" alt="${model}" class="car-image" />
      <h3>${brand} ${model}</h3>
      <p><strong>Price:</strong> ${specs.price}</p>
      <p><strong>Engine:</strong> ${specs.engine}</p>
      <p><strong>Fuel Type:</strong> ${specs.fuel}</p>
      <p><strong>Mileage:</strong> ${specs.mileage}</p>
      <p><strong>Transmission:</strong> ${specs.transmission}</p>
    `;
    carSpecs.classList.add("active");
  } else {
    carSpecs.classList.remove("active");
  }
});

populateBrands();
