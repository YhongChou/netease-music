import React, { memo }from 'react';
import { NavLink } from 'react-router-dom';
import { discoverMenu } from '@/common/local-data';
import {
    DiscoverWrapper,
    TopMenu
} from './styles';
import { renderRoutes } from 'react-router-config';

// 使用renderRoutes就会有props属性
export default memo(function Discover(props) {
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
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
