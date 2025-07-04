import React from "react"
import { render, screen } from "@testing-library/react"


import Banner from '@components/Banner.jsx'

describe('Banner',() => {
    test('should render without crash', () => {
        render(<Banner />)
    })

    //Test sur les props
    let title = 'Test Bannière'
    let imageSRC = 'https://unsplash.com/fr/photos/arbres-avec-brouillard-wmFTP3vbYKU'
    
    test('displays banner images data', () => {
        render(<Banner title={title} imageSRC={imageSRC} />)

        const bannerElement = screen.getByTestId('banner-image')

        expect(screen.getByText(/Test Bannière/i)).toBeInTheDocument()
        expect(bannerElement).toHaveAttribute('src', 'https://unsplash.com/fr/photos/arbres-avec-brouillard-wmFTP3vbYKU')
    })
})