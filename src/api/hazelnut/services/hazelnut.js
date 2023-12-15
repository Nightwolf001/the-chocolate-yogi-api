'use strict';

/**
 * hazelnut service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hazelnut.hazelnut');
