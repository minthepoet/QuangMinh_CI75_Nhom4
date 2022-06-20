import React from 'react'
var imgOnline = [
  "https://image-us.eva.vn/upload/4-2020/images/2020-10-13/image5-1602573283-593-width640height459.jpg",
  "https://sieupet.com/sites/default/files/nguon-goc-xuat-xu-cua-husky-768x512_0.jpg",
  "https://tunglocpet.com/wp-content/uploads/2014/11/husky-06.jpg",
  "https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];
function Section(props) {
  return (
    <div className='container'>
        <div className='content'>{props.content}</div>
        <div className='image'><img src={props.img} alt="Hình ảnh" /></div>
    </div>
  )
}

export default Section