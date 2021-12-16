/*
 * @author: rednessLife
 * @Date: 2021-12-02 17:27:03
 * @description:
 * @LastEditTime: 2021-12-10 16:50:18
 */

import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import { NavLink } from 'react-router-dom';
import { headerLinks } from '../../common/local-data';


import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './styles';

export default memo(function AppHeader() {
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        } else if (index > 3) {
            return (
                <a href={item.link}>{item.title}</a>
            )
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft className="left">
                    <a className="logo sprite_01" href="#/"/>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div className="select-item" key={item.title}>
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight className="right">
                    <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <button className="center">创作者中心</button>
                    <button className="login">登录</button>
                </HeaderRight>
            </div>
            <div className="divider">
                divider
            </div>
        </HeaderWrapper>
    )
})
