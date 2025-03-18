export const validateHtml = (html: string): boolean => {
    // content is not empty
    if (!html.trim()) {
      console.error("HTML is empty.");
      return false;
    }
  
    try {

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
  
      // simple html validation
      const errorNode = doc.querySelector("parsererror");
      if (errorNode) {
        console.error("HTML Parsing Error:", errorNode.textContent);
        return false; 
      }
  
      // gather all the open an closed tags
      const openTags = html.match(/<([a-z]+)(?:\s[^>]*?)?>/gi); 
      const closeTags = html.match(/<\/([a-z]+)>/gi); 
  
      // if there are unclosed tags catches the error:
      if (openTags!.length !== closeTags!.length) {
        console.error("There are unclosed tags.");
        return false;
      }
  
      return true;
    } catch (error) {
      console.error("Error validating HTML:", error);
      return false;
    }
  };
  