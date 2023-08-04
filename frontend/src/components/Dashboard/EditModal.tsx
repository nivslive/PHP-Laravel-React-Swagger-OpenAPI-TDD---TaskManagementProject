import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../../store/dashboard-slice";

const EditModalStyles: any = {
   editModal: {
        container: {
            position: 'relative',
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
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '18px',
        color: 'black',
        cursor: 'pointer',
    },
};

const EditModal = () => {
    const selector = useSelector((state:any) => state.dashboard);
    const dispatch = useDispatch();
    function closeModal() {
        dispatch(dashboardActions.closeModal());
    }
    return (
        <div style={EditModalStyles.editModal}>
            <div style={EditModalStyles.editModal.container}>
                <button style={EditModalStyles.closeButton} onClick={closeModal}>X</button>
                <div style={EditModalStyles.modalContent}>
                    <h2>{selector.editData.title}</h2>
                    <p>Edit modal</p>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
