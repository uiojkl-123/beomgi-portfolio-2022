import React from 'react';
import { useProjectStore } from '../stores/projectStore';
import './ProjectContent.scss';

interface ProjectContentProps {

}

export const ProjectContent: React.FC<ProjectContentProps> = (props) => {

    const { selectedProject } = useProjectStore()

    const Inner = selectedProject === '어디대' ? (
        <div className="projectContent">
            <div className="content">
                <h1>
                    어디대
                </h1>
                <h2>개요</h2>
                <p>
                    토지 소유자의 공간 유휴 시간을 활용하여, 주차 공간이 필요한 사용자를 연결해주는 O2O 플랫폼입니다.
                </p>
                <h2>개발기간</h2>
                <p>2020.07 ~ 2020.10, 2021.01 ~ 2021.03</p>
                <h2>개발환경</h2>
                <div className="used row">
                    <img src='React.png' alt="react" />
                    <img src='Ts.png' alt="ts" />
                    <img src='Firebase.png' alt="firebase" />
                    <img src='Ionic.png' alt="ionic" />
                    <img src='Sass.png' alt="sass" />
                </div>
                <h2>주요기능</h2>
                <ul>
                    <li>주차공간 공유</li>
                    <li>주차공간 예약</li>
                    <li>주차공간 검색</li>
                    <li>주차공간 관리</li>
                </ul>

                <h2>API</h2>
                <ul>
                    <li>Daum Maps API</li>
                    <li>Ionic Native Geolocation</li>
                </ul>
                <h2>프로젝트 참여도</h2>
                <p>100%</p>
                <h2>프로젝트 역할</h2>
                <ul>
                    <li>기획</li>
                    <li>디자인</li>
                    <li>프론트엔드 개발</li>
                    <li>백엔드 개발</li>
                </ul>
                <h2>프로젝트 소개</h2>

                <div className="imgList">
                    <img src='Screen Shot 2022-11-05 at 11.01.32 PM.png' alt="어디대" />
                    <img src='Screen Shot 2022-11-05 at 11.02.01 PM.png' alt="어디대" />
                    <img src='Screen Shot 2022-11-05 at 11.02.50 PM.png' alt="어디대" />
                </div>
                <p>
                    공간을 가지고 있는 사람은 공간을 활용하여 수익을 창출할 수 있고, 주차 공간을 이용하고자 하는 사람은 공간을 이용할 수 있습니다.
                </p>

                <h2>프로젝트 특징</h2>
                <p>
                    기존 주차 공간 공유 플랫폼들의 리뷰 분석과 UX 분석을 통해 사용자의 불편함을 해소하고 사용자의 편의성을 높이기 위해 노력했습니다.<br />
                    하드웨어 Smart Lock 시스템을 이용하여, 불법주차와 부정이용을 막고, 사용자에게 더욱 정확한 정보를 제공하고자 했습니다.
                </p>
                <h2>프로젝트 결과</h2>
                <p>
                    어디대 서비스는 주차장 제휴 문제로 현재 서비스 중단 상태이며, 향후 서비스 재개를 위해 노력하고 있습니다.
                </p>

            </div>
        </div>
    ) : selectedProject === '달란트' ? (
        <div className="projectContent">
            <div className="content">
                <h1>
                    달란트
                </h1>
                <h2>개요</h2>
                <p>
                    달란트는 실제 주식 계좌기반 수익률을 토대로 랭킹 및 포트폴리오를 제공하는 주식 투자 커뮤니티 서비스입니다.
                </p>
                <h2>개발 기간</h2>
                <p>2022.05 ~ 2022.11</p>
                <h2>개발 인원</h2>
                <p>2명</p>
                <h2>개발 환경</h2>
                <div className="used row">
                    <img src='React.png' alt="react" />
                    <img src='Ts.png' alt="ts" />
                    <img src='Firebase.png' alt="firebase" />
                    <img src='Sass.png' alt="sass" />
                    <img src='Ionic.png' alt="ionic" />
                    <img src='Zustand.png' alt="zustand" />
                </div>
                <h2>프로젝트 참여도</h2>
                <p>100%</p>
                <h2>프로젝트 역할</h2>
                <ul>
                    <li>기획</li>
                    <li>디자인</li>
                    <li>프론트엔드 개발</li>
                    <li>백엔드 개발</li>
                </ul>
                <h2>프로젝트 소개</h2>
                <a href='https://dalant.co.kr'>
                    달란트 바로가기
                </a>

                <h2>주요 기능</h2>
                <ul>
                    <li>공동인증서 이용 주식 계좌 연동</li>
                    <li>주식 계좌 수익률 랭킹</li>
                    <li>주식 계좌 포트폴리오 판매</li>
                    <li>계좌이체 기반 결제 기능</li>
                    <li>커뮤니티 기능</li>
                </ul>
                <h2>API</h2>
                <ul>
                    <li>CODEF</li>
                </ul>
                <h2>프로젝트 결과</h2>
                <p>
                    프로젝트에서 가장 힘들었던 것은 분야의 특성상 일반적인 카드, 간편결제 연동이 허가되지 않아 계좌 이체 기반으로 결제 시스템을 구현하는 부분이었습니다.

                </p>
            </div>
        </div>
    ) : selectedProject === '포트폴리오' ? (
        <div className="projectContent">
            <div className="content">
                <h1>
                    포트폴리오
                </h1>
                <h2>개요</h2>
                <p>
                    포트폴리오는 개발자의 개인 프로젝트를 소개하는 웹사이트입니다.
                </p>
                <h2>개발 기간</h2>
                <p>2022.11.05</p>
                <h2>개발 인원</h2>
                <p>1명</p>
                <h2>개발 환경</h2>
                <div className="used row">
                    <img src='React.png' alt="react" />
                    <img src='Ts.png' alt="ts" />
                    <img src='Sass.png' alt="sass" />
                    <img src='Zustand.png' alt="zustand" />
                    <img src='Firebase.png' alt="firebase" />
                </div>
                <h2>프로젝트 참여도</h2>
                <p>100%</p>
                <h2>프로젝트 역할</h2>
                <ul>
                    <li>기획</li>
                    <li>디자인</li>
                    <li>프론트엔드 개발</li>
                    <li>백엔드 개발</li>
                </ul>
                <h2>프로젝트 소개</h2>
                <a href='https://portfolio-1c3e3.web.app/'>
                    포트폴리오 바로가기
                </a>

                <h2>주요 기능</h2>
                <ul>
                    <li>프로젝트 소개</li>
                    <li>프로젝트 댓글</li>
                    <li>프로젝트 좋아요</li>
                    <li>프로젝트 공유</li>
                </ul>

                <h2>API</h2>
                <ul>
                    <li>CODEF</li>
                </ul>

                <h2>프로젝트 결과</h2>
                <p>

                </p>

            </div>
        </div>
    ) : selectedProject === '포항학사 식단' ? (
        <div className="projectContent">
            <div className="content">
                <h1>
                    포항학사 식단
                </h1>
                <h2>개요</h2>
                <p>
                    포항학사 식단은 포항학사의 식단을 확인할 수 있는 웹사이트입니다.
                </p>
                <h2>개발 기간</h2>
                <p>2022.11</p>
                <h2>개발 인원</h2>
                <p>1명</p>
                <h2>개발 환경</h2>
                <div className="used row">
                    <img src='React.png' alt="react" />
                    <img src='Ts.png' alt="ts" />
                    <img src='Sass.png' alt="sass" />
                    <img src='Zustand.png' alt="zustand" />
                    <img src='Firebase.png' alt="firebase" />
                    <img src='Ionic.png' alt="ionic" />
                </div>
                <h2>프로젝트 참여도</h2>
                <p>100%</p>
                <h2>프로젝트 역할</h2>
                <ul>
                    <li>기획</li>
                    <li>디자인</li>
                    <li>프론트엔드 개발</li>
                    <li>백엔드 개발</li>
                </ul>

                <h2>프로젝트 소개</h2>
                <a href='https://pohang-domitory-meal.web.app/'>
                    포항학사 식단 바로가기
                </a>

                <h2>주요 기능</h2>
                <ul>
                    <li>식단 확인</li>
                    <li>식단표 엑셀 파일 처리 및 업로드</li>
                    <li>식단 남은양 공유</li>
                </ul>

                <h2>프로젝트 결과</h2>
                <p>
                    학사 내에서 항상 식단을 확인해야 하는데, 식단표를 사진으로 찍어서 확인하는 방식이었습니다.
                    이 방식은 식단표가 바뀔 때마다 사진을 찍어서 업로드해야 하는 번거로움이 있었습니다.
                    그래서 식단표를 엑셀 파일로 만들어서 업로드하면 식단표를 자동으로 파싱하여 웹사이트에 업로드하는 기능을 추가했습니다. <br />
                </p>

                <p>
                    또한 학생들이 남은 양을 함께 공유할 수 있도록 기능을 추가했습니다. <br />
                    항상 양이 부족한 날이 있었는데 이 기능을 추가하니 양이 부족한 날에는 미리 알 수 있어서 좋았습니다.
                    개발 후 학사 학생들에게서 많은 호응을 얻을 수 있었고 현재 많은 학생들이 해당 웹사이트를 사용하고 있습니다. <br />
                </p>
            </div>
        </div>
    ) : selectedProject === '기타' ? (
        <div className="projectContent">
            <div className="content">
                <h1>
                    기타
                </h1>
                <h2>창업지원단 포스터</h2>
                <p>
                    창업지원단 포스터 사이트는 국민대학교 창업지원단에서 진행하는 프로그램들을 확인할 수 있는 웹사이트입니다.
                </p>
                <p>개발 기간 - 2022.04</p>
                <p>주요기능 - swiper를 이용한 슬라이드, 포스터 업로드 및 삭제</p>
                <h2>떡국</h2>
                <p>
                    떡국 사이트는 테마를 이용한 광고 수익 기반 게임 사이트입니다.
                </p>
                <p>개발 기간 - 2022.01</p>
                <p>주요기능 - 간단한 게임 및 SNS 공유</p>
                <h2>컴플렉스</h2>
                <p>
                    컴플렉스는 숏폼 힙합 커뮤니티 앱입니다.
                </p>
                <p>개발 기간 - 2022.04</p>
                <p>주요기능 - 동영상 필터, 크루 및 대회, 컴피티션 기능</p>
                <h2>카까</h2>
                <p>
                    카까는 IoT 기반 카페 자리 확인 서비스입니다.
                </p>
                <p>개발 기간 - 2022.05</p>
                <p>주요기능 - Arduino 센서 및 컴퓨터 비전 기반 자리확인 시스템, 확인 및 공유 기능</p>
                <h2>국민의 부름</h2>
                <p>
                    국민의 부름은 대학생 인증 기반 심부름 서비스입니다.
                </p>
                <p>개발 기간 - 2022.10</p>
                <p>주요기능 - 대학상 인증 기능, 결제 기능</p>
            </div>
        </div>
    ) : null

    const InnerComponent = () => Inner


    return (
        <InnerComponent></InnerComponent>
    );
}
