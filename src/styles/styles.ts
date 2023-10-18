const styles = {
  gradient: "bg-gradient-to-br from-gradient-from to-gradient-to",
  marginHelper: "mx-5 lg:mx-0",
  paddingHelper: "px-5 lg:px-4",
  container: "max-w-[1200px] antialiased mx-auto",
  squareAbsolute: `
    absolute 
    inset-0 
    [mask-image:linear-gradient(0deg,#ffffff1a,#ffffff80)] 
    `,
  squareBackground: "bg-square",
  glassomophic:
    "bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10",
} as const;

export default styles;
