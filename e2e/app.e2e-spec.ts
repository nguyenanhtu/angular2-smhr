import { Angular2SmhrPage } from './app.po';

describe('angular2-smhr App', function() {
  let page: Angular2SmhrPage;

  beforeEach(() => {
    page = new Angular2SmhrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
