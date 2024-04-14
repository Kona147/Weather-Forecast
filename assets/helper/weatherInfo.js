const airQualityStatus = document.querySelector(".air-quality-status"),
  visibilityStatus = document.querySelector(".visibilty-status"),
  uvText = document.querySelector(".uv-text"),
  humidityStatus = document.querySelector(".humidity-status");
// function to get uv index status
function measureUvIndex(uvIndex) {
  if (uvIndex <= 2) {
    uvText.innerText = "Low";
  } else if (uvIndex <= 5) {
    uvText.innerText = "Moderate";
  } else if (uvIndex <= 7) {
    uvText.innerText = "High";
  } else if (uvIndex <= 10) {
    uvText.innerText = "Very High";
  } else {
    uvText.innerText = "Extreme";
  }
}

// function to get humidity status
function updateHumidityStatus(humidity) {
  if (humidity <= 30) {
    humidityStatus.innerText = "Low";
  } else if (humidity <= 60) {
    humidityStatus.innerText = "Moderate";
  } else {
    humidityStatus.innerText = "High";
  }
}

// function to get visibility status
function updateVisibiltyStatus(visibility) {
  if (visibility <= 0.03) {
    visibilityStatus.innerText = "Dense Fog";
  } else if (visibility <= 0.16) {
    visibilityStatus.innerText = "Moderate Fog";
  } else if (visibility <= 0.35) {
    visibilityStatus.innerText = "Light Fog";
  } else if (visibility <= 1.13) {
    visibilityStatus.innerText = "Very Light Fog";
  } else if (visibility <= 2.16) {
    visibilityStatus.innerText = "Light Mist";
  } else if (visibility <= 5.4) {
    visibilityStatus.innerText = "Very Light Mist";
  } else if (visibility <= 10.8) {
    visibilityStatus.innerText = "Clear Air";
  } else {
    visibilityStatus.innerText = "Very Clear Air";
  }
}

// function to get air quality status
function updateAirQualityStatus(airquality) {
  if (airquality <= 50) {
    airQualityStatus.innerText = "Good👌";
  } else if (airquality <= 100) {
    airQualityStatus.innerText = "Moderate😐";
  } else if (airquality <= 150) {
    airQualityStatus.innerText = "Unhealthy for Sensitive Groups😷";
  } else if (airquality <= 200) {
    airQualityStatus.innerText = "Unhealthy😷";
  } else if (airquality <= 250) {
    airQualityStatus.innerText = "Very Unhealthy😨";
  } else {
    airQualityStatus.innerText = "Hazardous😱";
  }
}

export {
  measureUvIndex,
  updateAirQualityStatus,
  updateHumidityStatus,
  updateVisibiltyStatus,
};
