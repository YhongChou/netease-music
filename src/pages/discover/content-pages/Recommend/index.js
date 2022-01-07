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
import TopBanner from './content-pages/top-banner';

function Recommend(props) {

  return (
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend);
