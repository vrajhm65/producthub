import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { CATEGORIES, products, searchProducts } from "../data/products.js";

const SORTS = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name: A-Z" },
];

export default function Products() {
  const [params, setParams] = useSearchParams();
  const urlCategory = params.get("category") || "All";
  const urlSearch = params.get("search") || "";

  const [search, setSearch] = useState(urlSearch);
  const [category, setCategory] = useState(urlCategory);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    setCategory(params.get("category") || "All");
    setSearch(params.get("search") || "");
  }, [params]);

  const results = useMemo(() => {
    let list = searchProducts(search).filter(
      (p) => category === "All" || p.category === category
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [search, category, sort]);

  const updateParam = (nextCategory) => {
    setCategory(nextCategory);
    const next = {};
    if (nextCategory !== "All") next.category = nextCategory;
    if (search.trim()) next.search = search.trim();
    setParams(next, { replace: true });
  };

  return (
    <section className="container section">
      <h1>Products</h1>
      <p className="muted">Showing {results.length} of {products.length} products.</p>

      <div className="toolbar">
        <div className="toolbar-field">
          <label htmlFor="product-search">Search</label>
          <input
            id="product-search"
            type="search"
            placeholder="Search name, brand, category…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="toolbar-field">
          <label htmlFor="product-category">Category</label>
          <select
            id="product-category"
            value={category}
            onChange={(e) => updateParam(e.target.value)}
          >
            <option value="All">All</option>
            {CATEGORIES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="toolbar-field">
          <label htmlFor="product-sort">Sort</label>
          <select
            id="product-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="empty">
          <p>No products found</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setParams({}, { replace: true });
            }}
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
