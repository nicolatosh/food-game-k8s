const baseUrl = "localhost"
const basePort = "30000"

// This url is the combination of baseUrl + basePort
// but since this app will run on k8s the actual backend url
// will be given 
const apiBaseUrl = "http://172.18.0.2:30003"            
export const environment = {
  production: true,
  apiLogin: apiBaseUrl + "/login",
  apiRegister: apiBaseUrl + "/register",
  apiMatchTypes: apiBaseUrl + "/matchtypes",
  apiPlay: apiBaseUrl + "/play",
  apiGame: apiBaseUrl + "/game",
  apiJoin: apiBaseUrl + "/game/join",
  apiSse: apiBaseUrl + "/sse"
};
