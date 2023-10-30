const __Words = ["PerformHttpRequest", "GetConvar", "print", "execute", "command", "txAdmin"]
const __foundScripts = []

function printColor(text, color) {
  const __Colors = {
        red: "^1",
        green: "^2",
        yellow: "^3",
        blue: "^4",
        lightblue: "^5",
        purple: "^6",
        white: "^7",
        black: "^8"
  }


  const __Code = __Colors[color] + text;
  console.log(__Code)
}



