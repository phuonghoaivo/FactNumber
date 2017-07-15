import { FactNumberPage } from './app.po';

describe('fact-number App', () => {
  let page: FactNumberPage;

  beforeEach(() => {
    page = new FactNumberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
