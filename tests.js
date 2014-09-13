Tinytest.add('tar', function (test) {
  var isDefined = false;
  try {
    tar;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "tar is not defined");
  test.isTrue(Package['peerlibrary:tar'].tar, "Package.peerlibrary:tar.tar is not defined");
});
