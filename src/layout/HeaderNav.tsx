import { useEffect } from 'react';
import './scss/HeaderNav.scss'

const HeaderNav=()=>{
    useEffect(()=>{
        const switchs=document.getElementById('switch') as HTMLInputElement;
        switchs.addEventListener('change', () => {
        if (switchs.checked) {
        disableScroll();
        } else {
        enableScroll();
        }
     });
    },[])


  // 禁止滚动
  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  // 启用滚动
  function enableScroll() {
    document.body.style.overflow = '';
  }

    return(
    <>
    
        <header className='header'>
            
            <a className="h-logo" href=" ">
                <img src={require('../image/logo.png')} alt="" className="logo" />
            </a>
            <div className="h-nav">
                <ul>
                    {/* <input type="checkbox" id='navlistitem'/> */}
                    <li>{<a href="#">首页</a>}</li>
                    <li><a href="#jodostory">卓动故事</a></li>
                    <li><a href="#jodobusiness">卓动业务</a></li>
                    <li><a href="#">新闻资讯</a></li>
                    <li><a href="#footer">加入卓动</a></li>
                    <li><a href="#footer">联系我们</a></li>
                </ul>
            </div>
            <div className="h-lanbox">
                    <span className="h-china">中文</span>
                    <span className="h-en">EN</span>
            </div>
             {/* 移动端导航按钮 */}
            
             <input type="checkbox" className='switch' id='switch'/>
             <div className="mobilenav">
                <span>首页<label htmlFor='switch'></label></span>
                <label htmlFor='menustory'>卓动故事
                    <input type="checkbox" id='menustory' className='menuitemswitch'/><i></i>
                    <div className="menuitem">
                        <a href="">公司简介</a>
                        <a href="">卓动团队</a>
                        <a href="">卓动荣誉</a>
                        <a href="">发展历程</a>
                    </div>
                </label>
                <label htmlFor='menubusiness'>卓动业务
                    <input type="checkbox" id='menubusiness' className='menuitemswitch'/><i></i>
                    <div className="menuitem">
                        <a href="">游戏业务</a>
                        <a href="">大数据业务</a>
                        <a href="">软件服务</a>
                        <a href="">企业服务</a>
                    </div>
                </label>
                <label htmlFor='menunews'>新闻资讯
                    <input type="checkbox" id='menunews' className='menuitemswitch'/><i></i>
                    <div className="menuitem">
                        <a href="">活动资讯</a>
                        <a href="">公司资讯</a>
                        <a href="">培训资讯</a>
                    </div>
                </label>
                <label htmlFor='menujion'>加入我们
                    <input type="checkbox" id='menujion' className='menuitemswitch'/><i></i>
                    <div className="menuitem">
                        <a href="">社会招聘</a>
                        <a href="">校园招聘</a>
                        <a href="">福利待遇</a>
                        <a href="">培训发展</a>
                    </div>
                </label>
                <span><a href="">联系我们</a></span>
             </div>
             <label className="h-navbtn" htmlFor='switch'>
            </label><label className="overallmask" htmlFor='switch'></label>
        </header>
        </>
    )

}
export default HeaderNav