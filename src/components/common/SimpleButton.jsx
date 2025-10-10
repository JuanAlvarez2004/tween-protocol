export default function SimpleButton({ text, className, type = "button" }) {

  return (
    <button className={`text-white py-2 px-6 cursor-crosshair hover:scale-105 active:scale-95 bg-black transition max-w-max ${className}`} type={type}>
        {text}
    </button>
  )

}