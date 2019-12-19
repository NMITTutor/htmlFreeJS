# htmlFreeJS
Exploring html free JS in the web browser.

Interesting relationship between React.js ( https://blog.risingstack.com/the-history-of-react-js-on-a-timeline, https://en.wikipedia.org/wiki/React_(web_framework)) and Flutter(https://flutter.dev/), Stateful or Stateless components aka widgets. React.js Virtual Dom (See React.js https://youtu.be/XxVg_s8xAms, about patterns) feels like a variant of the Presentation Model pattern - see a good discussion on the that here: https://docs.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern.   See here about Flutter Widgets Stateless and Stateful (https://flutter.dev/docs/development/ui/widgets-intro), see here about some State in React.js, https://reactjs.org/docs/state-and-lifecycle.html. 

The question gets broader. Can we express features of a range of appraoches taken with webby techs, using vanilla or perhaps the curernt JavaScript - ES6? Ok now we move onto thinking about application patterns. Can MVC or MVMM (PM) design patterns be expressed in ES6? So far myJSApp.js is a quick DOM explore - yup you can create DOM nodes and add them to the DOM and associate event handlers with them. What is next? Can I work an MVC in ES6? Is that next? 

React seems to boil down to minimizing DOM mutations, by comparing current Render with new render to run only those changes. It looks like a React property by side effect ALWAYS triggers the Render method - that does the minimal DOM mutatation. That really feels more and more like an implementation of a presentation model approach. 

Thinking on React JSX - that seems to be a nice sugar - BUT reverts back to "Is it ugly?" declarative markup. The component's "user experience" render is to look like this chunk of JSX , i.e. a tag based markup HTML style syntax, that then gets "transformed" in React to React DOM edits. A good question is "Is that REALLY more efficient? Where is the complexity analysis that proves it?". In React there seems to be an ongoing theme that immutability is good - it kind of works well in functional and parallel computing - hence we should consider, not "mutating" be destroying and producing a completely new "render" or artifact - in that way we get around mutation. That seems to be the arguement for the approach in React - a kind of finer grain replacement.

This leads to the thread on Clojure(js) that is functional programming and definitely takes a similar approach to React in its strategy for working in an immutable universe - new items are created for every new value. Clojure https://youtu.be/0if71HOyVjY, https://clojure.org/reference/transients , https://youtu.be/wASCH_gPnDw  , https://youtu.be/-XzSGPJRBsw. Clojure Web https://youtu.be/_LghX4oDWcY . https://youtu.be/jOX0uK3jsbI , Clojure and React https://youtu.be/x6z2-P1MpUw. 

 Is having a go at implmenting a Virtual Dom presentation model next? Here is a story about REACT's VirtualDOM https://stackoverflow.com/questions/21109361/why-is-reacts-concept-of-virtual-dom-said-to-be-more-performant-than-dirty-mode
 For me it really only makes sense that the VirtualDOM is somehow faster if we are dealing with a particular approach to server side rendering. The aricle contains a nice comparison of different implementations of the VirtualDOM in different libraries. 

 












