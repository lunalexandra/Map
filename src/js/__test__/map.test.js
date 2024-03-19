import ErrorRepository from "../map";

const err = new ErrorRepository();
err.addError(404, 'Page not found');
err.addError(500, 'Internal server error');

test('check error', () => {
    expect(err.translate(404)).toBe('Page not found');
});

test('check unknown error', () => {
  expect(err.translate(100)).toBe('Unknown error');
});