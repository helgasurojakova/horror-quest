export type Quest = {
  key: string
  status: string
  title: string
  type: string
  intro: string
  ageLimit: string
  ageComment: string
  previewData: DataModule[]
  data: DataModule[]
}

type DataModule = {
  key: string
  title: string
  value: string
}
