import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export default async function AllProducts() {
  const products = await getCollectionProducts({
    collection: `everything_category`
  });

  return (
    <>
      {products.length > 0 ? (
        <Grid className="m-2 grid-cols-2 sm:grid-cols-3 lg:m-4 lg:grid-cols-3 xl:m-12 2xl:mx-40">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
