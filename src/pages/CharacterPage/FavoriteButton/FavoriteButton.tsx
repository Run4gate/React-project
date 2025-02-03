import './FavoriteButton.css';

export function FavoriteButton({checked, onChange, className}: {
    checked: boolean, onChange: () => void, className?: string
}) {
    return (
        <label className={'favorite-btn-label' + (className ? ` ${className}` : '')}>
            <input
                type="checkbox"
                autoComplete='off'
                checked={checked}
                onChange={onChange}
            />
            <span>{ checked ? 'Favorite' : 'Add to Favorites' }</span>
        </label>
    )
}