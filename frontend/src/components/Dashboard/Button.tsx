import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../store/dashboard-slice";
import tarefaData from "../../data/Tarefa";

const Button = (props: any) => {
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state.dashboard);
    function switchList(e:any) {
        e.preventDefault();
        dispatch(dashboardActions.changeList({listName: props.name}));
        switch(selector.listName) {
                case 'tarefas':
                    tarefaData.all().then((response) => {
                        if (response.status === 200) {
                            return response.json(); 
                        } else {
                            throw new Error("Erro na requisição"); 
                        }
                    }).then((data) => {
                        console.log(data, 'data');
                        dispatch(dashboardActions.setListData({listName: selector.listName, data}));
                    }).catch((error) => {
                        console.error("Erro:", error);
                    });
                    break;
                case 'departamentos':
                    // departamentoData.all().then((e: any) => {  
                    //         dispatch(dashboardActions.setListData({listName: selector.listName, data: e.json() === undefined ? [] : e.json()}
                    //     ));
                    // });
                    break;
        }
        
    }
    return <a href="#" onClick={switchList}><button className={`btn pe-3 me-3 my-3 ` + (selector.listName === props.name ? `btn-primary` : `btn-dark`)}> {props.name} </button></a>
}

export default Button;