import { SquadHealthcheckPage } from './app.po';

describe('squad-healthcheck App', () => {
  let page: SquadHealthcheckPage;

  beforeEach(() => {
    page = new SquadHealthcheckPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
