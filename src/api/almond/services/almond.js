'use strict';

/**
 * almond service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::almond.almond');
