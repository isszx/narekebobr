function MapInit() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3AWvo4lXmCsN9Y9MBKu2bA5yOmve97Ciuj&amp;source=constructor';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.frameBorder = 0;
  document.querySelector('#map').innerHTML = '';
  document.querySelector('#map').appendChild(iframe);
}
MapInit();
