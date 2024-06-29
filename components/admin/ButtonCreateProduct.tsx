import Link from "next/link"

const ButtonCreateProduct = () => {
  return (
    <>
    <div className="flex flex-col">
        <Link
        href={`/admin/products-list/new`}
        className="bg-amber-400 rounded-lg px-10 py-3 uppercase font-bold cursor-pointer hover:bg-amber-500 text-center"
        >crear producto</Link>
    </div>
    </>
  )
}
export default ButtonCreateProduct