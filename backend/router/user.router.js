const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");

router.get("/get-data", UserController.getData);
router.get(
  "/get-data-center-visualization",
  UserController.centerVisualization
);
router.get(
  "/get-data-sales-trend-zone-wise",
  UserController.salesTrendZoneWise
);
router.get("/get-data-total-sales", UserController.totalSales);
router.get("/get-data-funnel", UserController.funnelData);
router.get("/get-data-funnel-entity", UserController.funnelEntityData);
router.get(
  "/get-data-entity-percent-difference",
  UserController.entityPercentDifference
);
router.get("/get-data-drill-down", UserController.drillDown);

module.exports = router;
