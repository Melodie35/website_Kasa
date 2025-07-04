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
        render(<Gallery images={images} />);

        const imageElement = screen.getByTestId('slider')
        expect(imageElement).toHaveAttribute('src', images[0])
    })


})