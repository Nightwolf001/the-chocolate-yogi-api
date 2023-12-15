import type { Schema, Attribute } from '@strapi/strapi';

export interface BrandValuesValueProposition extends Schema.Component {
  collectionName: 'components_brand_values_value_propositions';
  info: {
    displayName: 'value proposition';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    body: Attribute.Text;
  };
}

export interface ProductsProductRange extends Schema.Component {
  collectionName: 'components_products_product_ranges';
  info: {
    displayName: 'product range';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    description: Attribute.Text;
    ingredients: Attribute.Text;
    btn_text_1: Attribute.String;
    btn_text_2: Attribute.String;
    grams: Attribute.String;
    pack_shot: Attribute.Media;
    pack_illustration: Attribute.Media;
    color: Attribute.String;
  };
}

export interface SellingPointsBrandUniqueSellingPoints
  extends Schema.Component {
  collectionName: 'components_selling_points_brand_unique_selling_points';
  info: {
    displayName: 'Brand Unique Selling Points';
    icon: 'apps';
  };
  attributes: {
    text: Attribute.String;
    text_color: Attribute.String;
    background_color: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brand-values.value-proposition': BrandValuesValueProposition;
      'products.product-range': ProductsProductRange;
      'selling-points.brand-unique-selling-points': SellingPointsBrandUniqueSellingPoints;
    }
  }
}
