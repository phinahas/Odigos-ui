export const  getUserTimeZone = ()=>{
    // Check if the browser supports the Intl.DateTimeFormat API
    if (typeof Intl === 'object' && typeof Intl.DateTimeFormat === 'function') {
      // Get the user's time zone from the browser
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      return userTimeZone;
    } else {
      // Fallback: You can use a default time zone if the API is not supported
      // For example, you can use 'UTC' or 'America/New_York' as a fallback
      return 'UTC';
    }
  }

  export const getToken = ()=>{

    let tokenFromLS;
  if(typeof window !== 'undefined'){

     tokenFromLS = localStorage.getItem('tokenOs');
     return tokenFromLS;
  }

  }
  

  