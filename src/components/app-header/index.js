/*
 * @author: zhouyinghong
 * @Date: 2021-12-02 17:27:03
 * @description:
 * @LastEditTime: 2021-12-02 19:32:42
 */

import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function AppHeader() {
    return (
        <div>
            <NavLink to="/">我的音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friends">我的音乐</NavLink>
        </div>
    )
})
