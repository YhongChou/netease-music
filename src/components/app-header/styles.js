/*
 * @author: rednessLife
 * @Date: 2021-12-10 11:16:46
 * @description:
 * @LastEditTime: 2021-12-10 16:48:33
 */
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 75px;
    color: #fff;
    backgroud-color: #242424;

    .content {
        height: 70px;
        display: flex;
        justify-content: space-between;
    }

    .divider {
        height: 5px;
        background-color: #C20C0C
    }
`

export const HeaderLeft = styled.div`
    display: flex;

    .logo {
        // a元素默认不显示宽度，要设置为block inline-block
        display: block;
        width: 176px;
        height: 69px;
        backgroud-position: 0 0;
    }

    .select-list {
        display: flex;
        line-height: 70px

        .select-item {

        }
    }
`

export const HeaderRight = styled.div`

`
