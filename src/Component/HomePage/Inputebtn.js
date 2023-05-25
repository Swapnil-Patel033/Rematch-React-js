
import { useSelector, useDispatch } from 'react-redux'

export default function Inputebtn() {

    const LableValue = useSelector(state => state.inpute);
    const dispatch = useDispatch();

    // Get Data From Local Store Lbale Name Data 
    const GetDataLocalStore = JSON.parse(localStorage.getItem('Lable_Name'))

    // Submit Btn onSubmit  Start
    const FormHendle = (e) => {
        e.preventDefault()

        // Set Lable_Name Data In LocalStprage Start
        if (GetDataLocalStore) {
            const L_NameDataArray = [...GetDataLocalStore, LableValue.LableValue]
            // console.log(L_NameDataArray)
            localStorage.setItem('Lable_Name', JSON.stringify(L_NameDataArray));
        }

        else {
            const L_NameDataArray = [LableValue.LableValue]
            // console.log(L_NameDataArray)
            localStorage.setItem('Lable_Name', JSON.stringify(L_NameDataArray));
        }
        // Set Lable_Name Data In LocalStprage Start
    }
    // Submit Btn onSubmit  End

    return (
        <div>
            <form onSubmit={FormHendle}>
                <div className='inputeboxC'>
                    <input type="text" placeholder='Enter Lable Name'
                        onChange={(e) => {
                            dispatch.inpute.SetLableValue(e.target.value)
                        }} />
                </div>
                <div className='AddBtn'>
                    <button className='glowing-btn' >
                        <span className='glowing-txt'>A<span className='faulty-letter'>D</span>D</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
