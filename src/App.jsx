import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {

    return (
        <section className='App'>

        <TwitterFollowCard 
        initialIsFollowing
        name="Alexis Roman Valente Cuevas" 
        userName="AlexisRomanVC2002" 
        />

        <TwitterFollowCard 
        initialIsFollowing={false}
        name="Antonio Sarosi" 
        userName="antoniosarosi" 
        />

        <TwitterFollowCard 
        initialIsFollowing
        name="Miguel Angel Durán" 
        userName="Midudev" 
        />

        </section>
    )
}