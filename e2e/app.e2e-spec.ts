import { CageWorksPage } from './app.po';

describe('cage-works App', function() {
  let page: CageWorksPage;

  beforeEach(() => {
    page = new CageWorksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
