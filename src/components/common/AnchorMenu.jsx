import SlideButton from "./SlideButton"
import useLocationHash from "../../hooks/useLocationHash";


export default function AnchorMenu({ href, content }) {
  const currentHash = useLocationHash()

  return (
    <a href={href}>
      <SlideButton content={content}
        style={{
          fontWeight: currentHash === href.substring(1) ? 'bold' : 'normal',
          fontStyle: currentHash === href.substring(1) ? 'italic' : 'normal',
        }}
      />
    </a>
  )
}