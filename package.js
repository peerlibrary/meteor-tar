Package.describe({
  summary: "Meteor smart package for tar node.js package",
  version: '0.1.20-3',
  name: 'peerlibrary:tar',
  git: 'https://github.com/peerlibrary/meteor-tar.git'
});

Npm.depends({
  tar: '0.1.20'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');

  api.export('tar');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:tar', 'tinytest', 'test-helpers'], 'server');

  api.add_files('tests.js', 'server');
});
