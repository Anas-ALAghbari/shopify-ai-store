/**
 * Shopify Storefront GraphQL API Client
 * Official Integration Layer for Shopify AI-Powered E-Commerce Store & Shopping Agent
 */

const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'mock-store.myshopify.com';
const SHOPIFY_STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'mock_token';

export async function shopifyFetch<T>({
  query,
  variables = {}
}: {
  query: string;
  variables?: Record<string, any>;
}): Promise<T | null> {
  const endpoint = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.warn(`Shopify API warning: Status ${res.status}`);
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.warn('Shopify GraphQL Errors:', json.errors);
      return null;
    }

    return json.data as T;
  } catch (error) {
    console.error('Shopify Fetch Error:', error);
    return null;
  }
}

// Sample GraphQL queries for Shopify API integration
export const GET_PRODUCTS_QUERY = `
  query getProducts($first: Int = 10) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
`;
