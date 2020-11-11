import React from 'react'
import PropTypes from 'prop-types'

//illustrate five starts & review text according to data 
const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                <i style={{ color: color }}
                    className={value >= 1
                        ? 'fas fa-star'
                        : value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'}>

                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={value >= 2
                        ? 'fas fa-star'
                        : value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'}>

                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={value >= 3
                        ? 'fas fa-star'
                        : value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'}>

                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={value >= 4
                        ? 'fas fa-star'
                        : value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'}>

                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={value >= 5
                        ? 'fas fa-star'
                        : value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'}>

                </i>
            </span>
            <span className="ml-3">{text ? text : ''}</span>
        </div>
    )
}

//Set default color for rating start
Rating.defaultProps = {
    color: '#f8e825',
}
//Set proptype avoiding messing up data type
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}
export default Rating
