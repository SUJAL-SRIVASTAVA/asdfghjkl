// server.js
const express = require("express");
const app = express();

// Import routers for different subjects/routes
const os_p1 = require("./subjects/os/p1");
const os_p2 = require("./subjects/os/p2");
const os_p3 = require("./subjects/os/p3");
const os_p4 = require("./subjects/os/p4");
const os_p5 = require("./subjects/os/p5");
const os_p6 = require("./subjects/os/p6");
const os_p7 = require("./subjects/os/p7");
const os_p8 = require("./subjects/os/p8");
const os_p9 = require("./subjects/os/p9");
const os_p10 = require("./subjects/os/p10");
const roundrobin = require("./subjects/os/roundrobin");

const dc_p1 = require("./subjects/dc/p1");
const dc_p2 = require("./subjects/dc/p2");
const dc_p3 = require("./subjects/dc/p3");
const dc_p4 = require("./subjects/dc/p4");
const dc_p5 = require("./subjects/dc/p5");
const dc_p6 = require("./subjects/dc/p6");
const dc_p7 = require("./subjects/dc/p7");
const dc_p8 = require("./subjects/dc/p8");
const dc_p9 = require("./subjects/dc/p9");
const dc_p10 = require("./subjects/dc/p10");

const fswd_p1 = require('./subjects/fswd/p1');
const fswd_p2 = require('./subjects/fswd/p2');
const fswd_p3 = require('./subjects/fswd/p3');
const fswd_p4 = require('./subjects/fswd/p4');
const fswd_p5 = require('./subjects/fswd/p5');
const fswd_p6 = require('./subjects/fswd/p6');
const fswd_p7 = require('./subjects/fswd/p7');
const fswd_p8 = require('./subjects/fswd/p8');
const fswd_p9 = require('./subjects/fswd/p9');
const fswd_p10 = require('./subjects/fswd/p10');
// Mount the routers on the corresponding base paths
app.use("/os/p1", os_p1);
app.use("/os/p2", os_p2);
app.use("/os/p3", os_p3);
app.use("/os/p4", os_p4);
app.use("/os/p5", os_p5);
app.use("/os/p6", os_p6);
app.use("/os/p7", os_p7);
app.use("/os/p8", os_p8);
app.use("/os/p9", os_p9);
app.use("/os/p10", os_p10);
app.use("/os/roundrobin", roundrobin);

app.use("/dc/p1", dc_p1);
app.use("/dc/p2", dc_p2);
app.use("/dc/p3", dc_p3);
app.use("/dc/p4", dc_p4);
app.use("/dc/p5", dc_p5);
app.use("/dc/p6", dc_p6);
app.use("/dc/p7", dc_p7);
app.use("/dc/p8", dc_p8);
app.use("/dc/p9", dc_p9);
app.use("/dc/p10", dc_p10);


app.use("/fwsd/p1", fswd_p1);
app.use("/fswd/p2", fswd_p2);
app.use("/fswd/p3", fswd_p3);
app.use("/fswd/p4", fswd_p4);
app.use("/fswd/p5", fswd_p5);
app.use("/fswd/p6", fswd_p6);
app.use("/fswd/p7", fswd_p7);
app.use("/fswd/p8", fswd_p8);
app.use("/fswd/p9", fswd_p8);
app.use("/fswd/p10", fswd_p10);
// Default route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Express backend!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
