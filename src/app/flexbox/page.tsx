import Caixa from "@/components/Caixa"
import Pagina from "@/components/template/Pagina"
import Link from "next/link"

export default function Flexbox() {
  return (
    <Pagina>
      <div className="h-96 w-96">
        <h1>Flexbox</h1>
        <div
          className="
        h-full
        flex 
        justify-around
        items-start
        gap-5
        "
        >
          <Caixa texto="#1" className="w-24" />
          <Caixa texto="#2" className="flex-grow" />
          <Caixa texto="#3" className="w-20" />
        </div>
      </div>
    </Pagina>
  )
}
