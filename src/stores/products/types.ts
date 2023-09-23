export type ProductsType = SingleProductType[]

export type SingleProductType = {
  id: number
  title: string
  price: number
  description: string
  category: CategoryType
  images: string[]
}

type CategoryType = {
  id: string
  image: string
  name: string
}