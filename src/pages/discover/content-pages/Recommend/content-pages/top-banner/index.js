import { Carousel } from "antd";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from '../../store/action';

export default memo(function TopBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();
    // 取出state
    // useSelector会做一层 === 比较
    // shallowEqual进行浅层比较
    const {topBanners} = useSelector(state => ({
      // topBanners: state.recommend.topBanners
      // topBanners: state.recommend.get("topBanners")
      // topBanners: state.get("recommend").get("topBanners")
      topBanners:state.getIn(["recommend", "topBanners"])
    }), shallowEqual);
  
    const bannerRef = useRef();
    // 发送网络请求
    useEffect(() => {
      dispatch(getTopBannerAction())
    }, [dispatch]);

    const bannerChange = useCallback((pre, next) => {
        setCurrentIndex(next)
    },[])

    const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl;
    return (
        <div className="banner wrap-v2">
            <Carousel 
                effect="fade" 
                autoplay 
                ref={bannerRef} 
                beforeChange={bannerChange}
            >
                {
                    topBanners.map((item, index) => (
                        <div className="banner-item" key={item.imageUrl}>
                            <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                        </div>
                    ))
                }
            </Carousel>
            <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </div>
    )
})