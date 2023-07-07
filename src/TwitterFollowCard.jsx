import { useState } from "react";


export function TwitterFollowCard ({userName="unknown", name, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Un avatar de prueba" src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info-container'>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
               <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-following">{text}</span>
                    <span className="tw-followCard-stop-following">Dejar de seguir</span>
                </button> 
            </aside>
        </article>
    )
}