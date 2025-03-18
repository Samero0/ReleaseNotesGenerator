export const validateHtml = (html: string): boolean => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "application/xml"); // xml for strict validations
  
      // parser will generate <parsererror>
      const errorNode = doc.querySelector("parsererror");
      if (errorNode) {
        console.error("HTML Parsing Error:", errorNode.textContent);
        return false;
      }
  
      return true; // HTML is valid
    } catch (error) {
      console.error("Error validating HTML:", error);
      return false;
    }
  };
  