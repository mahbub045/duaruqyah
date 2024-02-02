const app = require("./app");
const dbConnect = require("./app/dbConnect");
const port = 8080;

dbConnect.sync().then(() => {
  app.listen(port, () => {
    console.log(`Application Listening On Port ${port}`);
  });
});
