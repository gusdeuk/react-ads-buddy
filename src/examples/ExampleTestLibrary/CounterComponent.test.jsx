import { fireEvent, render, screen } from '@testing-library/react';

import Counter from './CounterComponent';

// https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest#:~:text=Unit%20Testing%20is%20a%20testing,testing%20an%20individual%20React%20Component.&text=Unit%20Testing%20is%20important%20for,individual%20functionality%20of%20React%20components.
// https://create-react-app.dev/docs/running-tests
// https://testing-library.com/docs/react-testing-library/intro

//test block
test('increments counter', () => {
    // render the component on virtual dom
    render(<Counter />)

    //select the elements you want to interact with
    const counter = screen.getByTestId('counter')
    const incrementBtn = screen.getByTestId('increment')

    //interact with those elements
    fireEvent.click(incrementBtn)

    //assert the expected result
    expect(counter).toHaveTextContent('1')
})
