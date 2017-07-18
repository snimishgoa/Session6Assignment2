import { Session6Assignment2Page } from './app.po';

describe('session6-assignment2 App', () => {
  let page: Session6Assignment2Page;

  beforeEach(() => {
    page = new Session6Assignment2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
