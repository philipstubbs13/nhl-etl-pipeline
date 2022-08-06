<div align="center">
  <h1>NHL ETL Pipeline</h1>
  
  <p>
    An ETL pipeline that extracts player and team data from the NHL API, transforms the data into a usable source, and then loads the player and team data into CSV files.
  </p>
   
<h4>
    <a href="https://nhl-etl-pipeline.herokuapp.com/">View Demo</a>
  <span> · </span>
    <a href="https://nhl-etl-pipeline.herokuapp.com/">Documentation</a>
  <span> · </span>
    <a href=https://github.com/philipstubbs13/nhl-etl-pipeline/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/philipstubbs13/nhl-etl-pipeline/issues">Request Feature</a>
  </h4>
</div>

<br />

# Table of Contents

- [About the Project](#about-the-project)
  * [Screenshots](#screenshots)
  * [Tech Stack](#tech-stack)
  * [Features](#features)
  * [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Run Locally](#running-locally)
  * [Running Tests](#running-tests)
  * [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## <a name="about-the-project"></a>About the Project

An etl pipeline that extracts, combines, and transforms team and player stats from the NHL API.

There are 2 main pipelines:

* **Team Pipeline** - given a season, this pipeline takes data about a team and outputs the data to a CSV.

* **Player Pipeline** - given a season, this pipeline takes data about a player and outputs the data to a CSV.


### <a name="screenshots"></a>Screenshots

<div align="center"> 
  <!-- <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" /> -->
</div>

### <a name="tech-stack"></a>Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://mui.com/">Material UI</a></li>
    <li><a href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/">React Query</a></li>
    <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
    <li><a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a></li>
    <li><a href="https://jestjs.io/">Jest</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
  </ul>
</details>

### <a name="features"></a>Features

- Vew stats for your favorite NHL teams for a particular season.
- View stats for your favorite NHL players for a particular season.
- Download stats for your favorite NHL teams for a particular season to a CSV file.
- Download stats for your favorite NHL teams for a particular season to a CSV file. 

### <a name="environment-variables"></a>Environment Variables

To run this project, you need to add the following environment variables to your `.env` file directly inside the `nhl-etl-pipeline/frontend` folder of this project.

```bash
BUILD_PATH='../backend/frontendBuild'
```

The `BUILD_PATH` environment variable is the path (relative to the root of the project) where the react app outputs the frontend assets needed to deploy to production. For more information on deployment, see [Deployment](#triangular_flag_on_post-deployment).

## <a name="getting-started"></a>Getting Started

### <a name="prerequisites"></a>Prerequisites

This project uses Node.js. To install Node.js on your system, see <https://nodejs.org/en/>.


### <a name="running-locally"></a>Run Locally

Clone the project.

```bash
  git clone https://github.com/philipstubbs13/nhl-etl-pipeline
```

Go to the project directory.

```bash
  cd nhl-etl-pipeline
```

Install dependencies.

```bash
  npm install
```

Go to the project `frontend` directory.

```bash
  cd nhl-etl-pipeline/frontend/
```

Install frontend dependencies.

```bash
  npm install
```

Start the server.

From the root directory (`nhl-etl-pipeline`) of this project, this command starts the backend server and API on port `5000`. The frontend starts up on port `3000` by default. You can view the frontend in a browser by going to `http://localhost:3000`.

```bash
  cd nhl-etl-pipeline
  npm run dev
```

### <a name="running-tests"></a>Running Tests

To run tests, run the following command in the root directory of this project.

```bash
  cd nhl-etl-pipeline
  npm run test
```

### <a name="deployment"></a>Deployment

To deploy this project, build the frontend assests for production.

```bash
cd nhl-etl-pipeline/frontend/
npm run build
```

This creates a `frontendBuild` folder inside `nhl-etl-pipeline/backend` that contains all the frontend assets needed to deploy the application to production.

Then, deploy project to Heroku.

```bash
  cd nhl-etl-pipeline
  npm run deploy
```

## <a name="contributing"></a>Contributing

Contributions are always welcome!

## <a name="contact"></a>Contact

Phil Stubbs- [@iamPhilStubbs](https://twitter.com/iamPhilStubbs) - philipstubbs13@gmaill.com

Project Link: [https://nhl-etl-pipeline.herokuapp.com/](https://nhl-etl-pipeline.herokuapp.com/)

## <a name="acknowledgements"></a>Acknowledgements

 - [Material UI](https://mui.com/)
 - [react-countup](https://github.com/glennreyes/react-countup)
 - [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
 - [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
 - [export-to-csv](https://mui.com/)

## TypeScript Resources for this Project

* <https://stackoverflow.com/questions/41495658/use-custom-build-output-folder-when-using-create-react-app>
* <https://superuser.com/questions/1421600/heroku-error-enoent-no-such-file-or-directory-stat-app-client-build-index-h>
* <https://stackoverflow.com/questions/39015893/heroku-deploy-error-cannot-find-module-app-index-js>
* <https://stackoverflow.com/questions/39015893/heroku-deploy-error-cannot-find-module-app-index-js>
* <https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change>
* <https://stackoverflow.com/questions/34312252/exclude-property-of-tsconfig-json-is-not-being-respected>
* <https://medium.com/developer-rants/how-to-add-typescript-to-a-node-js-project-1c883e2a73ff>