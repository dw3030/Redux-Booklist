# React-Redux Booklist App

## Intro 

This is an app that utilized a Pluralsight tutorial by Cory House: a "course-listing application" for React-Redux as a go-by, but was customized during development to be a web application for organizing books and authors.

## Summary of Features & Functionality

This application intitally has 3 views, Home, Books, and About, and will display a 404 message when the incorrect URL is entered.
Users can fetch a list of books from a mock API object, edit the Title and Category of the book, and select from a list of authors.  
Users can add a book to the list, or delete a book from the list.
Users can edit the Title and Category of any book on the list.

## Future Improvements

- Lots of styling for the UI still to come
- Including logic to add/edit Authors (instead of a fixed dropdown list)
- Users able to filter by table headings in the book list
- Hiding the table UI when the list is empty
- More messages for additional error handling or user communication (ie. confirmation messages or warnings if leaving a form unsubmitted)
- More strict constraints on data entered
- Added relevant info displayed, such as a count of books in the list
- Adding pagination for longer lists
- Sort list functionality
- Ability to revert saved changes
- Additional features as they arise


## Testing 

Testing integrated with Jest, Enzyme, and React Testing Library to experiment with different unit testing approaches.

## Bundling

Using Webpack for bundling.

-----------------------------------------------------------------------------------
## Dependencies from create-react-app scaffolding

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Development Dependencies

| **Dependency**                     | **Use**                                                          |
| ---------------------------------- | ---------------------------------------------------------------- |
| @babel/core                        | Transpiles modern JavaScript so it runs cross-browser            |
| @testing-library/react             | Test React components                                            |
| @wojtekmaj/enzyme-adapter-react-17 | Configure Enzyme to work with React 17                           |
| babel-eslint                       | Lint modern JavaScript via ESLint                                |
| babel-loader                       | Add Babel support to Webpack                                     |
| babel-preset-react-app             | Babel preset for working in React. Used by create-react-app too. |
| css-loader                         | Read CSS files via Webpack                                       |
| cssnano                            | Minify CSS                                                       |
| enzyme                             | Simplified JavaScript Testing utilities for React                |
| eslint                             | Lints JavaScript                                                 |
| eslint-loader                      | Run ESLint via Webpack                                           |
| eslint-plugin-import               | Advanced linting of ES6 imports                                  |
| eslint-plugin-react                | Adds React-related rules to ESLint                               |
| fetch-mock                         | Mock fetch calls                                                 |
| html-webpack-plugin                | Generate HTML file via webpack                                   |
| http-server                        | Lightweight HTTP server to serve the production build locally    |
| jest                               | Automated testing framework                                      |
| json-server                        | Create mock API that simulates create, update, delete            |
| mini-css-extract-plugin            | Extract imported CSS to a separate file via Webpack              |
| node-fetch                         | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                        | Display results of multiple commands on single command line      |
| postcss                            | Post-process CSS                                                 |
| postcss-loader                     | Post-process CSS via Webpack                                     |
| react-test-renderer                | Render React components for testing                              |
| redux-immutable-state-invariant    | Warn when Redux state is mutated                                 |
| redux-mock-store                   | Mock Redux store for testing                                     |
| rimraf                             | Delete files and folders                                         |
| style-loader                       | Insert imported CSS into app via Webpack                         |
| webpack                            | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer            | Generate report of what's in the app's production bundle         |
| webpack-cli                        | Run Webpack via the command line                                 |
| webpack-dev-server                 | Serve app via Webpack                                            |
