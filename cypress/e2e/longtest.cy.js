describe('Тестирование формы логина и пароля', function () {

    it('Позитивный кейс авторизации', function () {
       cy.visit('https://testqastudio.me/');
       
       cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
       cy.get('.search-wrapper > .search-field').type('БРОММС Двухместная кровать');
       cy.get('.search-submit > .razzi-svg-icon').click();
       cy.contains('БРОММС Двухместная кровать').should('be.visible');
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       
       cy.wait(10000);
       cy.get('#cart-modal > .off-modal-layer').click();
       
       cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
       cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
       cy.get('.search-wrapper > .search-field').type('КЛЛАРИОН Низкий столик');
       cy.get('.search-submit > .razzi-svg-icon').click();
       cy.contains('КЛЛАРИОН Низкий столик').should('be.visible');
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       
       cy.wait(10000);
       cy.get('.checkout').click();

       cy.contains('Оформение заказа').should('be.visible');
       cy.get('#billing_first_name').type('Ivan');
       cy.get('#billing_last_name').type('Ivanov');
       cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click();
       cy.get('.select2-search__field').type('Россия{enter}');
       cy.get('#billing_address_1').type('л, Новый Арбат ул., д. 11, стр. 1');
       cy.get('#billing_city').type('Москва');
       cy.get('#billing_state').type('Москва');
       cy.get('#billing_postcode').type('101000');
       cy.get('#billing_phone').type('0112557577');
       cy.get('#billing_email').type('ivanov1234@ivan.com');
       cy.get('#place_order').click();
       
       cy.wait(15000);
       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
       cy.contains('БРОММС Двухместная кровать').should('be.visible');
       cy.contains('КЛЛАРИОН Низкий столик').should('be.visible');
    })
})