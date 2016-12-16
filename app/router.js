'use strict';

var express = require('express'),
    router = express.Router(),
    Career = require('./career/career');

/**
 *  Allow only xml and json headers
 *  On user routes go to the next route 
 */
function routePermission(req, res, next) {
    var acceptsXml = req.xhr,
        acceptsJSON = (req.headers.accept.indexOf('json') !== -1);

    if (acceptsXml || acceptsJSON) {
        next();
    } else {
        next('route');
    }

}

/**
 *  career api
 */
router.route('/career')
    .get(routePermission, function(req, res) {

        new Career().find(function(career, err) {
            if (err) res.send(err);

            res.json(career);

        });

    });

module.exports = router;
