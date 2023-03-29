import { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="border-b border-gray-200 pb-6">
        <h1 class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight py-6">
          About
        </h1>

        <p class="text-gray-600">
          I have over 7 years of software engineering experience. I have a
          passion for solving problems and I am self-motivated to continuously
          learn and develop new skills.
        </p>
      </div>
      <div class="border-b border-gray-200 pb-6">
        <h3 class="text-xl font-bold leading-7 sm:truncate sm:text-2xl sm:tracking-tight py-6">
          Key Skills & Competencies
        </h3>

        <p class="text-gray-600">
          Java, Spring, Cucumber, JavaScript, TypeScript, Kafka, MYSQL, OpenAPI,
          Docker, Material UI, Emotion, Styled Components, React, Redux,
          Node.js, SCSS, Tailwind, CSS, HTML, Git, Jest, Auth0, Gatling,
          Angular, webpack, Rollup, Vite, Qwik, Bitbucket, Github, GitLab,
          Spectral, Postman, Redocly, Gatsby, GCP, AWS, PagerDuty, Slack, Jira,
          Miro, Cypress
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold leading-7 sm:truncate sm:text-2xl sm:tracking-tight py-6">
          Professional Experience
        </h3>
        <div class="pb-8">
          <p>
            <span class="font-bold">BetterCloud, LLC</span> - Atlanta GA
          </p>
          <p class="mb-4">August 2019 - Current</p>
          <p class="text-gray-600">
            I currently work on a large Sass application management and security
            platform. I have worked on multiple parts of the application which
            span from the UI, multiple Back-end micro services, internal systems
            used for tooling and engineering support teams. From this work I
            have gained lots of experience with transitioning roles and being
            apart of multiple engineering teams. I have also gained a lot of
            experience working with 3rd party APIs and how to integrate them
            into different technology stacks.
          </p>
          <div class="mt-4 relative pl-[15px]">
            <span
              class="absolute top-0 left-0 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <p>
              <span class="italic font-bold">Software Engineer 3</span>
            </p>
            <p class="mb-4">January 2022 - Current</p>
            <ul class="list-disc list-inside space-y-4 text-gray-600">
              <li>
                Worked on a specialized team dedicated to building tooling and
                automation for creating a API-first approach to building APIs.
                This included using tools such as OpenAPI, Spectral, 42 Crunch,
                Redocly, Postman, Java and Spring.
              </li>
              <li>
                Designed and implemented a Java error handling framework as a
                Spring library that engineering teams utilize when building
                APIs.
              </li>
            </ul>
          </div>
          <div class="mt-4 relative pl-[15px]">
            <span
              class="absolute top-0 left-0 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <p>
              <span class="italic font-bold">Software Engineer 2</span>
            </p>
            <p class="mb-4">December 2020 - January 2022</p>
            <ul class="list-disc list-inside space-y-4 text-gray-600">
              <li>
                As part of a team, I played a key role in the reconstruction of
                the asset file ingestion process for BetterClouds' Box
                integration. This required the development and maintenance of
                several Spring microservices and extensive use of Kafka.
              </li>
              <li>
                Worked on a number of internal application support teams. Main
                day to day duties were spent working on high to medium priority
                bug tickets. This included being on a 24hr rotational call
                schedule to monitor and troubleshoot alerts to improve
                application stability and prevent incidents. This work spanned
                across multiple Spring microservices and other internal tooling
                maintained by engineering teams.
              </li>
            </ul>
          </div>
          <div class="mt-4 relative pl-[15px]">
            <span
              class="absolute top-0 left-0 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <p>
              <span class="italic font-bold">Software Engineer</span>
            </p>
            <p class="mb-4">August 2019 - December 2020</p>
            <ul class="list-disc list-inside space-y-4 text-gray-600">
              <li>
                Lead React Front-end development for adding BetterCloud's
                OneLogin native integration. This included technical planning
                and working with product on a deliverable timeline. Was the
                first successful conversion of a custom integration to a native
                integration, This process was documented and adopted by other
                teams that were responsible for converting other native
                integrations.
              </li>
              <li>
                Lead React Front-end development for adding Dropbox as an IDP
                for registration and login. Also played a pivotal role in
                updating the Spring microservices. This included technical
                planning and execution of Front-end work, adding new Auth0
                social connections and updating multiple core Spring
                microservices.
              </li>
            </ul>
          </div>
        </div>
        <div class="pt-6 pb-8 border-t border-gray-200">
          <p>
            <span class="font-bold">
              Dick Sporting Goods (Blue Sombrero, LLC)
            </span>
            - Atlanta GA
          </p>
          <p class="mb-4">December 2017 - August 2019</p>
          <p class="text-gray-600">
            Worked on an initiative to rewrite a monolithic legacy youth sports
            registration application to a modern event-driven, service oriented
            architecture, using .NET Core & Angular.
          </p>
          <div class="mt-4 relative pl-[15px]">
            <span
              class="absolute top-0 left-0 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <p class="italic font-bold">Senior Software Engineer</p>
            <p class="mb-4">December 2017 - August 2019</p>
            <ul class="list-disc list-inside space-y-4 text-gray-600">
              <li>Lead Angular upgrade from 2 to 5.</li>
              <li>Lead Angular upgrade from 5 to 6.</li>
              <li>Completed C# training.</li>
              <li>
                Created an Angular shared component library that was used by
                multiple development teams.
              </li>
              <li>
                Helped and lead the creation of the companies first style guide
                that was an interactive Angular app. It helped engineers and the
                UX team keep branding and UI elements consistent. Similar to
                https://material.angular.io
              </li>
              <li>
                Helped rebuild legacy ASP.NET Core microservices to event-driven
                architecture utilizing RabbitMQ and the entity framework.
              </li>
            </ul>
          </div>
        </div>
        <div class="pt-6 pb-8 border-t border-b border-gray-200">
          <p>
            <span class="font-bold">Cox Media Group</span> - Atlanta GA
          </p>
          <p class="mb-4">February 2014 - November 2017</p>
          <p class="text-gray-600">
            When I first started I was responsible for taking over Rare.us
            website development from a contracted, outsourced company in
            Chicago. This involved becoming the sole developer, leading all
            technical new builds and maintenance on the website for 2+ years.
            During this time, I had responsibility for all development, design,
            architecture, maintenance, feature deploys, 3rd party ad control,
            and analytics. From the website’s success, a subsidiary company,
            Fans 1st LLC, was formed under CMG, growing from 5 employees to over
            50. After this I became part of an innovation team of developers,
            designers and product managers that were responsible for creating
            new technology features for different brand websites and
            applications.
          </p>
          <div class="mt-4 relative pl-[15px]">
            <span
              class="absolute top-0 left-0 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <p class="italic font-bold">Senior Software Engineer</p>
            <p class="mb-4">November 2015 – November 2017</p>
            <ul class="list-disc list-inside space-y-4 text-gray-600">
              <li>
                Built a video wrapper API using Node.js, Express, Babel, ES6,
                React and Webpack. This API ties into different 3rd party APIs
                such as Facebook, YouTube, Rumble and Anvato for tracking video
                data. This video wrapper is used to track video analytic data
                across all Fans 1st Media brand sites and is also starting to be
                used across all of CMG. It tracks user interactions with the
                video player, video watching percentage and 3rd party API
                functions that are used to help track video data.
              </li>
              <li>
                Learned Python, with no prior experience, to help build out a
                data dashboard of Google analytics data for sessions and page
                view per sessions. This involved tapping into 5 different brand
                websites to access the Google analytics data from the Google
                Analytics API, storing this data into multiple Mongo databases
                and then using Jinja 2 to display the data in a dashboard
                format. (December 2016
              </li>
              <li>
                Worked overtime with the design team to help implement brand
                design architecture and lead development for the first
                all-digital awards experience to honor 2016s best in country
                music. Using JavaScript and browser cookies, I created a voting
                polling system that was used to track votes for multiple
                musicians in multiple categories over a three to four week
                period. To accommodate a smooth voting experience, a series of
                JavaScript modals would allow users to seamlessly vote multiple
                times and share each vote to a variety of different social
                channels without a page load. These results were tallied
                together to award country music artists, such as Blake Shelton,
                their perspective awards per the award category. (2016)
              </li>
            </ul>
          </div>

          <div class="mt-4 relative pl-[15px]">
            <span
              class="absolute top-0 left-0 -ml-px h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></span>
            <p>
              <span class="italic font-bold">Software Engineer</span>
            </p>
            <p class="mb-4">February 2014 – November 2015</p>
            <ul class="list-disc list-inside space-y-4 text-gray-600">
              <li>
                Took over the development from a 3rd party vendor and was the
                sole developer for 2+ years. Once the site achieved major
                success, additional developers and supporting team was built up.
              </li>
              <li>
                Helped Rare.us go from hundreds of page views, to thousands, and
                then to over 100,000 unique visits per day.
              </li>
              <li>
                From the success of the website this helped form Fans 1st LLC
                which is a subsidiary company of CMG.
              </li>
              <li>
                Lead multiple initiatives to decrease page load times by
                removing legacy PHP, JavaScript and CSS.
              </li>
              <li>
                Helped gather data and analytics from Google analytics A/B
                testing.
              </li>
              <li>
                Used PHP and JavaScript to build back-end admin UI components,
                like an easy drag and drop list of authors to attach or remove
                from an article.
              </li>
              <li>
                Used PHP, JavaScript and HTML5 to build many front-end features
                like content sliders, infinite scrolling, sharing widgets, and
                subscribe forms.
              </li>
            </ul>
          </div>
        </div>
        <div class="mb-10">
          <h3 class="text-xl font-bold leading-7 sm:truncate sm:text-2xl sm:tracking-tight py-6">
            Education
          </h3>
          <p>
            <span class="font-bold">Saint Leo University,</span> St. Leo,
            Florida
          </p>
          <p>
            Bachelor of Arts in English (Specialization in Creative Writing),
            May 2006
          </p>
          <p class="italic">NCAA Men’s Soccer 2003 – 2006 (SSC Title 2005)</p>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "About",
};
