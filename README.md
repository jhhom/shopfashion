# 🛍️ ShopFashion

A fashion e-commerce application developed with ReactJS, Spring Boot, and PostgreSQL.

It consists of two websites:

<table>
  <thead>
    <tr>
      <th scope="col" className="px-6 py-3">
        🛍️ Store front
      </th>
      <th scope="col" className="px-6 py-3">
        📝 Admin panel
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <div align="center">
            <img src="/docs/media/website-showcase/store-2.png" alt="Store" />
        </div>
      </td>
      <td>
        <div align="center">
            <img src="/docs/media/website-showcase/admin-2.png" alt="Admin" />
        </div>
      </td>
    </tr>
    <tr>
        <td>
            A store front for online-shoppers to browse and purchase products
        </td>
        <td>
            An admin interface for monitoring sales performance, managing the products published on the store front website, the registered customers and orders placed.
        </td>
    </tr>
    <tr>
      <th>
        <a style="text-align: center; font-weight: 700; display: block;" target="_blank" href="https://shopfashion.joohom.dev/">
          🔗 shopfashion.joohom.dev
        </a>
      </th>
      <th>
        <a style="text-align: center; font-weight: 700; display: block;" target="_blank" href="https://shopfashion-admin.joohom.dev/">
          🔗 shopfashion-admin.joohom.dev
        </a>
      </th>
    </tr>

  </tbody>
</table>

## Table of contents

- [1. 📱 Features](#1--features)
- [2. 🖼️ Screenshots](#2-%EF%B8%8F-screenshots)
- Coding Practices
  - [3. 🧪 Automated Testing](#3--automated-testing)
    - [3.1 Unit testing](#31-unit-testing)
    - [3.2 Integration testing](#32-integration-testing)
    - [3.3 End-to-end (E2E) testing](#33-end-to-end-e2e-testing)
    - [3.4 Test helpers](#34-test-helpers)
    - [3.5 Cucumber test (Behavior-driven development)](#35-cucumber-test-behavior-driven-development)
  - [4. ⚙️ Continous Integration](#4-%EF%B8%8F-continous-integration)
  - [5. 🪵 Logging](#5--logging)
  - [6. 📝 Code convention / standardisation](#6--code-convention--standardisation)
  - [7. 🚢 Containerisation](#7--containerisation)
- [8. 📜 Development guide](#8--development-guide)
- [9. 🖼️ Screenshots of every feature](#9-%EF%B8%8F-screenshots-of-every-feature)
  - [9.1 Admin](#91-admin)
  - [9.2 Store](#92-store)
- [10. Technicals](#10-technicals)

## 1. 📱 Features

[🔼 Table of Contents](#table-of-contents)

<table>
  <thead>
    <tr>
      <th scope="col" className="px-6 py-3">
        Website
      </th>
      <th scope="col" className="px-6 py-3">
        Domain
      </th>
      <th scope="col" className="px-6 py-3">
        Features
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" rowspan="3">
        Admin panel
      </th>
      <th>Sales dashboard</th>
      <td>
        <ul>
          <li>Sales summary graph</li>
          <li>Recent customers and orders</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Product</th>
      <td>
        <ul>
          <li>Products</li>
          <li>Product variants</li>
          <li>Product taxons</li>
          <li>Proudct associations</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Sales Management</th>
      <td>
        <ul>
          <li>Orders listing</li>
          <li>Manage order status</li>
          <li>Customers listing</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row" rowspan="3">
        Store front
      </th>
      <th>Products</th>
      <td>
        <ul>
          <li>Sales summary graph</li>
          <li>Recent customers and orders</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Purchase</th>
      <td>
        <ul>
          <li>Purchase products</li>
          <li>Stripe checkout</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Customer</th>
      <td>
        <ul>
          <li>Review products</li>
          <li>Manage last purchases</li>
          <li>Login and create account</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 2. 🖼️ Screenshots

[🔼 Table of Contents](#table-of-contents)

<p style="font-weight: 700" align="center">
    <b>Admin</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 70%;" src="/docs/media/admin-dashboard.png">
</div>

<br/>

---

<br/>

<p style="font-weight: 700" align="center">
    <b>Store</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 70%;" src="/docs/media/store-list-search.png">
</div>

<br/>

---

<br/>

<p style="font-weight: 700" align="center">
    <b>Mobile</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 40%;" src="/docs/media/mobile-polo.png">
</div>

## 3. 🧪 Automated Testing

[🔼 Table of Contents](#table-of-contents)

### 3.1 Unit testing

Unit tests test a function or other units of code in isolation. It is suitable to be used on pure functions that has a more complex processing logic.

- [Front-end unit test example](https://github.com/jhhom/shopfashion/blob/master/frontend-store/src/pages/ProductDetails/components/get-disabled-options/get-disabled-options-3.test.ts#L37-L116)

- [Back-end unit test example](https://github.com/jhhom/shopfashion/blob/master/backend/src/test/java/com/example/demo/example/util/TaxonUtilTest.java#L79-L147)

### 3.2 Integration testing

Integration tests test multiple components of code together.

In below examples, we have integration tests that test behaviour of code integrated with other components such as the user interface and database.

- [Front-end integration test example](https://github.com/jhhom/shopfashion/blob/master/frontend-store/src/pages/layouts/Root.layout/components/Search.test.tsx#L105-L126)
- [Mocking back-end with MSW example](https://github.com/jhhom/shopfashion/blob/master/frontend-store/src/pages/layouts/Root.layout/components/Search.test.tsx#L78-L94)

- [Back-end integration test example 1](https://github.com/jhhom/shopfashion/blob/master/backend/src/test/java/com/example/demo/example/controllers/DashboardControllerTest.java#L29-L54)
- [Back-end integration test example 2](https://github.com/jhhom/shopfashion/blob/master/backend/src/test/java/com/example/demo/example/apis/CustomersApiTest.java#L47-L104)
- [Back-end mocking Stripe payment service for testing example](https://github.com/jhhom/shopfashion/blob/master/backend/src/test/java/com/example/demo/example/apis/CustomersApiTest.java#L96-L102)

### 3.3 End-to-end (E2E) testing

End-to-end test tests the code in an entire flow and more resembles the end-user's perspective.

- [Admin E2E test example](https://github.com/jhhom/shopfashion/blob/master/e2e/tests/admin.spec.ts)

### 3.4 Test helpers

Tests often require setups. Test helpers can help simplify the setup process.

Test helpers can also help to simplify test code in other ways such as providing assertion capabilities for checking a result with more complicated data structure.

- [Code example: Test helper for simplifiying the login setup process in testing APIs requiring authentication](https://github.com/jhhom/shopfashion/blob/master/backend/src/test/java/com/example/demo/example/TestWithCurrentCustomer.java#L20-L48)

### 3.5 Cucumber test (Behavior-driven development)

Behaviour-driven development express the test specifications in natural language format (e.g Given-When-Then format in Gherkin).

The benefit of this is it can help bridge the communication of technical and non-technical stakeholders to understand system's behaviour and contribute to new requirement specification process.

- [Code example: Cucumber feature](https://github.com/jhhom/portfolio-draft-1.shopfashion/blob/master/backend/src/test/resources/features/product.feature)

- [Code example: Cucumber test step definitions](https://github.com/jhhom/portfolio-draft-1.shopfashion/blob/master/backend/src/test/java/com/example/demo/cucumber/ProductSearchStepDefinitions.java#L30-L59)

![](/docs/media/cucumber-test-results.png)

Generated-report from running Cucumber test

## 4. ⚙️ Continous Integration

Using GitHub Actions workflow, every push to master will trigger tests to run on the latest commit.

The result of the test can be viewed in [Actions](https://github.com/jhhom/shopfashion/actions).

To provide more visibility of the test results, it is also viewable as a website on [ShopFashion: CI test result](https://jhhom.github.io/shopfashion).

Example GitHub Actions workflow: [ci-test.yml](https://github.com/jhhom/shopfashion/blob/master/.github/workflows/ci-test.yml)

## 5. 🪵 Logging

[🔼 Table of Contents](#table-of-contents)

- [Code example: Request ID generation](https://github.com/jhhom/shopfashion/blob/master/backend/src/main/java/com/example/demo/config/ProjectConfig.java#L101-L105)

  - Request ID is an added contextual information to help trace which log happen as part of handling which request

- [Code example: Logging of HTTP requests and responses](https://github.com/jhhom/portfolio-draft-1.shopfashion/blob/master/backend/src/main/java/com/example/demo/filters/HttpLoggingFilter.java#L35-L83)

- [Code example: Logging of unhandled exceptions](https://github.com/jhhom/portfolio-draft-1.shopfashion/blob/master/backend/src/main/java/com/example/demo/filters/HttpLoggingFilter.java#L31-L60)

- [Code example: Logging of all SQL queries](https://github.com/jhhom/portfolio-draft-1.shopfashion/blob/master/backend/src/main/java/com/example/demo/config/JooqExecuteListener.java#L35-L41)

- [Code example: Logging of business logic-specific event](https://github.com/jhhom/portfolio-draft-1.shopfashion/blob/master/backend/src/main/java/com/example/demo/services/store/customers/checkout/RequestCheckoutService.java#L77)

## 6. 📝 Code convention / standardisation

[🔼 Table of Contents](#table-of-contents)

Back-end code organization

```
src/main/java/com/example/demo
|
+-- config
|
+-- controllers         # Spring controllers
|
+-- filters             # Spring filters
|
+-- jackson
|
+-- jooqmodels          # Generated Jooq models
|
+-- logging             # General logging data models and class
|
+-- repositories        # Repositories
|
+-- scripts             # Scripts that can be run standalone for one-off tasks like code generation
|
+-- services            # Services
|
+-- utils               # General utility, pure functions that are used across the codebase
|
+-- DemoApplication.java        # Entry point to the application
```

Front-end code organization

```
src
|
+-- assets
|
+-- config
|
+-- external
|
+-- pages
|
+-- providers
|
+-- routes
|
+-- api-contract
|
+-- stores
|
+-- utils
|
+-- App.tsx
|
+-- main.tsx
```

## 7. 🚢 Containerisation

[🔼 Table of Contents](#table-of-contents)

In this project, the back-end infrastructure is containerized. This eases the developer in getting the back-end running as quickly and easily as possible without having to worry about installing the infrastructure components such as Java and PostgreSQL in their computer.

After setting up the configurations, we just need to run docker compose up -f ./docker/docker-compose.yml to run the back-end.

[Code example: Dockerfile](https://github.com/jhhom/portfolio-draft-1.shopfashion/blob/master/backend/docker/app.Dockerfile)

## 8. 📜 Development guide

[🔼 Table of Contents](#table-of-contents)

Follow the instructions in [CONFIGURATION.md](CONFIGURATION.md) and [SETUP.md](SETUP.md) to setup the application in your local computer for development.

## 9. 🖼️ Screenshots of every feature

[🔼 Table of Contents](#table-of-contents)

### 9.1 Admin

<p style="font-weight: 700" align="center">
    <b>Sales dashboard / summary</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/admin/1-dashboard.png">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Manage products</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/admin/2-products.png">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Edit products</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/admin/3-edit-prod-option.png">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Manage orders: Update order status</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/admin/4-orders.png">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Manage orders: Find unfulfilled orders efficiently with data table filter</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/admin/5-orders-listing.png">
</div>

<br/>

---

### 9.2 Store

[🔼 Table of Contents](#table-of-contents)

<p style="font-weight: 700" align="center">
    <b>Browse products</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/1-products-listing.jpeg">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Search products</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/2-search.png">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Add products to shopping cart</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/3-cart.jpeg">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Checkout and purchase</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/4-checkout.jpeg">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Stripe payment</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/5-stripe.png">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>After-purchase thank you</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/6-thank-you.jpeg">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Review products</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/7-review-product.jpeg">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>List all reviews</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/8-reviews.jpeg">
</div>

<br/>

---

<p style="font-weight: 700" align="center">
    <b>Product details</b>
</p>

<div style="border: 1px solid black" align="center">
    <img style="width: 80%;" src="/docs/media/feature-screenshots/store/9-product-details.jpeg">
</div>

<br/>

---

## 10. Technicals

[🔼 Table of Contents](#table-of-contents)

ERD (Entity-Relationship Diagram)

![](/docs/media/shopfashion-erd.jpeg)
