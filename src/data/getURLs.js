import config from "../config";
const bcURL =
  "https://gist.githubusercontent.com/justin0022/2bfbe3a4ad08788ec294264b7187cd52/raw/cbcf2e93337bdbbc0585c50546a87cabdd53f2fd/barChartData.json";
const newsURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apikey}`;
export default newsURL;
