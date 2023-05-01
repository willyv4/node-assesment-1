const express = require("express");
const ExpressError = require("./expressError");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/", async function (req, res, next) {
  try {
    const input = req.body.developers;

    if (input.length === 0) {
      throw new ExpressError("No Username(s) provided", 404);
    }

    const developers = await Promise.all(
      input.map(async (devs) => {
        return await axios.get(`https://api.github.com/users/${devs}`);
      })
    );

    const out = developers.map((dev) => ({
      bio: dev.data.bio,
      name: dev.data.name,
    }));

    return res.json(out);
  } catch (error) {
    next(error);
  }
});

app.use((req, res, next) => {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let msg = err.message;

  return res.status(status).json({
    error: { msg, status },
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
