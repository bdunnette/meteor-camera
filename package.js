Package.describe({
  name: "bdunnette:camera",
  summary: "Photos with one function call on desktop and mobile.",
  version: "1.1.4",
  git: "https://github.com/bdunnette/meteor-camera"
});

Cordova.depends({
  "org.apache.cordova.camera": "0.3.2"
});

Package.onUse(function (api) {
  api.export('MeteorCamera');
  api.use(["templating", "session", "ui", "blaze", "less", "reactive-var", "mizzao:bootboxjs@4.3.0"]);
  api.versionsFrom("METEOR@0.9.2");
  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles("camera.less", ["web.browser"]);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
});