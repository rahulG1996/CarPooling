const baseUrl = '';
// import {ToastMessage} from '../components/ToastMessage';

var NoAuthAPI = (apiName, apiMethod, data) => {
  let formBody = new FormData();
  if (data) {
    for (let i in data) {
      formBody.append(i, data[i]);
    }
  }

  // console.warn('body-->', JSON.stringify(formBody, undefined, 2));

  var init =
    apiMethod == 'GET'
      ? {
          method: 'GET',
        }
      : apiMethod == 'POST'
      ? {
          method: apiMethod,
          body: formBody,
        }
      : {
          method: apiMethod,
          headers: {
            Accept: 'application/json',
          },
          body: formBody,
        };
  return fetch(baseUrl + apiName, init)
    .then(response => response.json())
    .then(responseData => {
      // console.warn('fetch', JSON.stringify(responseData, undefined, 2));
      if (responseData.status == 'success') {
        return responseData;
      } else {
        // setTimeout(() => {
        //   ToastMessage(
        //     responseData.response || responseData.Status || responseData.status,
        //   );
        // }, 400);
      }
    })
    .catch(err => {
      //   ToastMessage('Server encounter an error, please try after some time');
      return false;
    });
};

export {NoAuthAPI};
