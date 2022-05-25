import {
  initialState,
  QuizAnswers,
  quizSlice,
  setQuizAnswers,
  setQuizPage,
} from "../quiz";

describe("Quiz State Reducers", () => {
  it("should return initial state", () => {
    expect(quizSlice.reducer(undefined, setQuizAnswers)).toEqual(initialState);
  });

  it("updates answer state correctly", () => {
    const mockQuestion: keyof QuizAnswers = "importantCriteria";
    const mockAnswer = "testAnswer";

    expect(
      quizSlice.reducer(
        initialState,
        setQuizAnswers({ [mockQuestion]: mockAnswer })
      )
    ).toEqual({
      ...initialState,
      answers: {
        [mockQuestion]: mockAnswer,
      },
    });
  });

  it("updates page state correctly", () => {
    const mockPageNumber = 3;
    expect(
      quizSlice.reducer(initialState, setQuizPage(mockPageNumber))
    ).toEqual({
      ...initialState,
      page: mockPageNumber,
    });
  });
});
