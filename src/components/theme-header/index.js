/**
 * @description: 抽出来的公共header
 * @param {*}
 * @return {*}
 */
import { memo } from "react";
import { HeaderWrapper } from "./styles";

const themeHeader = memo(function(props) {
    return (
        <HeaderWrapper>
            <div className="left"></div>
            <div className="right">
                <a href=""></a>
            </div>
        </HeaderWrapper>
    )
})