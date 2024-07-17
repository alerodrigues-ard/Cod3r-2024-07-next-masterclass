import { IconCopyright, IconHeart } from "@tabler/icons-react"

export default function Rodape() {
  return (
    <footer>
      <div className="flex justify-end  items-center gap-2 bg-zinc-700 p-4 text-zinc-400 text-sm">
        <span>
          Desenvolvido por <strong>Alexandre</strong>
        </span>
        <IconCopyright />
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
