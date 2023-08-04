import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ChangeListState {
  listName: any,
}
// interface SearchByWordState {
//     word: String,
// }
// interface SearchByFuncionarioState {
//     word: String,
// }

interface DataState {
    listName: String,
    principalList: any,
    backupList: any,
    // content: {
    //   funcionarios: FuncionarioState[] | [],
    //   tarefas: TarefaState[] | [] | any,
    //   departamentos: DepartamentoState[] | [],
    // },
}

const initialState: DataState = {
  listName: '',
  principalList: [],
  backupList: [],
  // content: {funcionarios: [], tarefas: [], departamentos: []},
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    changeList: (state, action: PayloadAction<ChangeListState>) => {
      state.listName = action.payload.listName;
    },
    setListData(state, action: PayloadAction<any>) {
      state.principalList = action.payload.data;
      state.backupList = state.principalList;
    },
    searchByWord: (state, action: PayloadAction<any>) => {
      state.principalList = state.backupList;
      state.principalList = state.principalList.filter((item: any) =>
        item.title.toLowerCase().includes(action.payload.searchText.toLowerCase()));
    },
    // searchByFuncionario: (state, action: PayloadAction<SearchByFuncionarioState>) => {

    // }
  },
})

export const dashboardActions = dashboardSlice.actions

export default dashboardSlice.reducer