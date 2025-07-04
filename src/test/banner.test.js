import React from "react"
import { render } from "@testing-library/react"


import Banner from '@components/Banner.jsx'

describe('Banner',() => {
    test('Should render without crash', () => {
        render(<Banner />);
    })
})