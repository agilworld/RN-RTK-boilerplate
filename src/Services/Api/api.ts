import { create } from "apisauce"
import Config from "../../Config"

// our "constructor"
const apiWrapper = () => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = create({
    // base URL is read from the "constructor"
    baseURL:Config.API_URL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })
  
  return api
}

export default apiWrapper()
