// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

solution
function domainName(url){

    let firstIndex;
    if(url.indexOf("//") > url.indexOf("www.")){
      firstIndex = url.indexOf("//") + 2
    }
    else if(url.indexOf("//") < url.indexOf("www.")){
      firstIndex = url.indexOf("www.") + 4
     }

    let lastIndex;
    if(url.indexOf("www.") === -1){
      lastIndex = url.indexOf(".")
    } else {
      lastIndex = url.split(".", 2).join(".").length;
      
    }
    return url.slice(firstIndex, lastIndex);
  }

  // solution with brain; 

  function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };