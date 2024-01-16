import axios from "axios";


export const queryGenAI = async (query, userConversation, apiData, lastSql, datasetName, jwt) => {
  const data = JSON.stringify({
    "query": query,
    "userConversation": userConversation,
    // "lastApiData": apiData,
    "lastSql": lastSql,
    "datasetName": datasetName
  });

  console.log(query);
  const res = // { data: { result: query } };
    await axios({
      method: 'post',
      // url: `https://mahindra-chart-be-vjqo3gngua-el.a.run.app`,
      url: `https://bigquery-chart-be-vjqo3gngua-el.a.run.app/mahindra-auto`,
      // url: `http://localhost:8000/`,
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
      data: data
    });
  return res;
}

export const getQuestionSuggestions = async (datasetName, jwt) => {
  const data = JSON.stringify({
    "datasetName": datasetName
  });

  const res = // { data: { result: query } };
    await axios({
      method: 'post',
      // url: `https://mahindra-chart-be-vjqo3gngua-el.a.run.app`,
      url: `https://bigquery-chart-be-vjqo3gngua-el.a.run.app/mahindra-auto/suggestion`,
      // url: `http://localhost:8000/suggestion`,
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${jwt}`
      },
      data: data
    });
  return res;
}
