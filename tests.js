Tinytest.add('meteor-tar', function (test) {
  var isDefined = false;
  try {
    tar;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "tar is not defined");
});