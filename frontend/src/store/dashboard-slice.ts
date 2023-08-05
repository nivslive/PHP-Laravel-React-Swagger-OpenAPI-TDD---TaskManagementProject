import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ChangeListState {
  listName: any,
}

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
  backupList: {funcionarios: [], tarefas: [], departamentos: [],},
  editData: {},
  editDataKey: null,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    changeList: (state, action: PayloadAction<ChangeListState>) => {
      state.listName = action.payload.listName;
      if(state.iCanSeeEditModal) state.iCanSeeEditModal = false;
    },
    setListData(state, action: PayloadAction<any>) {      
      
      // prepare backups
      if(state.listName === 'funcionarios' && state.backupList.funcionarios.length === 0) {
        state.backupList.funcionarios = action.payload.data;
      } else if(state.listName === 'tarefas' && state.backupList.tarefas.length === 0)  {
        state.backupList.tarefas = action.payload.data;
      } else if(state.listName === 'departamentos' && state.backupList.departamentos.length === 0) {
        state.backupList.departamentos = action.payload.data;
      }

      // inject backups on principal list
      if(state.listName === 'departamentos') {
        state.principalList = state.backupList.departamentos;
      } else if(state.listName === 'tarefas') {
        state.principalList = state.backupList.tarefas;
      } else if(state.listName === 'funcionarios') {
        state.principalList = state.backupList.funcionarios;
      }
    },
    searchByWord: (state, action: PayloadAction<any>) => {
      if(state.listName === 'funcionarios') {
        state.principalList = state.backupList.funcionarios;
        state.principalList = state.principalList.filter((item: any) =>
        item.first_name.toLowerCase().includes(action.payload.searchText.toLowerCase()));
      }
      if(state.listName === 'tarefas') {
        state.principalList = state.backupList.tarefas;
        state.principalList = state.principalList.filter((item: any) =>
          item.title.toLowerCase().includes(action.payload.searchText.toLowerCase()));
      }
      if(state.listName === 'departamentos') {
        state.principalList = state.backupList.departamentos;
        state.principalList = state.principalList.filter((item: any) =>
          item.name.toLowerCase().includes(action.payload.searchText.toLowerCase()));
      }


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
    // searchByFuncionario: (state, action: PayloadAction<any>) => {

    // }
  },
})

export const dashboardActions = dashboardSlice.actions

export default dashboardSlice.reducer