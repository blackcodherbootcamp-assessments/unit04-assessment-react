import '@testing-library/jest-dom';
import { readFile } from '../../.autograding/utils.js';

describe("Application structure", () => {
  test("/src/components/Basket.js found", () => {
    expect(readFile("/src/components/Basket.jsx")).toBeTruthy();
  });

  test("/src/components/BasketCount.js found", () => {
    expect(readFile("/src/components/BasketCount.jsx")).toBeTruthy();
  });

  test("/src/components/BasketTotal.js found", () => {
    expect(readFile("/src/components/BasketTotal.jsx")).toBeTruthy();
  });

  test("/src/components/Header.js found", () => {
    expect(readFile("/src/components/Header.jsx")).toBeTruthy();
  });

  test("/src/components/Product.js found", () => {
    expect(readFile("/src/components/Product.jsx")).toBeTruthy();
  });

  test("/src/components/ProductList.js found", () => {
    expect(readFile("/src/components/ProductList.jsx")).toBeTruthy();
  });

  test("/src/components/Search.js found", () => {
    expect(readFile("/src/components/Search.jsx")).toBeTruthy();
  });

  test("/src/models/data.json found", () => {
    expect(readFile("/src/models/data.json")).toBeTruthy();
  });

  test("/src/pages/About.js found", () => {
    expect(readFile("/src/pages/About.jsx")).toBeTruthy();
  });
});