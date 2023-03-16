describe('Тестирование формы логина и пароля', function () {

    it('Позитивный кейс авторизации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Проверяем с нижним регистром с валидной верной почтой
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('German@Dolnikov.ru'); //Проверяем с верхним регистром с валидной верной почтой
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('albert@robert.ru'); //Проверяем с нижним регистром с валидной неверной почтой
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('ALbert@roBErt.ru'); //Проверяем с верхним регистром с валидной неверной почтой
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
        cy.reload();
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('germandolnikov.ru'); //Проверяем с невалидной почтой (без @)
        cy.get('#restoreEmailButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.end();
    })

    it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('Ilovecakes');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })

     it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); 
     })

     it('Приведение к нижнему регистру в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
     })
})