
const EditModalStyles: any = {
   editModal: 
    {
        position: 'fixed', 
        background: 'red', 
        width: '250px', 
        height: '250px', 
        top: 0, 
        left: 0
    }
};

const EditModal = () => {
    return (<>
   <div style={EditModalStyles.editModal}>
    Edit modal
    </div> 
</>);
};

export default EditModal;