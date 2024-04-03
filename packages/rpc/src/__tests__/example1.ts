export type Product = {
  id: string;
  name: string;
  /**
   * Product categories
   */
  categories: string[];
};

/*
{
  "categories": {
    "description": "Product categories",
    "list": true,
    "type": "string"
  },
  "id": {
    "type": "string"
  },
  "name": {
    "type": "string"
  }
}
*/
