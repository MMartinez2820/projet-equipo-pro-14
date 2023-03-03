const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi= require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [ 
  "./docs/routesDocs/auth.docs.js", "./docs/routesDocs/user.docs.js",
  "./docs/schemas/userModel.schema.js", "./docs/routesDocs/publicationsTypes.docs.js",
  "./docs/schemas/publicationsTypes.schema.js", "./docs/routesDocs/countries.docs.js",
  "./docs/schemas/countries.schema.js", "./docs/routesDocs/cities.docs.js",
  "./docs/schemas/cities.schema.js", "./docs/routesDocs/states.docs.js",
  "./docs/schemas/states.schema.js", "./docs/routesDocs/roles.docs.js",
  "./docs/schemas/roles.schema.js", "./docs/routesDocs/tags.docs.js",
  "./docs/schemas/tags.schema.js", "./docs/routesDocs/publications.docs.js",
  "./docs/schemas/publications.schema.js", "./docs/schemas/profileModel.schema.js",
],
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

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get("/docs.json", (req, res) => {
    res.setHeader({"Content-Type" : "application/json"});
    res.send(swaggerSpec)
  });
  console.log(`Documentacion disponible ${process.env.URL}:${port}/api/v1/docs`)

}
module.exports = swaggerDocs;