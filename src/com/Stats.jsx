import React, { useEffect, useState } from 'react';

const Stats = () => {
   

    const [lang, setlang] = useState([])
    const [tutor, settutor] = useState([])
    const [review, setreview] = useState([])
    const [user, setuser] = useState([])

    useEffect(()=>{
        fetch('/tutor.json')
        .then(res=>res.json())
        .then(data=>{
            setlang(data)
        })
    },[])

    useEffect(()=>{
        fetch("https://tutor-s.vercel.app/tutors")
        .then(res=>res.json())
        .then(data=>{
            settutor(data)
        })
    },[])

    useEffect(()=>{
        fetch("https://tutor-s.vercel.app/user")
        .then(res=>res.json())
        .then(data=>{
            setuser(data.users)
        })
    },[])



    return (
        <div className='h-7 py-4 grid grid-cols-4 mx-auto max-w-7xl'>
            <div>
                <h1>Language</h1>
                <h1>{lang.length}</h1>
            </div>
            <div>
                <h1>Tutors</h1>
                <h1>{tutor.length}</h1>
            </div>
            <div>
                <h1>User</h1>
                <h1>{user.length}</h1>
            </div>
        </div>
    );
};

export default Stats;