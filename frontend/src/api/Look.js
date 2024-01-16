import axios from "axios";

const url = "http://localhost:3003";
//const url = "http://34.49.114.159";
export const getData = async () => {
  const selectedYear = localStorage.getItem("selectedyear");
  console.log('selectedYear',selectedYear)
  let changeyear = +selectedYear
  console.log('test' ,changeyear,typeof(changeyear))
  try {
    console.log("called get-data");
    let response = await axios.get(`${url}/get-data`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};


export const centerVisualization = async () => {
  try {
    console.log("called center Visualization");
    let response = await axios.get(`${url}/get-data-center-visualization`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const salesTrendZoneWise = async () => {
  try {
    console.log("called sales trend zone wise");
    let response = await axios.get(`${url}/get-data-sales-trend-zone-wise`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const totalSales = async () => {
  try {
    console.log("called total Sales");
    let response = await axios.get(`${url}/get-data-total-sales`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};

export const funnelData = async () => {
  try {
    console.log("called Funnel Data");
    let response = await axios.get(`${url}/get-data-funnel`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};

export const funnelEntityData = async () => {
  try {
    console.log("called Funnel Entity Data");
    let response = await axios.get(`${url}/get-data-funnel-entity`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};

export const entityPercentDifference = async () => {
  try {
    console.log("called Entity Percent Data");
    let response = await axios.get(`${url}/get-data-entity-percent-difference`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};

export const drillDown = async () => {
  try {
    console.log("called drill Down Data");
    let response = await axios.get(`${url}/get-data-drill-down`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const productSale = async () => {
  try {
    console.log("called product Sale Data");
    let response = await axios.get(`${url}/get-data-product-sale`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const mahindraMetrics = async () => {
  try {
    console.log("called mahindra metrics Data");
    let response = await axios.get(`${url}/get-data-mahindra-metrics`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const mahindraSalesTrend = async () => {
  try {
    console.log("called mahindra sales trend Data");
    let response = await axios.get(`${url}/get-data-mahindra-sales-trend`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const expenditure = async () => {
  try {
    console.log("called expenditure Data");
    let response = await axios.get(`${url}/get-data-expenditure`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};
export const dealership = async () => {
  try {
    console.log("called dealership Data");
    let response = await axios.get(`${url}/get-data-dealership`);

    return response.data;
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
};