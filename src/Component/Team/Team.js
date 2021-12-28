import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Team.css'

const Team = () => {
    let Id = useParams();
    const { id } = Id;
    // console.log(id);

    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => {
                const tempData = data.teams;
                const detail = tempData.filter(team => team.idTeam === id);
                // console.log(detail[0]);
                setDetail(detail[0]);
            })
    }, [id])

    const { strTeamBadge, strStadiumThumb,strTeam, intFormedYear, strGender, strCountry, strSport, strTeamJersey, strStadiumDescription, strFacebook, strTwitter, strYoutube} = detail;
    console.log(strTeamBadge, strStadiumThumb);

    return (
        <div className="details">
            <div style={{ backgroundImage: `url(${strStadiumThumb})`, backgroundSize: 'auto 880px' }} className="cover-area">
                <span className="bg">
                    <img src={strTeamBadge} alt=""></img>
                </span>
            </div>
            <div className="details-area">
                <div className="details-info">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <h1>{strTeam}</h1>
                            <p>
                                <img src='../Icon/found 1.png' alt="found"></img> Founded: {intFormedYear}
                            </p>
                            <p>
                                <img src='../Icon/flag (1) 1.png' alt="flag"></img> Country: {strCountry}
                            </p>
                            <p>
                                <img src="../Icon/football (1) 1.png" alt="" /> Sport Type: {strSport}
                            </p>
                            <p>
                                <img src="../Icon/male-gender-sign 1.png" alt="" /> Gender: {strGender}
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <img src={strTeamJersey} alt="" />
                        </div>
                    </div>
                </div>
                <div className="details-paragraph">
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="social-link">
                    <a href={`https://${strTwitter}`}><img src="../Icon/Twitter.png" alt="" /></a>
                    <a href={`https://${strFacebook}`}><img src="../Icon/Facebook.png" alt="" /></a>
                    <a href={`https://${strYoutube}`}><img src="../Icon/YouTube.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default Team;