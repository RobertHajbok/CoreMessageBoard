# CoreMessageBoard
Message board test with Angular 4 and ASP.NET Core setup

# About
This is a single-page test application, built with:
  - ASP.NET Core and C# for cross-platform server-side code
  - Angular and TypeScript for client-side code
  - Webpack for building and bundling client-side resources
  - Angular material for layout and styling

This should serve as a starting point for other projects with ASP.NET Core + Angular setup. This project will test some framework-related stuff.

# Features
- Client-side navigation (routing)
- Server-side prerendering. For faster initial loading and improved SEO, your Angular app is prerendered on the server. The resulting HTML is then transferred to the browser where a client-side copy of the app takes over.
- Webpack dev middleware. In development mode, there's no need to run the webpack build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.
- Hot module replacement. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, your Angular app will be rebuilt and a new instance injected is into the page.
- Efficient production builds. In production mode, development-time features are disabled, and the webpack build tool produces minified static CSS and JavaScript files.

# Setup
To set up a project with ASP.NET Core + Angular, you have to follow the steps below:
1) Open Command prompt
2) cd to your projects folder
3) dotnet new --install Microsoft.AspNetCore.SpaTemplates::* (install SPA Templates for ASP.NET Core if you don't have them)
4) mkdir NewAngularProj
5) cd NewAngularProj
6) dotnet new angular (this also works for React or Vue - dotnet new will show all available options)
7) Open project in Visual Studio and you are good to go
