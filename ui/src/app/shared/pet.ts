export class Pet {
  id?: number
  name: string
  photoUrl: string
  categoryId: number
  tags: Tag[]
  status: Status
}

export class Category {
  id: number
  name: string
}

export class Tag {
  id: number
  name: string
}

export enum Status {
  Available,
  Pending,
  Sold
}
