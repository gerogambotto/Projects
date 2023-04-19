import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [  
    {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
    },
    {
    userName: 'GeroGambotto',
    name: 'Geronimo Gambotto',
    isFollowing: false
    },
    {
    userName: 'sebadorsch',
    name: 'Sebastian Dorsch',
    isFollowing: false
    },
    {
    userName: 'maxsantoro',
    name: 'Maximiliano Santoro',
    isFollowing: false
    }
]

export function App () {

    

    return (
        <>
        <section className='App'>
            {
            users.map(({userName, name, isFollowing}) => (
                
                
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                    {name}
                    </TwitterFollowCard>
                
            ))
            }
        </section>
        </>
    )
}