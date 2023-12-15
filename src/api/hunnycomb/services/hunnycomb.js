'use strict';

/**
 * hunnycomb service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hunnycomb.hunnycomb');
