'use strict';

/**
 * peppermint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::peppermint.peppermint');
