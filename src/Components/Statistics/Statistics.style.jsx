import styled from 'styled-components';
export const Title = styled.h2`
  text-align: center;
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 2;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes[4]}px;
  border: ${p => p.theme.borders.thin};
  :not(:last-child) {
    margin-right: ${p => p.theme.space[2]};
  }
  border-radius: ${p => {
    const keys = Object.keys(p.theme.radii);
    let randomIndex = Math.floor(Math.random() * keys.length);
    return p.theme.radii[keys[randomIndex]];
  }};
  background-color: ${p => {
    const keys = Object.keys(p.theme.colors);
    let randomIndex = Math.floor(Math.random() * keys.length);
    randomIndex = randomIndex ? randomIndex : randomIndex + 1;
    return p.theme.colors[keys[randomIndex]];
  }};
`;
