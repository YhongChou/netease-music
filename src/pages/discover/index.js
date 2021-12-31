import React, { memo, useEffect }from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { discoverMenu } from '@/common/local-data';
import request from '@/services/request';
import {
    DiscoverWrapper,
    TopMenu
} from './styles';

// 使用renderRoutes就会有props属性,可获取到route属性
export default memo(function Discover(props) {

    useEffect(() => {
        request({
            url: "/banner"
        }).then(res => {
            console.log('debug', res);
        })
    })
    const { route } = props;
    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        discoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>
                                        {item.title}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {/* 二级路由 */}
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
