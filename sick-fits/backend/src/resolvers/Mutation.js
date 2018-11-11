const mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if authenticated

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      },
      info
    });

    return item;
  }
};

module.exports = mutations;
