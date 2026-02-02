interface SortSelectProps {
  value: 'name' | 'email';
  onChange: (value: 'name' | 'email') => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">Sort By</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as 'name' | 'email')}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="name">Name</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
}
