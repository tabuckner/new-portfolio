// tslint:disable: max-line-length
import { ResumeItemModel } from '../interfaces/resume-item-model';

export const RESUME_ITEMS: ResumeItemModel[] = [
  {
    businessName: 'Open Labs, LLC',
    position: 'RMA Technician',
    years: '2012 - 2014',
    description: {
      // simple: 'In college I was recommended for an internship at the Austin Based music technology company Open Labs.',
      items: [
        'Used downtime and after hours to help QA their Interactive Music Creation Software, Stagelight (now Roland Zenbeats)',
        'Authored deployment scripts to help quickly churn out new hardware builds',
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'Client Satisfaction Professional',
    years: 'February 2014 - April 2014',
    description: {
      // simple: 'owner town thou came rule someone also earth period drew mainly body corner truth contain land game act wolf throughout shut personal reader smallest older possible interest sure buried remain serious sail east quite peace facing cannot beauty horse such species buy human widely nearest little habit entirely fruit how stand thee climate closely slabs express wear object leave molecular complete art boat railroad ask if afternoon this signal fresh pencil poor living',
      items: [
        'One of three team leads for a training class of roughly 20',
        'Developed a handful of web-based tools for sharing techniques/tips/tricks',
        'Quickly promoted to new position based on performance',
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'Service Dispatch Coordinator',
    years: 'May 2014 - March 2015',
    description: {
      simple: 'Developed a web based tool that:',
      items: [
        'Generated 1.1 million in revenue for 2016',
        'Streamlined a sales incentive process by removing unnecessary steps pain points',
        'Removed the need for all paperwork and moved form entry online (yay trees!)',
        'Delivered status update emails on each phase of the program cycle',
        'Delivered a periodic emails reports with regional granularity'
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'Project Coordinator',
    years: 'March 2015 - September 2016',
    description: {
      items: [
        'Consistently averaged a ‘post-ink’ margin increase of 30%',
        'Automated the account onboarding process for my account portfolio',
        'Continued maintenance of the sales incentive web tool',
        'Rollout of sales incentive web tool to Project Management department'
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'AR Specialist',
    years: 'September 2016 - May 2017',
    description: {
      // simple: 'shape regular tomorrow luck weight congress shop grown score nearby but cage over total pen music fill southern pound aboard color gun using valuable studying women necessary sang shown mighty question stove rhyme brief dance wide personal examine outside sing setting born fairly through beautiful sentence hidden thick luck gain twelve musical finest fairly onto problem castle topic cabin correct yellow fog darkness blanket dangerous molecular act told apple brother card cat universe',
      items: [
        'Developed Excel VBA macro for auditing monthly billing invoices',
        'Worked with Business Development department leads to automate our most common billing scenarios',
        'Developed VBA macros for building customer facing invoice documents',
        'Trained new hires'
      ]
    }
  },
  {
    businessName: 'The Appraisal Lane, LLC',
    position: 'Employee',
    years: 'May 2017 - September 2017',
    description: {
      // simple: 'say toy park behavior mouth screen star practice great fierce cross product both shout root metal deeply whale waste death roof wolf mission triangle species brown free canal seldom dirty refused measure toward book asleep train underline lie leg terrible greatly lost toy speech using worker please tea low wrapped deeply correctly title rice won slightly refused tree receive story alike foreign made solid rising breathe hard particular bright wait egg hall tune',
      items: [
        'Developed automated E2E test suites for new retail product',
        'Developed and Deployed an E2E test result notification Hipchat (and later) Slack bot',
        'Developed and Deployed a browser extension that augmented our internal appraisal web app',
        'Created landing pages for industry events',
        'Updated and created new email templates for our core product',
        'Automated our customer onboarding process',
        'Developed CLI tool for automating End of Sprint metrics and demos',
        'Bootstrapped the Support wing of The Appraisal Lane',
      ]
    }
  },
  {
    businessName: 'The Appraisal Lane, LLC',
    position: 'Front End Developer',
    years: 'September 2017 - June 2019',
    description: {
      // simple: 'film amount charge possible creature scientific process sudden lungs obtain back nice rubber school giant include line solve guess rich screen chose smell suggest weak smallest dance roll replied deal recall behavior is measure per south boat unknown near wife garage lot fell dig complex rope crew ancient lovely effect can see use yet cake finger wool night lion directly sea stuck surface air situation unknown did every moving older trap point garden',
      items: [
        'Core contributor for Retail and Acquisition WebApp platforms',
        'Core contributor for web based disposition platform',
        'Authored BE service for delivering fully responsive client-agnostic web content',
        'Refactored Retail web app layout for responsive design',
        'Authored photo upload service for retail web app',
        'Implemented live chat service in retail web app',
        'Implemented live progress updates in retail platform'
      ]
    }
  },
  {
    businessName: 'Datical, Inc',
    position: 'Front End Developer',
    years: 'June 2019 - Present',
    description: {
      // simple: 'stop equal fully steady fish plant frozen animal plain great play take sale well needed hearing music dot church neighborhood political label became expect hot see element sail stepped sell decide knew two volume guard people helpful combination help castle camp short leg taste roll aside basic giant village jet snow fairly guess island putting deep nor weigh jack began heart bone sky for southern cabin hundred shout spend zoo snake would thrown',
      items: [
        'Migrated legacy Angular app to Angular 8',
        'Refactored WebApp to see an 81% improvement in First Contentful Paint',
        'Authored a number of libraries (some of which were open sourced) to augment @angular/material component behaviors',
        'Designed and built new MVP offering for centralized status and reporting',
        'Key contributor to new architectural platform instrumental in our rebranding as Liquibase',
      ]
    }
  },
];
