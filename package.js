Package.describe({
  summary: "Meteor smart package for tar node.js package",
  version: '1.0.3_1',
  name: 'peerlibrary:tar',
  git: 'https://github.com/peerlibrary/meteor-tar.git'
});

Npm.depends({
  tar: '1.0.3'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0.2.1');

  api.export('tar');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:tar', 'tinytest', 'test-helpers'], 'server');

  api.add_files('tests.js', 'server');
});
