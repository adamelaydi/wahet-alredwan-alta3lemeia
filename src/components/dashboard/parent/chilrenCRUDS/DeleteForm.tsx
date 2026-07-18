import React from 'react'
import Image from 'next/image'
import img from "../../../../assets/user-avatar.png"

interface course{
    courseName:string,
    instructor:string
}
interface childData{
    name:string;
    id:string;
    isActive:boolean;
    age:string|number,
    courses:course[]
}
function DeleteForm(data?:childData) {
    // ++++ FAKE data ++++
    const childInfo:childData={
        name:"ادم ابراهيم",
        id:"c12345678",
        isActive:true,
        age:"10",
        courses:[
            {
                courseName:"القران الكريم",
                instructor:"الشيخ رمضان"
            },
            {
                courseName:"القران الكريم",
                instructor:"الشيخ رمضان"
            },
            {
                courseName:"القران الكريم",
                instructor:"الشيخ رمضان"
            },
            {
                courseName:"القران الكريم",
                instructor:"الشيخ رمضان"
            },
        ]
    }



    return (
    <div className='bg-gray-450 w-full h-full flex items-center justify-center'>
        <div className="deleteForm bg-olive-900 p-[15] rounded-tr-[50] rounded-bl-[50] w-[300] h-fit flex flex-col items-center gap-[15]">
            <Image src={img} alt={"hi"} className='w-[70] h-[70] rounded-full'/>
            <div className="info flex items-center gap-10">
                <span className='text-[white] p-[7] bg-olive-300 text-[10px] rounded-tr-4xl rounded-bl-4xl '>{childInfo.name}</span>
                <span className='text-[white] p-[7] bg-olive-300 text-[10px] rounded-tr-4xl rounded-bl-4xl '>{childInfo.id}</span>
                <span className='text-[white] p-[7] bg-olive-300 text-[10px] rounded-tr-4xl rounded-bl-4xl '>{childInfo.age} سنوات</span>
                <span className={childInfo.isActive?' p-[7] bg-olive-300 text-[10px] rounded-tr-4xl rounded-bl-4xl text-green-500 ':' p-[7] bg-olive-300 text-[10px] rounded-tr-4xl rounded-bl-4xl text-red-500'}>{childInfo.isActive?"نشط":"غير نشط"}</span>
            </div>
            <div className="courses flex flex-col items-center  ">
                <h5 className='text-[white] p-[7] bg-olive-300 text-[15px] rounded-tr-4xl rounded-bl-4xl '>الكورسات</h5>
                    <ul className='w-[260] bg-olive-300 rounded-tr-[30] rounded-bl-[30] p-[20] flex flex-col mt-[10] h-[250] overflow-y-scroll overflow-x-hidden'>
                    {
                        childInfo.courses.map((d,index)=>{
                            return(
                                <li key={index} className='w-full text-[15px] bg-olive-200 flex items-center justify-between p-[10] m-[10] rounded-tr-[20] rounded-bl-[20]' >
                                    <span>{d.courseName}</span>
                                    <span>{d.instructor}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="btns flex items-center w-full justify-between p-r-[15] p-l-[15] ">
                <button className='text-[22px] bg-olive-300 hover:bg-olive-500 duration-700 p-[7] rounded-tr-[20] rounded-bl-[20] text-[white]'>رجوع</button>
                <button className='text-[22px] bg-red-600  hover:bg-red-700 duration-700 p-[7] rounded-tr-[20] rounded-bl-[20] text-[white]'>حذف</button>
            </div>
        </div>
    </div>
  )
}

export default DeleteForm