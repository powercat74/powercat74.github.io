const technologies = [
  { name: 'Node.js', description: '8+ years', logo: '/public/img/nodejs.svg', url: 'https://nodejs.org' },
  { name: 'ExpressJS', description: '8+ years', logo: '/public/img/express.svg', url: 'https://expressjs.com/' },
  { name: 'Yarn', description: '3+ years', logo: '/public/img/yarn.svg', url: 'https://yarnpkg.com/lang/en/' },
  { name: 'Elastic Search', description: '4+ years', logo: '/public/img/elasticsearch.svg', url: 'https://www.elastic.co/products/elasticsearch' },
  { name: 'Cloud Foundry', description: '5+ years', logo: '/public/img/cloudFoundry.svg', url: 'https://pivotal.io/platform' },
  { name: 'Heroku', description: '7+ years', logo: '/public/img/heroku.svg', url: 'https://heroku.com' },
  { name: 'Redis', description: '3+ years', logo: '/public/img/redis.svg', url: 'https://redis.io/' },
  { name: 'Socket.io', description: '4+ years', logo: '/public/img/socketio.svg', url: 'https://socket.io/' },
  { name: 'Contentful', description: '3+ years', logo: '/public/img/contentful.svg', url: 'https://contentful.com/' },
  { name: 'Kibana', description: '2+ years', logo: '/public/img/kibana.svg', url: 'https://www.elastic.co/products/kibana' },
  { name: 'Rollup.js', description: '3+ years', logo: '/public/img/rollup.svg', url: 'https://rollupjs.org/guide/en' },
  { name: 'Kafka', description: '2+ years', logo: '/public/img/kafka.svg', url: 'http://kafka.apache.org/' },
  { name: 'PostCSS', description: '6+ years', logo: '/public/img/postcss.svg', url: 'https://postcss.org/' },
  { name: 'MongoDB', description: '7+ years', logo: '/public/img/mongo.svg', url: 'https://www.mongodb.com/' },
  { name: 'Babel', description: '6+ years', logo: '/public/img/babel.svg', url: 'https://babeljs.io/' },
  { name: 'Vuejs', description: '1 year', logo: '/public/img/vuejs.svg', url: 'https://vuejs.org' },
  { name: 'RabbitMQ', description: '3 years', logo: '/public/img/rabbitMQ.svg', url: 'https://handlebarsjs.com' },
  { name: 'JS', description: '14+ years', logo: '/public/img/js.svg', url: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm' },
  { name: 'Handlebarsjs', description: '6+ years', logo: '/public/img/handlebars.svg', url: 'https://handlebarsjs.com' },
  { name: 'HTML5', description: '5 years', logo: '/public/img/html5.svg', url: 'https://www.w3.org/' },
  { name: 'CSS3', description: '4+ years', logo: '/public/img/css3.svg', url: 'https://www.w3.org/TR/css-2015/' },
  { name: 'Git', description: '7+ years', logo: '/public/img/git.svg', url: 'https://git-scm.com/' },
  { name: 'GruntJS', description: '6+ years', logo: '/public/img/grunt.svg', url: 'https://gruntjs.com/' },
  { name: 'Webpack', description: '2+ years', logo: '/public/img/webpack.svg', url: 'https://webpack.js.org/' },
  { name: 'BackboneJS', description: '6+ years', logo: '/public/img/backbone.svg', url: 'http://backbonejs.org/' },
  { name: 'Ruby on Rails', description: '3 years', logo: '/public/img/rubyOnRails.svg', url: 'https://rubyonrails.org/' },
  { name: 'SASS', description: '7+ years', logo: '/public/img/sass.svg', url: 'https://sass-lang.com/' },
  { name: 'Cloudflare', description: '8 years', logo: '/public/img/cloudflare.svg', url: 'https://www.cloudflare.com/' },
  { name: 'Docker', description: '4+ years', logo: '/public/img/docker.svg', url: 'https://www.microsoft.com/net/' },
  { name: 'Jenkins', description: '3+ years', logo: '/public/img/jenkins.svg', url: 'https://jenkins.io/' },
];

const projects = [
  { name: 'Enterprise CMS Implementation', description: 'Performed primary technical lead duties for discovery, purchase, design and implementation of large, enterprise-grade content management system.', image: '/public/img/contentful.png', categories: ['kafka', 'rabbitMQ', 'elasticsearch', 'security', 'Node.js', 'microservices', 'cloud pipelines']},
  { name: 'Online Shopping Experience', description: 'Implemented various components within the online shopping experience.  Some components were featured in a Smashing Magazine article shortly after launch.', image: '/public/img/buy-filters.png', categories: ['mobile', 'SPA', 'seo', 'ada', 'cloud pipelines']},
  { name: 'Account Management Portal', description: 'Created initial project template, components and pipeline for the account management portal.  Pair-programmed the initial app in a lab setting, while helping establish and execute the technology and security requirements.', image: '/public/img/account.png', categories: ['mobile', 'security', 'Node.js', 'microservices', 'cloud pipelines']},
  { name: 'GDPR Compliance', description: 'Performed technical leadership roles regarding GDPR compliance applications.', image: '/public/img/privacy.png', categories: ['mobile', 'Node.js', 'cms', 'cloud pipelines', 'high availability']},
  { name: 'Cloud Infrastructure', description: 'Accelerated the migration toward cloud infrastructure for browser-facing applications, allowing for full decommissioning of virtual machines.', image: '/public/img/cloudfoundry.png', categories: ['cloud', 'high availability', 'CI/CD', 'CloudFoundry', 'Kubernetes']},
  { name: 'Marketing Sites', description: 'Developed and maintained several hundred unique marketing sites, microsites, landing pages, global corporate branding sites, and small business websites.', image: '/public/img/burton.png', categories: ['vcs', 'business-focus', 'cms', 'agile']},
  { name: 'IoT Games', description: 'Designed and developed socket-based cycling game measuring a rider\'s power and balance.  This was used at tradeshows, recruiting events and sales meetings to promote the connected nature of products and cycling. <a href="https://www.youtube.com/watch?v=da86q0Xx_FM" target="_blank">Watch Video</a>', image: '/public/img/vectorchallenge.png', categories: ['Node.js', 'socket.io', 'IoT']},
];

export default {
  technologies,
  projects
};
