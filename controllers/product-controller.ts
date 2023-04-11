import { airtableBase } from '../lib/airtable';
import { products } from '../lib/algolia';
import { IProductResponse } from '../interfaces/product';

export const findProductById = async (query: string) => {
  try {
    const response = await products.getObject<IProductResponse>(query);

    const product = {
      description: response.Description,
      images: response.Images[0].url,
      name: response.Name,
      price: response['Unit cost'],
      type: response.Type,
      id: response.objectID,
    };

    return product;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const findProductByQuery = async (query: string) => {
  try {
    const response = await products.search<IProductResponse>(query);

    const productsFinded = response.hits.map((product) => ({
      description: product.Description,
      images: product.Images[0].url,
      name: product.Name,
      price: product['Unit cost'],
      type: product.Type,
      id: product.objectID,
    }));

    return productsFinded;
  } catch (error: any) {
    console.log(error);
    return {
      error: error.message,
      status: error.status,
    };
  }
};

export const getAllProductsId = async () => {
  const response = await products.search('');

  const productsIds = response.hits.map((product) => ({
    id: product.objectID,
  }));

  return productsIds;
};

export const findProductsWithPagination = async (
  search: string,
  limit: number,
  offset: number
): Promise<any> => {
  const results = await products.search(search, {
    length: limit,
    offset: offset,
  });

  const allProducts = results.hits.map((p: any) => ({
    description: p.Description,
    name: p.Name,
    type: p.Type,
    images: p.Images[0].url,
    price: p['Unit cost'],
    id: p.objectID,
    total: results.nbHits,
  }));

  return allProducts;
};

export const syncAlgoliaWithAirtable = async (limit: any, res: any) => {
  airtableBase('Products')
    .select({
      pageSize: limit,
    })
    .eachPage(
      async function (records, fetchNextPage) {
        const objects = records.map((r) => {
          return {
            objectID: r.id,
            ...r.fields,
          };
        });
        await products.saveObjects(objects);
        fetchNextPage();
      },

      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        console.log("It's done");
        res.status(200).send({ error: null, message: 'Database updated' });
      }
    );
};
