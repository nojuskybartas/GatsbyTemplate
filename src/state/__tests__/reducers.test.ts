import { initialState, QuizAnswers, quizSlice, setQuizAnswers } from "../quiz";

test("should return initial state", () => {
  expect(quizSlice.reducer(undefined, setQuizAnswers)).toEqual(initialState);
});

test("updates quiz answer state correctly", () => {
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
