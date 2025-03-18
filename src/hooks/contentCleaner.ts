export const cleanContent = (content: string): string => {
    // delete the literals "\t,\s,\n" , "\t\t..." , " \t "
    const noLiterals = content.replace(/(\\[tsn]){2,}|\\[tsn](?=\S)|\\[tsn]|\\ /g, '');

    // delete unnecessary spaces, tabs, and enters
    const noSpaces = noLiterals.replace(/\s{2,}|\\[tsn] /g, ' ');

    // delete unnecessary backslashes
    const clearContent = noSpaces.replace(/\\/g, '');

    return clearContent;
};
