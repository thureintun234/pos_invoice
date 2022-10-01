const morgan = require("morgan");

morgan.token("body", (req, res) => JSON.stringify(req.body));

function morganOptions(tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens["response-time"](req, res),
    "ms",
    tokens["body"](req, res),
  ].join(" ");
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).send({ error: error.message });
  }

  next(error);
};

module.exports = {
  morganOptions,
  unknownEndpoint,
  errorHandler,
};
