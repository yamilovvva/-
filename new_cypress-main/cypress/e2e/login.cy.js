describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');// Проверяю что виден текст пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что есть крестик и он виден

        })

      it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю  вижу текст
        cy.get('#messageHeader').should('be.visible');// Проверяю что виден текст пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что есть крестик и он виден

        })

      it('Проверка что в логине есть @ ', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю  вижу текст
        cy.get('#messageHeader').should('be.visible');// Проверяю что виден текст пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что есть крестик и он виден

        })

      it('Проверка восстановнения пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#forgotEmailButton').click(); // Нажал на кнопку Забыли пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления пароля
        cy.get('#restoreEmailButton').click();// Нажал на кнопку отправить код


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю  вижу текст
        cy.get('#messageHeader').should('be.visible');// Проверяю что виден текст пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что есть крестик и он виден

        })

      it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('erman@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю  вижу текст
        cy.get('#messageHeader').should('be.visible');// Проверяю что виден текст пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что есть крестик и он виден

        })

        it('На приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восстановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели  верный логин со строчными и большими буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю соответсвие текста
        cy.get('#messageHeader').should('be.visible');// Проверяю что виден текст пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что есть крестик и он виден

        })
 });

      





/