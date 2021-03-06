"use strict";

/**
 *  boat controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::boat.boat", ({ strapi }) => ({
  async findOneBySlug(ctx) {
    const { slug } = ctx.params;

    console.log(slug);

    const response = await strapi.db.query("api::boat.boat").findOne({
      where: {
        slug: slug,
      },
    });

    return response;
    // try {
    //   ctx.body = "ok";
    // } catch (err) {
    //   ctx.body = err;
    // }
  },
}));
