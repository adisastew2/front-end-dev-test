# front-end-dev-test

To start up this project
  1. Run npm install
  2. Run npm start
  3. Navigate to local host provided by the server after running npm start

Write up 
  Q: What you technologies you used and why (if you only used html, css, and js please explain any templates or frameworks you may have used i.e. bootstrap)

  A: I chose to incorporate React because the component structure aids for reusability as an application grows and wanted to benefit from the virtual DOM and react developer tools.  
  I also used a dependency called react slick for my carousel component, animate.css for animations and react bootstrap for its grid system

  Q: Any struggles you faced when developing with technology you chose 

  A: When trying to incoporate react I realized that for some reason the Javascript was not bundling, but after careful review of the given webpack I discovered that the output was set as app.js (which should only be the entry point) as opposed to the bundle.js file.  This solved my problem.  
  I also realized that animations from animate.css are triggered as soon as the page loads, as opposed to when a component is visible. This caused the animations to occur before the 
  user is likely to see it.

  Q: What you enjoyed the most and why

  A: I enjoyed the challenge and that some things were seemingly thrown in to trip me up(webpack output) and others intentionally vague (buttons with no instuction on function).
  The freedom in the challenge made it exciting.
