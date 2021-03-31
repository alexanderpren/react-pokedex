export const getErrorMessage = (e) => {
    let errorString = "Se presentaron los siguientes Errores:";
    let data = [];
  
 
  
  
    return {
      message: {
        status: e.response.status,
        message: errorString,
        data: data,
      },
    };
  };