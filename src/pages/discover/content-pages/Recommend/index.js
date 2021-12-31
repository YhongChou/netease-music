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

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));

// 2 加入hook版
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from './store/action';

function Recommend(props) {
  const dispatch = useDispatch();
  const {topBanners} = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }));

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
