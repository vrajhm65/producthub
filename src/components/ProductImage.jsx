// Shared image with a fallback so the UI never shows a broken image.
export default function ProductImage({ product, width, height, eager }) {
  const fallback = `https://picsum.photos/seed/producthub-${product.id}/800/600`;
  return (
    <img
      src={product.image}
      alt={product.name}
      loading={eager ? undefined : "lazy"}
      width={width}
      height={height}
      onError={(e) => {
        if (e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
      }}
    />
  );
}
