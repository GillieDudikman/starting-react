import PropTypes from "prop-types";


const AnimeTypes  = PropTypes.shape({
        studio: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string),
        hype: PropTypes.number,
        description: PropTypes.string,
        title: PropTypes.shape({
            link: PropTypes.string,
            text: PropTypes.string,
        }),
        start_date: PropTypes.string
})

export default AnimeTypes;