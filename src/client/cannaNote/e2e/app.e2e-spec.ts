import { CannaNotePage } from './app.po';

describe('canna-note App', () => {
  let page: CannaNotePage;

  beforeEach(() => {
    page = new CannaNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
