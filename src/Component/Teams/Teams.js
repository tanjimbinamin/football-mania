import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;

    return (
        <div className="d-flex col-md-4 col-sm-12 justify-content-center align-items-center">
            <div className="card">
            <img src={strTeamBadge} className="card-img-top" alt={strTeam}></img>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h2 className="card-title text-center">{strTeam}</h2>
                    <p className="card-text text-center">Sports type: {strSport}</p>
                    <button style={{backgroundColor: '#3A42FF', border: '1px solid #3A42FF'}} className="btn btn-primary"><Link style={{color:'white', textDecoration: 'none'}} to={`/team/${idTeam}`}>Explore <FontAwesomeIcon icon={faArrowRight} /></Link></button>
                </div>
        </div>
        </div>
    );
};

export default Teams;