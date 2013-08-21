Tinytest.add('meteor-tar', function (test) {
  var isDefined = false;
  try {
    tar;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "tar is not defined");
  test.isTrue(Package.tar.tar, "Package.tar.tar is not defined");
});