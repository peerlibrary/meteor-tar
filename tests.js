Tinytest.addAsync('meteor-tar', function (test, onComplete) {
  var isDefined = false;
  try {
    tar;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "tar is not defined");
});