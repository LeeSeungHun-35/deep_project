import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='Home1'>
                <div className='Home1-content'>
                    <div className='title'>AI 딥러닝 기반 딥페이크 판독 서비스</div>
                    <div className='content'>딥페이크: 진실을 왜곡하는 새로운 도구</div>
                </div>
            </div>
            <div className='Home2'>
                <h2>악용사례</h2>
                <div className='deep'>
                    <div className='pic1' />
                    <div className='text1'>
                        딥페이크 기술은 성착취물 제작에 악용되며, 이는 심각한 인권 침해로 이어지고 있다. <br />
                        특정 인물의 얼굴이나 신체를 조작해 동의 없이 음란물에 사용되는 경우가 증가했다
                    </div>
                </div>
                <div className='news'>
                    <div className='pic2' />
                    <div className='text2'>
                        가짜뉴스는 인터넷과 SNS를 통해 빠르게 확산되며, 사회적 혼란을 야기하고 <br />
                        잘못된 정보는 공포와 불신을 조성하고, 정치적·사회적 갈등을 증폭시킬 수 있다. <br />
                         AI 기반 가짜뉴스 탐지 기술과 시민들의 정보 판별 능력이 중요한 시점이다.
                    </div>
                </div>
            </div>
            <div className='Home3'>Home333</div>
        </div>
    );
}

export default Home;