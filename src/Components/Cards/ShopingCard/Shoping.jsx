import React from 'react'
import img1 from '../../../assets/Runing/Run1.png'
import img2 from '../../../assets/Runing/Run2.png'
import img3 from '../../../assets/Runing/Run3.png'



function Shoping() {

    return (
        <div>
            <div className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full" />
                </div>              
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>               
            </div>
        </div>
    )
}

export default Shoping