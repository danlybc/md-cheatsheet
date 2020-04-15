//  Module to copy text to clipboard

export const clipboard = {
  /**
   * Function to copy given text to the clipboard
   * @param {string} text A given string to copy
   */
  copy: text => {
    let receiver = document.createElement("input");
    document.getElementsByTagName("body")[0].append(receiver);
    receiver.value = text;
    receiver.select();
    receiver.setSelectionRange(0, 99999);

    document.execCommand("copy");
    receiver.remove();
  }
};
