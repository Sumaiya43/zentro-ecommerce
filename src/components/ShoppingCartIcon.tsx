import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className="relative">
        <ShoppingCart className="w-4 h-4 text-gray-600" />
        <span className="absolute -top-3 -right-3 w-4 h-4 bg-amber-400 rounded-full text-sm text-gray-600 flex items-center justify-center font-medium">0</span>
    </Link>
  )
}

export default ShoppingCartIcon