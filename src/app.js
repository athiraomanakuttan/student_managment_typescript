"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var StudentRoutes_1 = require("./routes/StudentRoutes");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
// Middleware
app.use('/api', StudentRoutes_1.default); // Use the imported routes
// Start the server
app.listen(PORT, function () {
    console.log("Server running on port:http://localhost: ".concat(PORT));
});
