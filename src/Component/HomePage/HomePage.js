import {  useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import '../../Css/HomePage.css'
import closIcon from '../../img/close.png'
import I2 from '../../img/2.jpg'
import Inputebtn from './Inputebtn'

function HomePage() {
    // const LableValue = useSelector(state => state.inpute);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const GetLableName = JSON.parse(localStorage.getItem('Lable_Name')) ||[]
    // console.log(GetLableName)

    // Delete Btn Start
    const DeletBtn = (Data) => {
        const DeletData = GetLableName.filter((item, index) => item !== Data)
        localStorage.setItem('Lable_Name', JSON.stringify(DeletData));
    }
    // Delete Btn End

    // SetLableName In Rematch And Local localStorage Start
    const LableNameProfile = (Data) => {
        dispatch.inpute.SetLableName(Data)
        localStorage.setItem('LableName', JSON.stringify(Data));
        let path = `/LableName`;
        navigate(path);
    }
    // SetLableName In Rematch And Local localStorage End

    return (
        <div className="container mydiv">
            <Inputebtn />
            <div className='Main_Row '>
                <div className="row Main_Row_all">
                    <div className="col All_col" >
                        <div className="bbb_deals">
                            <div className="ribbon ribbon-top-right" ><img src={closIcon} alt="" /></div>
                            <div className="bbb_deals_slider_container">
                                <div className=" bbb_deals_item">
                                    <div className="bbb_deals_image"><img src={I2} alt="" /></div>
                                    <div className="bbb_deals_content">
                                        <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                            <div className="bbb_deals_item_name"><a href='/#'>First</a></div>
                                        </div>
                                        <div className="available">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {GetLableName.map((item, index) => {
                        return (
                            <div className="col All_col" >
                                <div className="bbb_deals">
                                    <div className="ribbon ribbon-top-right" ><img src={closIcon} alt="" onClick={() => { DeletBtn(item) }} /></div>
                                    <div className="bbb_deals_slider_container">
                                        <div className=" bbb_deals_item">
                                            <div className="bbb_deals_image"><img src={I2} alt="" onClick={() => { LableNameProfile(item) }} /></div>
                                            <div className="bbb_deals_content">
                                                <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                                    <div className="bbb_deals_item_name"><a href='/#'>{item}</a></div>
                                                </div>
                                                <div className="available">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default HomePage

