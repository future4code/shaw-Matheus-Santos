import React, {useEffect, useState} from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";


const Feed = () =>{


    useProtectedPage()

    return(
        <div>Feed</div>
    )
}
export default Feed