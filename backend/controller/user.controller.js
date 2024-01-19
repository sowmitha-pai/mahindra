const UserService = require('../service/user.service');

exports.getData = async (req, res, next) => {
    try {
        console.log('in controller getData==', req.query);
        const year = req.query?.year || null;

        const data = await UserService.getData();
        console.log('getData data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}

exports.centerVisualization = async (req, res, next) => {
    try {
        console.log('in controller centerVisualization==', req.query);
        const year = req.query?.year || null;

        const data = await UserService.centerVisualization();
        console.log('centerVisualization data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.salesTrendZoneWise = async (req, res, next) => {
    try {
        console.log('in controller salesTrendZoneWise==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.salesTrendZoneWise();
        console.log('sales Trend Zone Wise data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.totalSales = async (req, res, next) => {
    try {
        console.log('in controller total Sales==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.totalSales();
        console.log('Total Sales data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.funnelData = async (req, res, next) => {
    try {
        console.log('in controller funnelData==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.funnelData();
        console.log('Funnel data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}

exports.funnelEntityData = async (req, res, next) => {
    try {
        console.log('in controller funnel entity Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.funnelEntityData();
        console.log('Funnel Entity data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}

exports.entityPercentDifference = async (req, res, next) => {
    try {
        console.log('in controller entity percent difference Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.entityPercentDifference();
        console.log('Entity Percent data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}

exports.drillDown = async (req, res, next) => {
    try {
        console.log('in controller drill down Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.drillDown();
        console.log('Drill Down data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.productSale = async (req, res, next) => {
    try {
        console.log('in controller product sale Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.productSale();
        console.log('Product Sale data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.mahindraMetrics = async (req, res, next) => {
    try {
        console.log('in controller mahindra metrics Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.mahindraMetrics();
        console.log('mahindra metrics data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.mahindraSalesTrend = async (req, res, next) => {
    try {
        console.log('in controller mahindra sales trend Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.mahindraSalesTrend();
        console.log('mahindra sales trend data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}

exports.expenditure = async (req, res, next) => {
    try {
        console.log('in controller expenditure Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.expenditure();
        console.log('expenditure data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.dealership = async (req, res, next) => {
    try {
        console.log('in controller dealership Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.dealership();
        console.log('dealership data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.inventoryMetrics = async (req, res, next) => {
    try {
        console.log('in controller inventory Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.inventoryMetrics();
        console.log('inventory data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}
exports.salesMap = async (req, res, next) => {
    try {
        console.log('in controller Map Data==', req.query);
        //const year = req.query?.year || null;

        const data = await UserService.salesMap();
        console.log('sales Map data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}