import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div className="cover-area">
                <h1 id="title">Team Tracker</h1>
            </div>
            <div className="team-area">
                <div className="row">
                {
                    teams.map((team) => <Teams team={team} key={team.idTeam}></Teams>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;