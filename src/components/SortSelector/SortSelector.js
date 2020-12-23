export default function SortSelector({ options, value, onChange }) {
  return (
    <select value={value} onChange={evt => onChange(evt.target.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
