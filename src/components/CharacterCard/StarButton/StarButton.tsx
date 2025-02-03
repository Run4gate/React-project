import './StarButton.css';

export function StarButton(
    { className, checked, onChange } : {
        className?: string,
        checked: boolean, onChange: () => void}
) {
    return(
        <label className={`star-btn-label${className ? ` ${className}` : ''}`}>
            <input
                type="checkbox"
                autoComplete='off'
                checked={checked}
                onChange={onChange}
            />
            <span className="star-btn-icon"/>
        </label>
    );
};