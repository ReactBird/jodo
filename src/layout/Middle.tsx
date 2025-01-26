import './scss/Middle.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css/effect-creative';

import { Navigation,  A11y,EffectCreative} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Middle=()=>{
    return( 
    <>       
        <div className="middle">

            <div className="banner">
                <video src="http://dodo.jodocdn.com/video/jodo.mp4"  autoPlay loop className='mid-video' muted></video>
                <div className="mid-textbox">
                    <span>全球领先的互联网服务提供商</span>
                    <div className="business-intro">
                        <span>大数据业务</span>
                       
                        <span>软件服务</span>
                      
                        <span>游戏业务</span>
  
                        <span>企业业务</span>
                    </div>
                    <img src={require('../image/xialla.png')} alt="" />
                </div>
            </div>

             {/* 故事板块 */}
            <div className="mid-story" id='jodostory'>
                <h4 className="mid-storyTitle">以卓越之心 做动人之事</h4>
                <span>广州卓动信息科技有限公司，深耕于游戏发行、游戏研发、应用软件、企业服务等多领域</span>
                <span>业务已覆盖至全球70多个国家，并将在更多领域中持续探索</span>
                <button><a href="">{`卓动故事 >>`}</a></button>
                <div className="map">
                    <img src={require('../image/ditu.png')} alt=""/>
                    <ul>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={require('../image/yuandian.png')} alt="" /></div>
                        </li>
                        
                    </ul>
                </div>
            </div>

            {/* 业务介绍板块 */}
            <div className="mid-business" id='jodobusiness'>
                <h4 className="mid-businessTitle">我们的业务</h4>
                <span>我们能为您提供七大服务 打造国内一流的服务平台</span>
                <div className="mid-businesslist">
                    <div className='item1'>
                        <div className="maskbg"></div>
                            <span>01</span>
                            <span>大数据和人工智能业务</span>
                            <p>高性能的用户画像查询和探索，
                                AB效果追踪，有效解决商户面临的营销效能低及
                                商家洞察弱等行业痛点，
                                打造海量个性化营销方案
                            </p>
                    </div>
                    <div className='item1'>
                        <div className="maskbg"></div>
                            <span>02</span>
                            <span>软件服务</span>
                            <p>研发和运营生活娱乐类、软件清理类等工具产品，为不同用户提供个性化广告推荐，实现广告收益最大化
                            </p>
                    </div>
                    <div className='item1'>
                        <div className="maskbg"></div>
                            <span>03</span>
                            <span>企业服务</span>
                            <p>
                                为创业团队和企业提供技术支持、财务规划、企业管理咨询、人才招聘、企业推广等多元化企业管理顾问服务，实现资源共享、互生共赢
                            </p>
                    </div>
                    <div className='item1'>
                        <div className="maskbg"></div>
                            <span>04</span>
                            <span>游戏业务</span>
                            <p>卓动是游戏行业中“出海”先行者，具有丰富的开发商和渠道合作资源，致力开拓游戏全球合作版图
                            </p>
                    </div>
                </div>
            </div>

            {/* 优势板块 */}
            <div className="mid-advantage">
                <h4>我们的优势</h4>
                <span>全球领先的互联网服务提供商</span>
                <div className="mid-advlist">
                    <div className="advitem">
                        <img src={require('../image/advantage-1.png')} alt="" />
                        <h4>丰富海外经验</h4>
                        <span>多年互联网行业积累</span>
                        <span>海外经验沉淀丰富</span>
                    </div>
                    <div className="advitem">
                        <img src={require('../image/advantage-1.png')} alt="" />
                        <h4>高效的业务团队</h4>
                        <span>富有创造力的年轻团队</span>
                        <span>极具敏感高效</span>
                    </div>
                    <div className="advitem">
                        <img src={require('../image/advantage-1.png')} alt="" />
                        <h4>领先的技术优势</h4>
                        <span>用工具解决问题</span>
                        <span>用领先的技术来支持业务</span>
                    </div>
                    <div className="advitem">
                        <img src={require('../image/advantage-1.png')} alt="" />
                        <h4>丰富产业资源</h4>
                        <span>行业资源丰富</span>
                        <span>有着优质的产业链整合能力</span>
                    </div>
                    <div className="advitem">
                        <img src={require('../image/advantage-1.png')} alt="" />
                        <h4>全球视野看业务</h4>
                        <span>基于全球用户反馈打磨产品</span>
                        <span>全球渠道视野</span>
                    </div>
                </div>
            </div>

            {/* 最新动态 */}
            <div className="mid-trends">
                <h4>最新动态</h4>
                {/* swiper组件 */}
            
            {/* 小屏幕箭头位置不对,不是美剧中,而是swiper美剧中 */}
            <Swiper
                // install Swiper modules
                modules={[Navigation,EffectCreative]}
                effect={'creative'}
                navigation={true}
                centeredSlides={true} //居中
                slidesPerView={3} //预览三张
                loop={true}
                loopAdditionalSlides={0}
                creativeEffect={{
                    prev: {
                    scale:0.6,
                      translate: ['-170%', 0,0],
                    },
                    next: {
                      translate: ['170%', 0, 0],
                      scale:0.6
                    },
                  }}
                >
                <SwiperSlide><img src={require('../image/news.png')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../image/news1.png')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../image/news2.png')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../image/news3.png')} alt="" /></SwiperSlide>
                <SwiperSlide><img src={require('../image/news4.png')} alt="" /></SwiperSlide>
                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide> */}
                </Swiper>
            
                <button>
                    <a href="">更多动态</a>
                </button>
            </div>

            <footer className="footer" id='footer'>
            <div className="f-list">
                <div className="f-listitem">
                    <span>卓动故事</span>
                    <span><a href="">公司简介</a></span>
                    <span><a href="">卓动团队</a></span>
                    <span><a href="">卓动荣誉</a></span>
                    <span><a href="">发展历程</a></span>
                </div>
                <div className="f-listitem">
                    <span>卓动业务</span>
                    <span><a href="">大数据业务</a></span>
                    <span><a href="">软件服务</a></span>
                    <span><a href="">游戏业务</a></span>
                    <span><a href="">企业服务</a></span>
                </div>
                <div className="f-listitem">
                    <span>新闻资讯</span>
                    <span><a href="">公司资讯</a></span>
                    <span><a href="">活动资讯</a></span>
                    <span><a href="">培训资讯</a></span>
                </div>
                <div className="f-listitem">
                    <span>加入我们</span>
                    <span><a href="">社会招聘</a></span>
                    <span><a href="">校园招聘</a></span>
                    <span><a href="">福利待遇</a></span>
                    <span><a href="">培训发展</a></span>
                </div>
                <div className="f-contactus">
                    <span>成为商业伙伴</span>
                    <span><a href="">BD@JODOINC.COM</a></span>
                    <div className="f-contact">
                        <span>关注卓动科技</span>
                        <div className="f-linkbox">
                            <a href=""></a>
                            <a href=""></a>
                        </div>
                    </div>
                    <span><a href="">招聘：HR@JODOINC.COM</a></span>
                    <span><a href="">合作：OVERSEA@JODOINC.COM</a></span>
                </div>
            </div>
                <div className="f-footnote">
                    <div>
                        <a href="">法律声明</a>
                        <a href="">隐私策略</a>
                        <a href="">粤ICP备12082196号-9</a>
                    </div>
                        
                    <span>COPYRIGHT 2018 © 广州卓动信息科技有限公司. ALL RIGHTS</span>
                </div>
            </footer>
        </div>
        </>   
    )
}
export default Middle