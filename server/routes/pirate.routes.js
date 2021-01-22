const PirateController = require("../controller/pirate.controller");

module.exports = (app) => {
    // Connection Status
    app.get("/api", PirateController.index);
    
    // Create
    app.post("/api/pirate/new", PirateController.createPirate);

    // Get ALL
    app.get("/api/pirate", PirateController.allPirate);
    
    // Get ONE
    app.get("/api/pirate/:id", PirateController.onePirate);

    // Update ONE
    app.put("/api/pirate/:id", PirateController.UpdatePirate);

    // Delete ONE
    app.delete("/api/pirate/:id", PirateController.deletePirate);
}
