import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 3,
  data: [
    {
      id: 1,
      title: 'A bug in Top Page',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione accusantium id nulla, quod ad? Molestiae magnam quos exercitationem alias expedita rerum dolorem repudiandae quam unde, minus aspernatur voluptatem tenetur?',
      status: 0,
      author: '',
      createdDate: '09-17-2023',
      updatedDate: '09-17-2023',
    },
    {
      id: 2,
      title: 'A problem of performance in Top Page',
      description: 'テスト',
      status: 0,
      author: '',
      createdDate: '09-20-2023',
      updatedDate: '09-21-2023',
    },
    {
      id: 3,
      title: 'fix layout',
      description: 'Fiexd Layout',
      status: 1,
      author: '',
      createdDate: '09-7-2023',
      updatedDate: '09-10-2023',
    },
  ],
}

export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    add: (state) => {},
    update: (state) => {},
    deleteIssue: (state) => {},
  },
})

export const { add, update, deleteIssue } = issueSlice.actions
export default issueSlice.reducer
