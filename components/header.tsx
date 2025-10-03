import Link from "next/link"

export default function Header({ font }: { font: string }) {
  return (
    <header className="py-2 bg-gray-900 ">
      <div className="max-w-[100rem] px-12 mx-auto flex justify-between">
        <Link href="/">
          <h1 className={`uppercase text-yellow-500 text-center py-2 ${font}`}>
            Quick Cart
          </h1>
        </Link>
        <Link
          href="/products/upload"
          className="uppercase text-white text-xl py-2 hover:text-yellow-700"
        >
          Upload {'>'}
        </Link>
      </div>
    </header>
  )
}
