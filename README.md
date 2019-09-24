1.  **View the site**

    The master branch is auto-deployed to [MortyAndRick.netlify.com](https://mortyandrick.netlify.com)

1.  **Set up for local use**

    Clone the repo and then install.

    ```
    git clone https://github.com/roadrunnersf/rick-morty-gatsby.git
    cd rick-morty-gatsby
    npm install
    ```

1.  **Run dev server**

    Install gatsby command line interface: for local use:

    `npm install -g gatsby-cli`

    Then run the development server:

    `gatsby develop`

1.  **View site in browser**

    The site is now running at `http://localhost:8000`

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to view the data on the graphql data layer.

1.  **Run tests**

    Run tests manually using `npm test` or in watch mode using `npm test --watch`.

1.  **Storybook**

    Install Storybook if needed:

    ```
    npm install -g @storybook/cli
    sb init
    ```

    Then you can run Storybook on `http://localhost:6006` using:

    ```
    npm run storybook
    ```
