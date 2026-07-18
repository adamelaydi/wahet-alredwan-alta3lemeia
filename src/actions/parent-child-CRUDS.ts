import { apiRequest, getAuthApiClient } from "@/lib/api";
import { getUser } from "./auth";   

    interface course{
    courseName:string,
    instructor:string
}
    interface childData{
        fname:string,
        lname:string,
        id:string,
        birthDate:string,
        isActive:boolean,
        courses:course[],
    }

// getting the child to show his/her data to update or delete

    export async function getChildData({id}:{id:string}): Promise<childData|undefined> {
    return apiRequest(
        "Failed to load  achild:",
        async () => {
        const user = await getUser();
        const apiClient = await getAuthApiClient();

        const { data } = await apiClient.get<
            childData
        >(`/api/parents/children/${id}`);


        if (user.role === "parent") {
            return data;
        }else{
            return undefined;
        }
    },
    {
    fname: "",
    lname: "",
    id: "",
    birthDate: "",
    isActive: false,
    courses: [{
        courseName:"",
        instructor:""
    }],
    }
    )
    }



// udate the child data
export  async function updateChildData({data,id}:{data:childData,id:string}):Promise<childData|undefined>{
    return apiRequest(
    "Failed to update child",
    async () => {
    const apiClient = await getAuthApiClient();

    const response = await apiClient.patch<childData>(
        `/api/parents/children/${id}`,
        data
    );

    return response.data;
    },
    undefined
);
}


// delete child
export async function deleteChild({
    id,
    }: {
    id: string;
    }): Promise<boolean> {
    return apiRequest(
        "Failed to delete child",
        async () => {
        const apiClient = await getAuthApiClient();

        await apiClient.delete(`/api/parents/children/${id}`);

        return true;
        },
        false
    );
}