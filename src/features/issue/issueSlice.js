import { createSlice } from '@reduxjs/toolkit'
import { format } from 'date-fns'

const data = [
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
]

const initialState = {
  index: data.length,
  data: data,
}

export const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    update: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (index !== -1) {
        const today = format(new Date(), 'MM-dd-yyyy')
        if (
          state.data[index].title !== action.payload.title ||
          state.data[index].status !== action.payload.status ||
          state.data[index].description !== action.payload.description
        ) {
          state.data[index].title = action.payload.title
          state.data[index].status = action.payload.status
          state.data[index].description = action.payload.description
          state.data[index].updatedDate = today
        }
      }
    },
    remove: (state) => {},
  },
})

export const { add, update, remove } = issueSlice.actions

export default issueSlice.reducer
