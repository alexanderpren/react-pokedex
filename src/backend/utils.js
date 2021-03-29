export const getErrorMessage = (e) => {
    let errorString = "Se presentaron los siguientes Errores:";
    let data = [];
  
    if (!e.response) {
      throw e;
    }
  
    Object.keys(e.response.data).map((field) => {
      if (Array.isArray(e.response.data[field])) {
        e.response.data[field].map((message) => {
          data.push({ field: field, message: message });
        });
      } else {
        data.push({ field: field, message: e.response.data[field] });
      }
    });
  
    return {
      message: {
        status: e.response.status,
        message: errorString,
        data: data,
      },
    };
  };