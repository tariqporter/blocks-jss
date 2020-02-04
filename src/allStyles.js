import jss from "jss";

const sheet = jss
  .createStyleSheet(
    {
      // "button" is a rule name; a class gets generated.
      button: {
        width: 100,
        height: 100
      }
    },
    { media: "print" }
  )
  .attach();

console.log(sheet);
