import ForgotPasswordPage from "./PageObject/ForgotPasswordPage";
import LoginPage from "./PageObject/LoginPage";
import MainPage from "./PageObject/MainPage";
import MyAccountPage from "./PageObject/MyAccountPage";

describe("Login tests suite", () => {
  beforeEach(() => {
    cy.fixture("DataTest").then(function (data) {
      this.data = data;
      cy.visit(Cypress.env("loginUrl"));
    });
  });
  it("Test change password", function () {
    LoginPage.ClickForgotPassword();
    ForgotPasswordPage.EnterEmail("pm2w7j@oljudrdv.mailosaur.net");
    ForgotPasswordPage.ClickSentButton();
    cy.wait(9000);
    ForgotPasswordPage.CheckReceiveMail().then((email) => {
      ForgotPasswordPage.processEmailAndVisitResetPasswordLink(email);
    });
    ForgotPasswordPage.EnterNewPassword(this.data.NewPassword);
    ForgotPasswordPage.EnterConfirmNewPassword(this.data.NewPassword);
    ForgotPasswordPage.ClickSaveNewPassword();
    ForgotPasswordPage.VerifySuccesfullyChangePassword();
  });

  it("Test Login", function () {
    LoginPage.EnterEmail(this.data.ValidEmail);
    LoginPage.EnterPassword(this.data.Password);
    LoginPage.ClickLogin();
    cy.wait(2000);
    MainPage.ClickMyAccount();
    MyAccountPage.VerifyAccountMenu();
  });
});
