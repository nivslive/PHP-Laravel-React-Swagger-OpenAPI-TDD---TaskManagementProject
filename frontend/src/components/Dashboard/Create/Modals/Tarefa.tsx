import { useEffect, useState } from "react";
import tarefaData from "../../../../data/Tarefa";
import CloseButton from "./CloseButton";
import { dashboardActions } from "../../../../store/dashboard-slice";
import { useDispatch, useSelector } from "react-redux";
import funcionarioData from "../../../../data/Funcionario";
import Modals from ".";
const style: any = {
    p: {},
    editModal: {
         container: {
             position: 'relative',
             maxWidth: window.innerWidth >= 991 ? '60vw' : 'initial',
         },
         position: 'fixed',
         background: 'rgba(0, 0, 0, 0.8)',
         width: '100%',
         height: '100%',
         top: 0,
         left: 0,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
     },
     modalContent: {
         background: 'white',
         padding: '20px',
         overflow: 'scroll',
         borderRadius: '5px',
         maxHeight: '70vh',
         boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
         textAlign: 'center',
     },
 };
 
const Tarefa = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
    title: "",
    assignee_id: null,
    });
    // const selector = useSelector((state:any) => state.dashboard);
    // const [funcionarios, setFuncionarios] = useState<any>([]);
    // useEffect(() => {
    //     if (selector.backupList.funcionarios.length === 0) {
    //         funcionarioData.all().then(async (data: any) => {
    //             if(data.ok && data !== undefined) {
    //                 console.log(data, 'data')
    //                 const responseJson = await data.json();
    //                 console.log(responseJson);
    //                 if(responseJson) {
    //                     dispatch(dashboardActions.setBackupData({listName: 'funcionarios', data: responseJson}));
    //                     setFuncionarios(await responseJson)
    //                 }
    //             }
    //             else {
    //                 setFuncionarios([]);
    //             }
    //         });
    //     } else {
    //         setFuncionarios(selector.backupList.funcionarios);
    //     }
    // }, [dispatch, selector.backupList.funcionarios]);
    const sendCreatedData = (e: any) => {
    e.preventDefault();
    tarefaData.create(data).then((e:any) => {
        dispatch(dashboardActions.closeCreateModal());
        dispatch(dashboardActions.putCreatedData(data));
    });
    };

    const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };
    return (
        <div style={style.editModal}>
            <div style={style.editModal.container}>
                <CloseButton />
                <form onSubmit={sendCreatedData}>
                <div style={style.modalContent}>
                <h5 className="pb-2"> Crie uma tarefa: </h5>
                    <div className="d-block">
                        <label className="me-2">title: </label>
                        <input name="title"  onChange={handleInputChange}/>   
                    </div> 

                    <div className="flex column">
                        <label className="me-2">funcionáio (assignee_id): </label>
                        <Modals.Selects.Funcionarios handleInputChange={handleInputChange} />
                    </div> 
                    <hr />
                    <hr />
                </div>

                <button type="submit" className="btn mt-3 btn-light w-100 text-black"> Criar </button>
                </form>
            </div>
        </div>
    )

};

export default Tarefa;