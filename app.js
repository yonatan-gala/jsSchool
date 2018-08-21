// Code snippets will be included below.

// simple function to include JS partials.
// it creates multiple <scripts> , it is a temp solution per now.
// TODO: get rid of this when i learn how.
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

include('js/variables.js');
