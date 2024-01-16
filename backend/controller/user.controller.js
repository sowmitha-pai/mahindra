const UserService = require("../service/user.service");

exports.getData = async (req, res, next) => {
  try {
    console.log("in controller getData==", req.query);
    const year = req.query?.year || null;

    const data = await UserService.getData();
    console.log("getData data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};

exports.centerVisualization = async (req, res, next) => {
  try {
    console.log("in controller centerVisualization==", req.query);
    const year = req.query?.year || null;

    const data = await UserService.centerVisualization();
    console.log("centerVisualization data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};
exports.salesTrendZoneWise = async (req, res, next) => {
  try {
    console.log("in controller salesTrendZoneWise==", req.query);
    //const year = req.query?.year || null;

    const data = await UserService.salesTrendZoneWise();
    console.log("sales Trend Zone Wise data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};
exports.totalSales = async (req, res, next) => {
  try {
    console.log("in controller total Sales==", req.query);
    //const year = req.query?.year || null;

    const data = await UserService.totalSales();
    console.log("Total Sales data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};
exports.funnelData = async (req, res, next) => {
  try {
    console.log("in controller funnelData==", req.query);
    //const year = req.query?.year || null;

    const data = await UserService.funnelData();
    console.log("Funnel data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};

exports.funnelEntityData = async (req, res, next) => {
  try {
    console.log("in controller funnel entity Data==", req.query);
    //const year = req.query?.year || null;

    const data = await UserService.funnelEntityData();
    console.log("Funnel Entity data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};

exports.entityPercentDifference = async (req, res, next) => {
  try {
    console.log("in controller entity percent difference Data==", req.query);
    //const year = req.query?.year || null;

    const data = await UserService.entityPercentDifference();
    console.log("Entity Percent data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};
exports.drillDown = async (req, res, next) => {
  try {
    console.log("in controller drill down Data==", req.query);
    //const year = req.query?.year || null;

    const data = await UserService.drillDown();
    console.log("drill Down data=", data);
    if (!data) {
      return res.json({ status: false, success: "Something went wrong" });
    }

    res.json({ status: true, success: data });
  } catch (error) {
    next(error);
  }
};
