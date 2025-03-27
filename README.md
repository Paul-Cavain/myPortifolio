# My Portfolio Website

![portifolioimage](https://github.com/user-attachments/assets/d6a0fb77-a323-4e26-b81f-1f172c6923c0).

## Development

#### Clone the repository

    https://github.com/Paul-Cavain/myPortifolio.git

#### Install Dependencies

    npm install

    # or

    yarn install

#### Start the development server

    npm run start

    # or

    yarn start

#### Build for production

    npm run build

    # Or using Yarn

    yarn build

### `Links`

- Solution URL: https://github.com/Paul-Cavain/myPortifolio
- Live Site URL: https://social-housing-corporation.vercel.app/

One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
