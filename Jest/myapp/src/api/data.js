// const fetchUserData =
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json,'lll');
//       return json;
//     });
// 




async function fetchUserData() {
    // Perform some asynchronous API call
    // and return the response
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }


export default fetchUserData;
