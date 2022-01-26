import { Layout } from '../components/Layout'
import { PersonsList } from '../components/PersonsList'

export function Home() {
  const students = [
    {
      id: '7669986b-7562-4786-b58f-027667ae9354',
      avatar: undefined,
      name: 'Dakota Rohan',
      email: 'dakota.rohan@university.edu',
      createdAt: '2022-01-26T19:53:11.879Z'
    },
    {
      id: '1c642231-e533-4e40-9827-4361e75bc307',
      avatar: undefined,
      name: 'Saige Grant',
      email: 'saige.grant@university.edu',
      createdAt: '2022-01-26T19:53:11.879Z'
    },
    {
      id: '50d2d020-782b-4615-97de-f79de7e19f71',
      avatar: undefined,
      name: 'Shirley Shanahan',
      email: 'shirley.shanahan@university.edu',
      createdAt: '2022-01-26T19:53:11.879Z'
    },
    {
      id: 'cd6aee2a-4c8f-4504-bc3b-8d237fb884be',
      avatar: undefined,
      name: 'Adan Marvin',
      email: 'adan.marvin@university.edu',
      createdAt: '2022-01-26T05:17:41.418Z'
    },
    {
      id: '35ca2d4f-951d-4734-a5d2-5f54735d0aac',
      avatar: undefined,
      name: 'Wilmer Zieme',
      email: 'wilmer.zieme@university.edu',
      createdAt: '2022-01-26T08:08:16.970Z'
    },
    {
      id: 'a8a9b8f1-6834-4865-bef0-a7d5eb542f9c',
      avatar: undefined,
      name: 'Emily Mante',
      email: 'emily.mante@university.edu',
      createdAt: '2022-01-26T21:40:19.917Z'
    },
    {
      id: '7757720c-2b7d-471f-ba29-189dfb6bcc65',
      avatar: undefined,
      name: 'Andreanne Turcotte',
      email: 'andreanne.turcotte@university.edu',
      createdAt: '2022-01-26T05:54:30.117Z'
    }
  ]

  return (
    <Layout>
      <PersonsList resource="students" persons={students} />
    </Layout>
  )
}
