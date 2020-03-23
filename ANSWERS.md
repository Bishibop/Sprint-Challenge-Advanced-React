- [ ] Why would you use class component over function components (removing hooks from the question)?
  
  You would use class components if the project you're working on already uses
  them (in a legacy codebase for example). Additionally, there are some
  lifecycle events that you have access to in class components that you don't
  have access to with hooks.

- [ ] Name three lifecycle methods and their purposes.

  `componentDidMount` - execute code when a component is first initialized and
  rendered

  `componentDidUpdate - execute code when a component is given new props, state
  changes or you call the method `forceUpdate`

  `componentWillUnmount` - this is for executing code used for cleanup when
  a component is unmounted, e.g. turning off timers or removing event handlers

- [ ] What is the purpose of a custom hook?

  Custom hooks allow us to extract application logic (rather than whole
  subcomponents) out of components for use in other components.

- [ ] Why is it important to test our apps?

  Testing our applications allows us to prevent regressions and change our
  codebase with confidence. Testing drastically reduces the risk of bugs.
  Without extensive testing, even simple changes to a codebase can cause a
  lot of difficult to detect issues.
