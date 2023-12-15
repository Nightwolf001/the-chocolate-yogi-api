'use strict';

/**
 * caramel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::caramel.caramel');
