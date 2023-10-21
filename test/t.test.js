const myMock = jest.fn(() => 1000).mockReturnValueOnce(100).mockReturnValueOnce(200).mockReturnValue(500)

/**
 * result shows that mockReturnValue takes precedence over default value in mock function
 */
it.only('test mock values', () => {
    console.log(1, myMock())
    console.log(2, myMock())
    console.log(3, myMock())
    console.log(4, myMock())
    console.log(5, myMock())
    console.log(6, myMock())
})