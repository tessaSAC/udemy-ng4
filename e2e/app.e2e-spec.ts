import { UdemyNg4Page } from './app.po';

describe('udemy-ng4 App', () => {
  let page: UdemyNg4Page;

  beforeEach(() => {
    page = new UdemyNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
