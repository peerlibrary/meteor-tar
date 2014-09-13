Package.describe({
  summary: "Meteor smart package for tar node.js package",
  version: '0.1.20-3',
  name: 'mrt:tar',
  git: 'https://github.com/peerlibrary/meteor-tar.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:tar@0.1.20-3');
});
