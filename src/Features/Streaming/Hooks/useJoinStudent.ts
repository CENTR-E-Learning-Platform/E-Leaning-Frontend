import { useFormik } from "formik"
import { joinStudent } from "../Services/joinStudent";
export const useJoinStudent = ()=> {

    const formik = useFormik({
            initialValues:{roomName:""},
            onSubmit: async(values)=> {
            try{
                const response =await joinStudent(values.roomName.toString());
                console.log(response.data); 
            }catch(err){
                alert(err);
            }
            },
        });
        return formik;
}