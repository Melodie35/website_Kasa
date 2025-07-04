import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import Gallery from "@components/Gallery"

describe('Gallery',() => {
    let images = [
        'https://unsplash.com/fr/photos/arbres-avec-brouillard-wmFTP3vbYKU',
        'https://unsplash.com/fr/photos/montagne-rocheuse-brune-a-cote-dun-plan-deau-pendant-la-journee-axqzgeVSO-Y',
        'https://unsplash.com/fr/photos/plant-de-coton-sur-photo-sephia-90DYNCxoKu8',
    ]

    test('displays the first image on initial render', () => {
        render(<Gallery images={images} />)

        const imageElement = screen.getByTestId('slider')
        expect(imageElement).toHaveAttribute('src', images[0])
    })

    test('displays the next image when clicking the right arrow', () => {
        render(<Gallery images={images} />)

        const rightButton = screen.getByAltText(/Flèche droite/i)
        const imageElement = screen.getByTestId('slider')

        fireEvent.click(rightButton)
        expect(imageElement).toHaveAttribute('src', images[1])
    })

    test('displays the previous image when clicking the left arrow', () => {
        render(<Gallery images={images} />)

        const rightButton = screen.getByAltText(/Flèche droite/i)
        const leftButton = screen.getByAltText(/Flèche gauche/i)
        const imageElement = screen.getByTestId('slider')

        fireEvent.click(rightButton)
        fireEvent.click(leftButton)
        expect(imageElement).toHaveAttribute('src', images[0])
    })

    test('displays the first image after the last one when clicking the right arrow', () => {
        render(<Gallery images={images} />)

        const rightButton = screen.getByAltText(/Flèche droite/i)
        const imageElement = screen.getByTestId('slider')

        fireEvent.click(rightButton)
        fireEvent.click(rightButton)
        expect(imageElement).toHaveAttribute('src', images[2])

        fireEvent.click(rightButton)
        expect(imageElement).toHaveAttribute('src', images[0])
    })

    test('displays the last image after the first one was reached when clicking the left arrow', () => {
        render(<Gallery images={images} />)

        const leftButton = screen.getByAltText(/Flèche gauche/i)
        const rightButton = screen.getByAltText(/Flèche droite/i)
        const imageElement = screen.getByTestId('slider')

        fireEvent.click(rightButton)
        fireEvent.click(rightButton)
        fireEvent.click(rightButton)
        expect(imageElement).toHaveAttribute('src', images[0])

        fireEvent.click(leftButton)
        expect(imageElement).toHaveAttribute('src', images[2])
    })

    test('does display arrows when there is more than one image', () => {
        render(<Gallery images={images} />)

        const leftButton = screen.getByAltText(/Flèche gauche/i)
        const rightButton = screen.getByAltText(/Flèche droite/i)

        expect(leftButton).toBeInTheDocument()
        expect(rightButton).toBeInTheDocument()
    })

    test('does not display arrows when there is only one image', () => {
        let images = [
        'https://unsplash.com/fr/photos/arbres-avec-brouillard-wmFTP3vbYKU',
        ]
        render(<Gallery images={images} />)

        const leftButton = screen.queryByAltText(/Flèche gauche/i)
        const rightButton = screen.queryByAltText(/Flèche droite/i)

        expect(leftButton).toBeNull()
        expect(rightButton).toBeNull()
    })
})