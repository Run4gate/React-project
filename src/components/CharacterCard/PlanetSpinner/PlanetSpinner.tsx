
import './PlanetSpinner.css';

export function PlanetSpinner({className}: {className?: string}) {
    return(
        <svg className={`planet-spinner${className ? ` ${className}` : ''}`}>
            <circle className="planet-spinner-orbite"/>
            <circle className="planet-spinner-planet"/>
        </svg>
    )
}