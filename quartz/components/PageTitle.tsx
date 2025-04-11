import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"


// const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
//   const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
//   const baseDir = pathToRoot(fileData.slug!)
//   // return (
//   //   <h1 class={classNames(displayClass, "page-title")}>
//   //     <a href={baseDir}>{title}</a>
//   //   </h1>
//   // )
//   // INTERACTIVE TYPEWRITER
//   return (
//     <h1 class={classNames(displayClass, "line-1 anim-typewriter")}>
//       <a href={baseDir}>{title}</a>
//     </h1>
//   )
// }

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const isHomePage = fileData.slug === "index" // 👈 updated here!

  return isHomePage ? (
    <h1 class={classNames(displayClass, "line-1 anim-typewriter")}>
      <a href={baseDir}>{title}</a>
    </h1>
  ) : (
    <h1 class={classNames(displayClass, "line-1")}>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

//Interactive Typewriter
PageTitle.css = `

.line-1 {
  margin: 3rem auto 1rem auto; /* center title horizontally */
  display: inline-block;
  font-size: 300%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
}
  
/* Animation */
.anim-typewriter {
  width:0 ;
  animation: 
    typewriter 2s steps(20) 1s 1 normal both,
    blinkTextCursor 1s steps(10) 4 normal both; /* blinks 5 times */
}

@keyframes typewriter {
  from { width: 0; }
  to { width: 8ch; } /* match actual character count */
}

@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}
`
export default (() => PageTitle) satisfies QuartzComponentConstructor
