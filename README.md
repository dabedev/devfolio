# devfolio - Full Stack Web Developer

This is a README guide on how to set up, build, and deploy your full stack web developer portfolio using Vite, React, and Vercel.

## Prerequisites

Before proceeding with the setup, make sure you have the following software installed on your machine:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/)

## Setup

1. Clone the repository:

```sh
git clone https://github.com/dabedev/devfolio.git
cd portfolio
```

1. Install dependencies:

```sh
npm install
```

3. Configure your portfolio:
   - <del>Open the src/config.js file and update the necessary information such as your name, skills, projects, etc.</del> [NOT YET]
   - Customize the portfolio components in the `src/` directory to match your design and content preferences.

## Development Mode

To run the portfolio in development mode, use the following command:

```sh
npm run dev
```

This will start the development server, and you can access the portfolio at `http://localhost:5173`.

## Building for Production

To build the portfolio for production, use the following command:

```sh
npm run build
```

The optimized and minified files will be generated in the `dist` directory.

## Deploying to Vercel

1. Sign up for a Vercel account at [vercel.com](https://vercel.com) if you haven't already.

2. Install the Vercel CLI globally:

```sh
npm install -g vercel
```

3. Login to Vercel from the command line:

```sh
vercel login
```

4. Deploy your portfolio to Vercel:

```sh
vercel --prod
```

This command will guide you through the deployment process, and once completed, it will provide you with the URL of your deployed portfolio.

## TODO

* [ ] Make the `src/config.js` file with texts, information, projects, skills, and more to populate the website.

## About the Portfolio

The full stack web developer portfolio showcases my skills, projects, and experience. It is built using Vite as the build tool, React for the frontend, and integrates with various backend technologies. The portfolio includes sections such as:

- **About Me**: A brief introduction highlighting my background, experience, and skills.
- **Projects**: A collection of my notable projects, including descriptions, technologies used, and links to live demos or repositories.
- **Skills**: An overview of my technical skills, including programming languages, frameworks, databases, and other relevant technologies.

Feel free to customize the portfolio to reflect your own experience, skills, and projects.

## Additional Customizations

You can further customize the portfolio by exploring the different configuration files and components. Additionally, you can modify the styling using CSS or a CSS framework of your choice.

For detailed documentation on Vite, React, and Vercel, please refer to their official websites:

- Vite: [vitejs.dev](https://vitejs.dev/)
- React: [reactjs.org](https://reactjs.org/)
- Vercel: [vercel.com/docs](https://vercel.com/docs)

Happy coding and best of luck with your full stack web developer portfolio!
