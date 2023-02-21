const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi= require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [ "./docs/routesDocs/auth.docs.js", "./docs/routesDocs/user.docs.js",
  "./docs/schemas/userModel.schema.js"],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "proyecto de equipo para cuando",
      version: "0.0.9",
      description: "Web de Votaciones",
    },
  },
};
const swaggerSpec = swaggerJSDoc(options);

const swaggerJSDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get("/docs.json", (req, res) => {
    res.setHeader({"Content-Type" : "application/json"});
    res.send(swaggerSpec)
  });
  console.log(`Documentacion disponible ${process.env.URL}:${port}/api/v1/docs`)

}
module.exports = swaggerJSDocs;