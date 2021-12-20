/*
 * @author: rednessLife
 * @Date: 2021-12-10 11:16:46
 * @description:
 * @LastEditTime: 2021-12-10 16:48:33
 */
import styled from 'styled-components';
// import sprite from '../../assets/img/sprite_01.png';
import sprite from '@/assets/img/sprite_01.png';

export const HeaderWrapper = styled.div`
    height: 75px;
    color: #fff;
    background-color: #242424;
    font-size: 14px;
    overflow: hidden;
    // width: 100vw;

    .content {
        height: 70px;
        display: flex;
        align-item: center;
        justify-content: space-between;
    }

    .divider {
        // width: 100%;
        height: 5px;
        background-color: #C20C0C
    }
`

export const HeaderLeft = styled.div`
    flex: 1;
    display: flex;

    .logo {
        // a元素默认不显示宽度，要设置为block或inline-block
        // display: block;
        width: 176px;
        height: 69px;
        // background-position: 0 0;
        background: url(${sprite});
        text-indent: -9999px;
    }

    .select-list {
        // flex: 1;
        display: flex;
        line-height: 70px
    }

    .select-item {
        font-size: 14px;
        a {
            display: block;
            padding: 0 20px;
            color: #ccc;
        }

        // 设置右上角的hot位置
        :last-of-type a {
            position: relative;
            ::after {
              position: absolute;
              content: "";
              width: 28px;
              height: 19px;
              background-image: url(${sprite});
              top: 20px;
              right: -15px;
              background-position: -190px 0;
            }
        }

        &:hover a, a.active {
            color: #fff;
            background: #000;
            text-decoration: none;
        }

        .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
        }
    }
`

export const HeaderRight = styled.div`
    display: flex;
    line-height: 70px;

    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
            height: 32px;
            border-radius: 16px;
            margin-left: 5px;
            &::placeholder {
                font-size: 12px;
            }
        }
    }

    .login {
        color: #fff;
        background-color: transparent;
    }

    .center {
        width: 90px;
        height: 32px;
        // line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 16px;
        background-color: transparent;
        color: #ccc;
    }
`
