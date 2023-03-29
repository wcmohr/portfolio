module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Will Mohr',
    // Main Site Title
    title: `Will Mohr | Data Scientist`,
    // Description that goes under your name in main bio
    description: `I am dedicated to delivering actionable solutions to problems through effective computation.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/wcmohr`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/willcmohr/`,
    // Content of the About Me section
    about: `The thrill of arriving at deeper understandings of methodologies as well as the sound application of tools to better grapple with the challenges inherent in making use of data inspires me to be continuously learning, applying, and better understanding computational techniques.  I come from an accounting background that has taught me valuable skills in project management.  I also benefit from statistical know-how honed through the successful completion of five Society Of Actuaries examinations.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'China Study',
        description:
          'A deep dive into one of the most monumental health datasets ever compiled.',
        link: 'https://github.com/wcmohr/ChinaStudy',
      },
      {
        name: 'Tennis Predictions',
        description:
          'Comparing the predictive ability of three metrics for player ability.',
        link: 'https://github.com/wcmohr/TennisPredictions',
      },
      {
        name: 'Reddit Classification',
        description:
          'Classifying between the r/Science and r/Technology subreddits.',
        link: 'https://github.com/wcmohr/RedditClassification',
      },
      {
        name: 'Ames, IA Housing Insights',
        description:
          'Determining actionable drivers of house value.',
        link: 'https://github.com/wcmohr/AmesHousing',
      },
      {
        name: 'College Entrance Exam Analysis',
        description:
          'Exploring the relationship between statwide average scores and participation rates.',
        link: 'https://github.com/wcmohr/ScholasticExams',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    // experience: [
    //   {
    //     name: 'Acme Corp',
    //     description: 'Full-Stack Developer, February 2020 - Present',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Globex Corp',
    //     description: 'Full-Stack Developer, December 2017 - February 2020',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Hooli',
    //     description: 'Full-Stack Developer, May 2015 - December 2017',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // Optional: List your skills, they must have `name` and `description`.
  //   skills: [
  //     {
  //       name: 'Languages & Frameworks',
  //       description:
  //         'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
  //     },
  //     {
  //       name: 'Databases',
  //       description: 'MongoDB, PostreSQL, MySQL',
  //     },
  //     {
  //       name: 'Other',
  //       description:
  //         'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
  //     },
  //   ],
  // },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
