const axios = require("axios").default;
const AxiosAuthentication = require("./axiosAuthenticate.service");
const AxiosWrapper = require('../util/axiosBodyWrapper');
const config = require('../config/index');

exports.getData = async (year = '2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/143`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = { /*"all_data_iter_4.date_year": year*/ };

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};

exports.centerVisualization = async (year = '2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/147`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};
exports.salesTrendZoneWise = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/152`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {/*'all_data_iter_4.company':'Mahindra'*/};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};

exports.totalSales = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/180`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {'all_data_iter_4.company':'Mahindra'};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};
exports.funnelData = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/161`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {/*'all_data_iter_4.company':'Mahindra'*/};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};

exports.funnelEntityData = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/174`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {/*'all_data_iter_4.company':'Mahindra'*/};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};

exports.entityPercentDifference = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/172`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {/*'all_data_iter_4.company':'Mahindra'*/};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};

exports.drillDown = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/177`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {/*'all_data_iter_4.company':'Mahindra'*/};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};

exports.productSale = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/186`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {'all_data_iter_4.company':'Mahindra'};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};
exports.mahindraMetrics = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/163`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {'all_data_iter_4.company':'Mahindra'};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};
exports.mahindraSalesTrend = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/170`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {'all_data_iter_4.company':'Mahindra'};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};
exports.expenditure = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/183`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {'all_data_iter_4.company':'Mahindra'};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};
exports.dealership = async (year='2022') => {
  try {
    const token = await AxiosAuthentication.authenticate();
    if (!token) {
      throw new Error('Token not generated...!');
    }

    const response = await axios.get(`${config.lookerURL}/looks/188`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.status !== 200) {
      return false;
    }

    const query = response.data.query;
    const filters = {};

    const body = AxiosWrapper.createBody("mahindra_afs", query.view, query.fields, filters);
    console.log("Query Body:", body);

    const queryResult = await axios.post(`${config.lookerURL}/queries/run/json`, body, {
      headers: { Authorization: `Bearer ${token}`, },
    });

    if (!queryResult || !queryResult?.data) {
      return false;
    }

    console.log("Query Result:", queryResult.data);
    return queryResult.data;
  } catch (error) {
    console.log("catch error==", error);
    throw error;
  }
};