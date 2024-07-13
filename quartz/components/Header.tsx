import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

// Header.css = `
// /* Google Fonts */
// @import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

// /* Global */
// html{
//   min-height: 100%;
//   overflow: hidden;
// }
// body{
//   height: calc(100vh - 8em);
//   padding: 4em;
//   color: rgba(255,255,255,.75);
//   font-family: 'Anonymous Pro', monospace;  
//   background-color: rgb(25,25,25);  
// }
// .line-1{
//     position: relative;
//     top: 50%;  
//     width: 24em;
//     margin: 0 auto;
//     border-right: 2px solid rgba(255,255,255,.75);
//     font-size: 180%;
//     text-align: center;
//     white-space: nowrap;
//     overflow: hidden;
//     transform: translateY(-50%);    
// }

// /* Animation */
// .anim-typewriter{
//   animation: typewriter 4s steps(44) 1s 1 normal both,
//              blinkTextCursor 500ms steps(44) infinite normal;
// }
// @keyframes typewriter{
//   from{width: 0;}
//   to{width: 24em;}
// }
// @keyframes blinkTextCursor{
//   from{border-right-color: rgba(255,255,255,.75);}
//   to{border-right-color: transparent;}
// }`

export default (() => Header) satisfies QuartzComponentConstructor
