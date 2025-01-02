import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useMenu = () => {
    const [menu, setmenu] = useState([])

    const [loading ,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:3000/menus`)
        .then(res=>{
            setmenu(res.data);
            setLoading(false)
            
        })

    },[])

    return [menu, loading]
};

export default useMenu;