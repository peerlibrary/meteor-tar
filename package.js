Package.describe({
  summary: "Meteor smart package for tar node.js package"
});

Npm.depends({
  tar: "0.1.17"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['tar', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});