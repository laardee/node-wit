'use strict';

describe('lib', () => {
  require('./common').runTests(require('../index'));
});

// require example files for syntax validation with node v4.0

process.env.WIT_TOKEN = 'your_access_token';
process.env.FB_APP_SECRET = 'your_app_secret';
process.env.FB_PAGE_TOKEN = 'your_page_token';
require('../examples/basic');
require('../examples/joke');
require('../examples/messenger');
require('../examples/quickstart');
