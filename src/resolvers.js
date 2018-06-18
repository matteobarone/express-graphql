const products = [{
  _id: '12',
  name: 'GraphQL course',
  qty: 1
}, {
  _id: '13',
  name: 'Nodejs course',
  qty: 1
}];

export const resolvers = {
  Query: {
    async allProducts() {
      return products;
    },
    async getProduct(_, {_id}) {
      return await products.find(p => p._id === _id);
    }
  },
};
