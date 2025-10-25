import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function useUser(){
    const context = useContext(UserContext)

    if( !context ){
        throw new Error("useUSer must be used within a userProvider")
    }

    return context
}