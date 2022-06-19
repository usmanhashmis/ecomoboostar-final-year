export const PRICES = 'PRICES'; // ACTION TYPE

const data={
  "currency": "USD",
  "sort": "rank",
  "order": "ascending",
  "offset": 0,
  "limit": 3,
  "meta": true
}

export const cryptoPrices = () => (dispatch) => {
  axios
    .post('https://api.livecoinwatch.com/coins/list', data, {
      headers: {
        'content-Type': 'application/json',
        'x-api-key': 'dc2efdfb-4389-437d-b755-e9e2593897a3',
      },
    })
    .then((res) => {
      dispatch({type :'PRICES',payload:res.data })
    })
    .catch((error) => {
      console.warn(error);
    });
};
