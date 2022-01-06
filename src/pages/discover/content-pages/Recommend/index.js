// import React, { memo, useEffect } from 'react'
// import { connect } from 'react-redux'
// import { getTopBannerAction } from './store/action'

// function Recommend(props) {

//   const { getBanners, topBanners } = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners])

//   return (
//       <div>
//           Recommend
//           {topBanners.length}
//       </div>
//   )
// }

// // connect到的是所有的state
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// connect内部也会做一层浅层比较
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));

// 2 加入hook版, 使用useSelector代替connect
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/action';

function Recommend(props) {
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

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);



  return (
    <div>
      Recommend {topBanners.length}
    </div>
  )
}

export default memo(Recommend);
