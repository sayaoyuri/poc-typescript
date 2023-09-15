export type Error = {
  name: string;
  message: string;
};

function notFound (subject: string = 'Item') {
  return { 
    name: "NotFound",
    message: `${subject} Not found`
  };
};
function badRequest (message: string = "BAD REQUEST") {
  return { 
    name: "BadRequest",
    message: message
  };
};

const errors = { 
  notFound,
  badRequest
};

export default errors;