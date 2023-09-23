export type ProductsType = {
  id: number
  title: string
  price: number
  description: string
  category: Pick<CategoryType, 'id' | 'name' | 'image'>
  images: string[]
}[]

export type SingleProductType = {
  category: CategoryType
  creationAt: string
  description: string
  id: number
  images: string[]
  price: number
  title: string
  updatedAt: string
}

type CategoryType = {
  creationAt: string
  id: string
  image: string
  name: string
  updatedAt: string
}