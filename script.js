document.addEventListener("DOMContentLoaded", () => {
    // Define keywords to make bold
    const keywords = [
      "ResNet50",
      "Deep Learning",
      "Class Weights",
      "Overfitting",
      "Regularization",
      "Dropout",
      "AdamW",
      "OneCycleLR",
      "Image Augmentation",
      "Fine-tuning"
    ];
  
    // Function to wrap keywords in bold span
    const makeKeywordsBold = (node) => {
      if (node.nodeType === 3) { // Text node
        const text = node.nodeValue;
        keywords.forEach((keyword) => {
          const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
          if (regex.test(text)) {
            const span = document.createElement("span");
            span.innerHTML = text.replace(
              regex,
              '<span class="bold">$1</span>'
            );
            node.replaceWith(span);
          }
        });
      } else if (node.nodeType === 1 && node.childNodes) { // Element node
        node.childNodes.forEach((child) => makeKeywordsBold(child));
      }
    };
  
    // Apply the makeKeywordsBold function to all content in the body
    document.body.childNodes.forEach((child) => makeKeywordsBold(child));
  });
  