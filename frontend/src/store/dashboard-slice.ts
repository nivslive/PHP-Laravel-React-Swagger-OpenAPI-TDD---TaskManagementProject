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
    editData: any,
    iCanSeeEditModal: boolean,
    editDataKey: number | null,
    // content: {
    //   funcionarios: FuncionarioState[] | [],
    //   tarefas: TarefaState[] | [] | any,
    //   departamentos: DepartamentoState[] | [],
    // },
}

const initialState: DataState = {
  listName: '',
  iCanSeeEditModal: false,
  principalList: [],
  backupList: [],
  editData: {},
  editDataKey: null,
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
    openModal: (state, action: PayloadAction<any>) => {
      state.editData = state.principalList[action.payload.id];
      state.editDataKey = action.payload.id;
      state.iCanSeeEditModal = true;
    },
    putEditedDataOnItem: (state, action: PayloadAction<any>) => {
      if(state.editDataKey === null) throw new Error('não existe essa chave na lista de dados.');
      state.principalList[state.editDataKey] = action.payload.editedData;
    },
    closeModal: (state) => {
      state.iCanSeeEditModal = false;
    }, 
    // searchByFuncionario: (state, action: PayloadAction<SearchByFuncionarioState>) => {

    // }
  },
})

export const dashboardActions = dashboardSlice.actions

export default dashboardSlice.reducer