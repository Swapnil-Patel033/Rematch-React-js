import React from 'react'
import '../../Css/Lablename.css'
import { useSelector, useDispatch } from 'react-redux'
import closIcon from '../../img/close.png'
function LableName() {


    const AddValu = useSelector(state => state.inpute.AddList);
    const AddListOfListModel = useSelector(state => state.inpute.AddListOfList);
    const dispatch = useDispatch();
    const GetLableName = JSON.parse(localStorage.getItem('LableName')) || []
    const GetAddList = JSON.parse(localStorage.getItem('List')) || []
    const GetAddListOfList = JSON.parse(localStorage.getItem('AddListOfList')) || []

    const AddList = () => {
        if (GetAddList) {
            const AddListObject = {
                ListName: GetLableName,
                AddValu
            }
            const AddListArray = [...GetAddList, AddListObject]
            // console.log(L_NameDataArray)
            localStorage.setItem('List', JSON.stringify(AddListArray));
        }
        else {
            const AddListObject = {
                ListName: GetLableName,
                AddValu
            }
            const AddListArray = [AddListObject]
            // console.log(L_NameDataArray)
            localStorage.setItem('List', JSON.stringify(AddListArray));
        }
    }
    const DleteList = (Data) => {
        const DeletData = GetAddList.filter((item, index) => item.AddValu !== Data)
        localStorage.setItem('List', JSON.stringify(DeletData));
        // console.log(GetAddList)
    }

    const AddValuid =GetAddList.map(data=>data.AddValu)
    const AddListOfList = () => {
        if (GetAddListOfList) {
            const AddListOfListObject = {
                ListName: GetLableName,
                // sad:AddValuid,
                AddListOfListModel
            }
            const AddListOfListArray = [...GetAddListOfList, AddListOfListObject]
            // console.log(L_NameDataArray)
            localStorage.setItem('AddListOfList', JSON.stringify(AddListOfListArray));
        }
        else {
            const AddListOfListObject = {
                ListName: GetLableName,
                // sad:AddValuid,
                AddListOfListModel
            }
            const AddListOfListArray = [AddListOfListObject]
            // console.log(L_NameDataArray)
            localStorage.setItem('AddListOfList', JSON.stringify(AddListOfListArray));
        }
    }
  
    return (
        <div className='GetLableName'>
            <div className='LableHeader'><a href="#/">{GetLableName}</a></div>
            <div className='AllBox'>
                <div className='ListBox'>
                    <input className='List_Name_AddList' type="text" placeholder='ADD A LIST'
                        onChange={(e) => { dispatch.inpute.SetAddList(e.target.value) }} />
                    <button className='ListBoxBtn' onClick={AddList}>ADD LIST</button>
                </div>
                {GetAddList.filter(AddList => AddList.ListName === GetLableName).map((Data, index) => {
                    return (
                        <div className='ListBox_WithList'>
                            <div className="ribbon ribbon-top-right" ><img src={closIcon} alt="closIcon" onClick={() => { DleteList(Data.AddValu) }} /></div>
                            <h1 className='ListHeader'>{Data.AddValu} </h1>
                            <hr />
                            <input className='List_Name' type="text" placeholder='ADD A LIST'
                                onChange={(e) => { dispatch.inpute.SetAddListOfList(e.target.value) }} />
                            <button className='ListBoxBtn' onClick={AddListOfList}>ADD LIST</button>
                            <div className='InerAllList'>
                                {GetAddListOfList.filter(AddList => AddList.ListName === GetLableName).map((Data, index) => {
                                    return (
                                        <label className='ListLable'><a href="#/">{Data.AddListOfListModel}</a></label>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default LableName
