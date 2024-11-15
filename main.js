window.addEventListener('DOMContentLoaded', (e) => {
  getVisitorCount();
})
const myApiLink = process.env.apikey;

const getVisitorCount =() => {
  let count = 0;
fetch(myApiLink , {
  mode: 'cors'
}).then(response => {
  return response.json() }
).then(res => {
const count = res;
document.getElementById('counter').innerHTML = count;
})
return count;
}