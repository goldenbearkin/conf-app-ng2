import { ConfAppNg2Page } from './app.po';

describe('conf-app-ng2 App', function() {
  let page: ConfAppNg2Page;

  beforeEach(() => {
    page = new ConfAppNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
