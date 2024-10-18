import React from 'react';
import './Home.css';
import deepLawImage from '../image/deep_law.png';

const Home = () => {
    return (
        <div>
            <div className='Home1'>
                <div className='Home1-content'>
                    <div className='title'>AI 딥러닝 기반 딥페이크 판독 서비스</div>
                    <div className='content'>딥페이크 - 현실의 재구성, 진실의 왜곡</div>
                </div>
            </div>

            <div className='Home2'><br /><br /><br />
                <div className='ttitle'>딥페이크란?</div><br />
                <div className='Home2-content'>
                    <div className='title1'>
                        딥페이크 기술은 인공지능을 활용해 이미지와 비디오 콘텐츠를 조작하거나 생성하는 기술이며<br />
                        최근에는 주로 시청자를 속이는 가짜뉴스, 성착취물, 여론 조작 등에 악용되는 사례가 증가하고 있습니다
                    </div><br /><br /><br /><br /><br />
                    <img src={deepLawImage} alt='Deepfake Law' className='image' />
                    <br /><br /><br/>
                    <div className='title2'>
                        <div className='law'>「성폭력범죄의 처벌 등에 관한 특례법」 제14조의 2를 적용하여 대응(처벌)</div> <br />
                        <ol>
                            <li>동의 없이 찍는 행위</li>
                            <div className='red_text'>
                                <li>불법 촬영물을 타인에게 보여주거나 공유, 판매 <br />
                                    (딥페이크 음란물의 생성, 배포, 공유뿐만 아니라, 이러한 콘텐츠를 소지하거나 판매하는 행위도 처벌 대상으로 삼는다)</li>
                            </div>
                            <li>영리 목적의 불법 촬영</li>
                            <li>소지, 구입, 시청, 저장한 자</li>
                            <li>범죄를 여러 번 저지른 사람은 더 강한 처벌 가능</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className='Home3'>
                <div className='abuse'>악용사례</div>
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

            <div className='Home4'>
                <div className='soon'>악용 사례에 가려진 긍정적 기능</div>
                
            </div>
        </div>
    );
}

export default Home;