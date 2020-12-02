import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Welcome to Frank's Toilet Paper Depot",
    description: 'We sell the best products for cheap',
    keywords: 'toliet paper, creative toliet paper, toliet',
}

export default Meta