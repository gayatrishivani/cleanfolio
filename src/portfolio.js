const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '.',
  title: 'GS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gayatri Shivani',
  role: 'FullStack Developer',
  description:
    `thrive on solving complex problems and building high-performance applications. With expertise in React, Java, Spring Boot, and microservices, I create scalable, efficient solutions while ensuring seamless communication with Kafka. From robust backends to intuitive frontends, I build applications that perform well and scale effortlessly.`,
  resume: 'https://drive.google.com/file/d/1bLbEv26LGj9JtvBQs2x2-NAYR50G0409/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/gayatrishivani',
    github: 'https://github.com/gayatrishivani',
  },
}

const experience = [
  {
    name: 'Tata Consultancy Services (TCS)',
    title:'System Engineer',
    timeStart:'May,2022',
    timeEnd:'Present',
    description_title:'Working as a seinor fullStack developer in SBI kiosk a payment applicaton playing as a key task performer.',
    description: [
      'Responsible for making the transactions work in the production environment.',
      'Devloping modules which the client requires.',
      'Leading a small team size of 3.'
    ],
    techStack:[
      'java',
      'SpringBoot',
      'java microservices',
      'kafka MQ',
      'Apache Ignite',
      'PSQL',
      'ReactJS'
    ],
    image:'/img/tcs.png'
  },

  {
    name: 'CodersArts',
    title:'Python Intern',
    timeStart:'Dec,2021',
    timeEnd:'May,2022',
    description_title:'Worked as python developer intern. excelling in machince learning and Deep learning.',
    description: [
      'Created employment management systems using Django framework and reactJS using PSQL database.',
      'Deployed the application in amazon web service (AWS) with elasticBeanstack.',
      'Applied machine learning/artifitial intelligance in analysis dataset of the company.',
      'In addition used d3js in displaying the dataset analysis.'
    ],
    techStack:[
      'python',
      'Machine Learning',
      'Deep Learning',
      'Django'
    ],
    image:'/img/codersArts.png'
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Ichoose',
    description:
      'An ecommerce web application, using django framework and react-native framework. The application is build in mind for small scale startup-bussiness, where the retail owner gets loan using pooling techique of customer. while customer get benifit of loan intrest and stocks raising. Customer can directly ask the user for a product customisation.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/gayatrishivani/ichoose-ead-project-sem6',
    livePreview: 'https://github.com/gayatrishivani/ichoose-ead-project-sem6',
  },
  {
    name: 'Storify',
    description:
      'A wattpad/magazine web application web application where the author when on mindblock can use our new feature of generating new mutiple scenarios to continue a story. Used Django framework to develop the website',
    stack: ['Django', 'Html/css/JS', 'MongoDB'],
    sourceCode: 'https://github.com/gayatrishivani/Storify-project-sem5',
    livePreview: 'https://github.com/gayatrishivani/Storify-project-sem5',
  },
  {
    name: 'Sudoku',
    description:
      'A small sudoku game developed using python',
    stack: ['Python'],
    sourceCode: 'https://github.com/gayatrishivani/Sudoku-python-project-sem2',
    livePreview: 'https://github.com/gayatrishivani/Sudoku-python-project-sem2',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Java Microservices',
  'Kafka MQ',
  'SpringBoot',
  'Apache Ignite',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'MongoDB',
  'PSQL',
  'Oracle',
  'Git',
  'Junit',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gayatrishivani123@gmail.com',
}

export { header, about, projects, skills, contact , experience}
