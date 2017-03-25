// Default installation of storyshots@3.2.2 would fail with SyntaxError:
// Unexpected token import, check out following issue to track progress on root
// cause fix:
// https://github.com/storybooks/storyshots/issues/71

// Currently we workaround it by converting this config file to language which
// Node.js would understand without Babel, i.e. we use require instead of
// import.

const { configure } = require('@kadira/storybook');

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
