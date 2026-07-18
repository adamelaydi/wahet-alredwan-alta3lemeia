"use client"
import React, { useState } from 'react'
import ChangeImage from './ChangeImage'
import FieldSetInput from "@/components/ui/FieldSetInput";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
interface AddChildInputs {
    fname:string,
    lname:string,
    birthDate:string,
    gender:string,
    height:string,
    weight:string

}

const inputWrapperStyles = cn("flex flex-col gap-[5px]");
function UpdateForm() {
        const {
            register,
            setValue,
            formState: { errors },
        } = useForm<AddChildInputs>({
            defaultValues: {
            fname: "",
            lname: "",
            birthDate: "",
            gender: "male",
            height:"",
            weight:""

            },
            shouldUnregister: true,
        });

        const [genderValue,setGenderValue]=useState(true)
    
    return (
        <div className='bg-gray-450 w-full h-full flex items-center justify-center'>
            <form className=" bg-olive-900 p-[15] rounded-tr-[50] rounded-bl-[50] w-[300] h-fit flex flex-col items-center gap-[5]">
                <ChangeImage />
                <div className={cn(inputWrapperStyles,"w-[250]")}>
                            <FieldSetInput
                                label="الاسم الأول"
                                placeholder="الاسم الاول"
                                registerReturn={register("fname", {
                                required: {
                                    value: true,
                                    message: "هذا الحقل إجباري",
                                },
                
                                pattern: {
                                    value: /^[\u0621-\u064A ]+$/,
                                    message: "مسموح بالحروف العربية فقط",
                                },
                
                                onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
                                    setValue("fname", e.target.value.trim(), {
                                    shouldValidate: true,
                                    }),
                                })}
                            />
                            {errors.fname && (
                            <p className="text-red-500 text-sm">
                                {errors.fname.message}
                            </p>
                            )}
                </div>

                <div className={cn(inputWrapperStyles ,"w-[250]")}>
                            <FieldSetInput
                                label="الاسم الاخير"
                                placeholder="الاسم الاخير"
                                registerReturn={register("lname", {
                                required: {
                                    value: true,
                                    message: "هذا الحقل إجباري",
                                },
                
                                pattern: {
                                    value: /^[\u0621-\u064A ]+$/,
                                    message: "مسموح بالحروف العربية فقط",
                                },
                
                                onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
                                    setValue("lname", e.target.value.trim(), {
                                    shouldValidate: true,
                                    }),
                                })}
                            />
                            {errors.fname && (
                            <p className="text-red-500 text-sm">
                                {errors.lname?.message}
                            </p>
                            )}
                </div>

                <div className={cn(inputWrapperStyles,"w-[250]")}>
                    <FieldSetInput
                                type="date"
                                label="تاريخ الميلاد"
                                registerReturn={register("birthDate", {
                                required: {
                                    value: true,
                                    message: "هذا الحقل إجباري",
                                },
                    
                                validate: (data) => {
                                    const date = new Date(data);
                                    const now = new Date();
                    
                                    if (date.getTime() >= now.getTime())
                                        return "غير مسموح بتاريخ في المستقبل";
                                    },
                                })}
                                inputStyles={cn("[direction:ltr]")}
                            />

                {errors.birthDate && (
                    <p className="text-red-500 text-sm">
                    {errors.birthDate.message}
                    </p>
                )}
                </div>

                <div className={cn(inputWrapperStyles,"w-[250]")}>
                            <fieldset className="shadow-soft flex h-full items-center justify-around rounded-[2rem_0] bg-gray-50 px-10 py-4">
                                <legend className="ms-5 px-3 text-2xl font-bold">النوع</legend>
                                <div className="flex w-full gap-5">
                                <label
                                    htmlFor="male"
                                    className={cn(
                                    "flex-1 cursor-pointer rounded-lg py-2 text-center text-3xl transition-colors",
                                    genderValue
                                        ? "bg-olive-500 text-white"
                                        : "bg-gray-200 hover:bg-gray-300",
                                    )}
                                    onClick={()=>{setGenderValue(!genderValue)}}
                                >
                                    ذكر
                                </label>
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    hidden
                                    {...register("gender", {
                                    required: { value: true, message: "هذا الحقل إجباري" },
                                    })}
                                />
                    
                                <label
                                    htmlFor="female"
                                    className={cn(
                                    "flex-1 cursor-pointer rounded-lg py-2 text-center text-3xl transition-colors",
                                    !genderValue
                                        ? "bg-olive-500 text-white"
                                        : "bg-gray-200 hover:bg-gray-300",
                                    )}
                                    onClick={()=>{setGenderValue(!genderValue)}}
                                >
                                    أنثى
                                </label>
                                <input
                                    type="radio"
                                    id="female"
                                    value="female"
                                    hidden
                                    {...register("gender", {
                                    required: { value: true, message: "هذا الحقل إجباري" },
                                    })}
                                />
                                </div>
                            </fieldset>
                        </div>
                        
                <div className='flex gap-[20]'>
                        <div className={cn(inputWrapperStyles,"w-[110]")}>
                            <FieldSetInput
                                label="الوزن (كجم)"
                                placeholder="50"
                                type="text"
                                registerReturn={register("weight", {
                                required: {
                                    value: true,
                                    message: "الوزن مطلوب",
                                },
                                min: {
                                    value: 1,
                                    message: "يجب أن يكون الوزن أكبر من 0",
                                },
                                max: {
                                    value: 300,
                                    message: "الوزن غير صحيح",
                                },
                                onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
                                    setValue("weight", e.target.value.trim(), {
                                    shouldValidate: true,
                                    }),
                                })}
                            />

                            {errors.weight && (
                                <p className="text-red-500 text-sm">
                                {errors.weight?.message}
                                </p>
                            )}
                            </div>
                        <div className={cn(inputWrapperStyles,"w-[110]" )}>
                            <FieldSetInput
                                label="الطول (سم)"
                                placeholder="160"
                                type="text"
                                registerReturn={register("weight", {
                                required: {
                                    value: true,
                                    message: "الطول مطلوب",
                                },
                                min: {
                                    value: 1,
                                    message: "يجب أن يكون الطول أكبر من 0",
                                },
                                max: {
                                    value: 200,
                                    message: "الطول غير صحيح",
                                },
                                onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
                                    setValue("height", e.target.value.trim(), {
                                    shouldValidate: true,
                                    }),
                                })}
                            />

                            {errors.weight && (
                                <p className="text-red-500 text-sm">
                                {errors.height?.message}
                                </p>
                            )}
                            </div>
                </div>
                <div className="btns flex mt-[15] items-center gap-[90]">
                    <button type='button'  className={cn(inputWrapperStyles," rounded-tr-[15] rounded-bl-[15] w-[70] p-[10] bg-red-500 hover:bg-red-600 text-white text-[20px]")}>تراجع</button>
                    <button type="submit" className={cn(inputWrapperStyles," rounded-tr-[15] rounded-bl-[15] w-[70] p-[10] bg-green-400 hover:bg-green-600 text-white text-[20px]")}>حفظ</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm