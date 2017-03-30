function embed360(selectors) {
  var embed360 = {};
  var elementList = document.querySelectorAll(selectors);
  for (var i = 0; i < elementList.length; ++i) {
    var el = elementList[i];
    var img = el.querySelector('img');
    if (img) {
      makeIframe(el, img);
    }
  }

  function makeIframe(el, img) {
    var imgsrc = img.src;
    el.removeChild(img);
    var iframe = document.createElement('iframe');
    var content = '<!DOCTYPE html>' +
      '<head><title>A photo in aframe in an iframe</title>' +
      '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/aframe/0.5.0/aframe.min.js"><\/script><\/head>' +
      '<body>' +
      '<a-scene>' +
      '<a-assets>' +
      '<img id="sky" crossorigin src="' + imgsrc + '">' +
      '</a-assets>' +
      '<a-sky src="#sky"></a-sky>' +
      '</a-scene>' +
      '</body></html>';
    iframe.setAttribute('allowfullscreen', 'yes');
    iframe.setAttribute('allowvr', 'yes');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    el.appendChild(iframe);
    iframe.contentWindow.document.open('text/html', 'replace');
    iframe.contentWindow.document.write(content);
    iframe.contentWindow.document.close();
  }
}