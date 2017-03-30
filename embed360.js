function embed360(selectors, aframeSrc) {
  aframeSrc = aframeSrc || "https://cdnjs.cloudflare.com/ajax/libs/aframe/0.5.0/aframe.min.js";
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
    var rotation = el.dataset.rotation || "";
    var iframe = document.createElement('iframe');
    var content = '<!DOCTYPE html>' +
      '<head><title>A photo in aframe in an iframe</title>' +
      '<script type="text/javascript" src="https://cdn.rawgit.com/leemark/777b5ce94bce409b5f208c924bb5878b/raw/4958a8a59a50f18b5f8cbaa00c9209082dd2dfdf/customeventpolyfill.js"><\/script>' +    
      '<script type="text/javascript" src="' + aframeSrc + '"><\/script><\/head>' +
      '<body>' +
      '<a-scene>' +
      '<a-assets>' +
      '<img id="sky" src="' + imgsrc + '">' +
      '</a-assets>' +
      '<a-sky src="#sky" rotation="' + rotation + '"></a-sky>' +
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