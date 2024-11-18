import styled from "styled-components";
import backgroudMath from "../../assets/img/background.png"

export const Container = styled.main`
    position: relative;
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: var(--theme-dark-background);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const BackgroundImg = styled.div`
    position: absolute;
    background: url(${backgroudMath}) center/cover no-repeat;
    filter: blur(4px);
    width: 100%;
    height: 100%;
    z-index: -1;
`

export const CardCalc = styled.div`
    max-width: 14rem;
    background-color: var(--theme-dark-background);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 var(--theme-white-background);
`

export const ImgCalc = styled.img`
    width: 100%;
    border-radius: 1rem;
`
export const TextCalc = styled.h3`
    padding: 1rem;
    justify-content: center;
    margin-bottom: 0.4rem;
    color: var(--theme-dark-text);
`