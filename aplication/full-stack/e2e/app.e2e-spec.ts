import { FullStackPage } from './app.po';

describe('full-stack App', () => {
  let page: FullStackPage;

  beforeEach(() => {
    page = new FullStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
