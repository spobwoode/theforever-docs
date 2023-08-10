export default function NumberInputField({ label, value, setValue }) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={label} className="text-sm mb-2">{label}</label>
            <input
                type="number"
                name={label}
                id={label}
                placeholder={label}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="border border-gray-300 rounded-md p-2"
                autoComplete='off'
            />
        </div>
    )
}