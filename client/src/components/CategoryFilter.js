const categories = ["food", "transport", "utilities", "entertainment", "health", "other"];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="category-filter">
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={category}
      onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
