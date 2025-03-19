// validateHtml.ts
export const validateHtml = (html: string): { isValid: boolean, errorMessage: string | null } => {
  // content is not empty
  if (!html.trim()) {
    return { isValid: false, errorMessage: "HTML is empty." };
  }

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // simple html validation
    const errorNode = doc.querySelector("parsererror");
    if (errorNode) {
      return { isValid: false, errorMessage: "HTML Parsing Error: " + errorNode.textContent };
    }

    // gather all the open and closed tags
    const openTags = html.match(/<([a-z]+)(?:\s[^>]*?)?>/gi);
    const closedTags = html.match(/<\/([a-z]+)>/gi);

    const stack : string[] = []

    for (const tag of openTags!){
      if (tag.match(/<([a-z]+)(?:\s[^>]*?)?>/)){
        stack.push(tag)
      }
    }

    for (const tag of closedTags!){
      if (tag.match(/<\/([a-z]+)>/)){
        stack.push(tag)
      }
    }

    // if there are unclosed tags, catches the error
    if (openTags!.length !== closedTags!.length) {
      return { isValid: false, errorMessage: "Html error: There are unclosed tags." };
    }

    return { isValid: true, errorMessage: null };
  } catch (error) {
    return { isValid: false, errorMessage: "Error validating HTML: " + error };
  }
};
