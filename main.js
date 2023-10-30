const __Words = ["PerformHttpRequest", "GetConvar", "print", "execute", "command", "txAdmin", "xpcall"]
const __foundScripts = []


const __Settings = {

  Enabeld: true,
  ConsoleDetection: true,
  StopServer: false,
  Backdoor_Strings: [
    "cipher-panel",
    "Enchanced_Tabs",
    "helperServer",
    "ketamin.cc",
    "\x63\x69\x70\x68\x65\x72\x2d\x70\x61\x6e\x65\x6c\x2e\x6d\x65",
    "\x6b\x65\x74\x61\x6d\x69\x6e\x2e\x63\x63",
    "MpWxwQeLMRJaDFLKmxVIFNeVfzVKaTBiVRvjBoePYciqfpJzxjNPIXedbOtvIbpDxqdoJR"
  ]

}



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



