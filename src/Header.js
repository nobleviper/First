import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg" />

            <div className = "header_nav">
                <div className="header_nav1" >
                    <span className="header_SignIn"> Sign in </span>
                    <span className="header_SignOut"> Sign Out </span>
                    <span className="header_SignUp"> Sign Up </span>
                    <span className="header_MyPage"> My Page </span>  
                </div>

                <div className="header_nav2">
                    <span className="header_Home"> 홈 </span>
                    <span className="header_DogData"> 강아지 백과사전 </span>
                    <span className="header_Hospital"> 동물병원 찾기 </span>
                    <span className="header_Board"> 게시판 </span>  
                </div>
            </div>
        </div>
    )
}

export default Header;