const express = require('express');
const axios = require('axios');
const app = express();
const port = 3003;


const authenticate = async () => {
  try {
    const response = await axios.post('https://lookerforniveus.cloud.looker.com/api/4.0/login', null, {
      params: {
        client_id: 'wjfHnSJk4zGb8PBtRrCH',
        client_secret: 'Mv97z3DBrnMnJKMDKN5kjrff'
      }
    });

    if (response.status === 200) {
      const token = response.data.access_token;
      console.log('Access Token:', token);
      return token;
    } else {
      throw new Error(`Authentication failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error during authentication:', error.message);
    throw error;
  }
};

const fetchLook = async (token) => {
  try {
    const response = await axios.get('https://lookerforniveus.cloud.looker.com/api/4.0/looks/143', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      const query = response.data.query;
      const body = {
        model: 'mahindra_afs',
        view: query.view,
        fields: query.fields
        // filters: { <value> }
      };
      console.log('Query Body:', body);
      return body;
    } else {
      throw new Error(`Error fetching Look with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching Look:', error.message);
    throw error;
  }
};

const runQuery = async (token, body) => {
  try {
    const response = await axios.post('https://lookerforniveus.cloud.looker.com/api/4.0/queries/run/json', body, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Query Result:', response.data);
    console.log('Query URL:', response.request.res.responseUrl);
  } catch (error) {
    console.error('Error running query:', error.message);
  }
};

const main = async () => {
  try {
    const token = await authenticate();
    const body = await fetchLook(token);
    await runQuery(token, body);
  } catch (error) {
    console.error('Main function error:', error.message);
  }
};

// Run the main function
main();

app.get('/get-data', async (req, res) => {
  try {
    const token = await authenticate();
    const body = await fetchLook(token);
    const data = await runQuery(token, body);
    res.json(data);
  } catch (error) {
    console.error('Error getting data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
