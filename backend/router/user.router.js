const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/get-data', UserController.getData);
router.get('/get-data-center-visualization', UserController.centerVisualization);
router.get('/get-data-sales-trend-zone-wise',UserController.salesTrendZoneWise);
router.get('/get-data-total-sales',UserController.totalSales);
router.get('/get-data-funnel',UserController.funnelData);
router.get('/get-data-funnel-entity',UserController.funnelEntityData)
router.get('/get-data-entity-percent-difference',UserController.entityPercentDifference);
router.get('/get-data-drill-down',UserController.drillDown);
router.get('/get-data-product-sale',UserController.productSale);
router.get('/get-data-mahindra-metrics',UserController.mahindraMetrics);
router.get('/get-data-mahindra-sales-trend',UserController.mahindraSalesTrend);
router.get('/get-data-expenditure',UserController.expenditure);
router.get('/get-data-dealership',UserController.dealership);
router.get('/get-data-inventory',UserController.inventoryMetrics);
router.get('/get-data-sales-map',UserController.salesMap);
module.exports = router;