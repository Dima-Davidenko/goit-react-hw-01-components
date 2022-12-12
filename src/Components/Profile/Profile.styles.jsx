import styled from 'styled-components';

export const Description = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Avatar = styled.div`
  margin-bottom: 40px;
  display: block;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  background-image: url(${p => p.img});
  background-position: center;
  background-size: cover;
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes[6]}px;
  margin-bottom: ${p => p.theme.space[5]};
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  margin-bottom: ${p => p.theme.space[5]};
`;
export const Location = styled.p`
  font-size: ${p => p.theme.fontSizes[5]}px;
  margin-bottom: ${p => p.theme.space[5]};
`;

export const Stats = styled.ul`
  display: flex;
  min-height: 120px;
  border: ${p => p.theme.borders.thin};
  border-radius: ${p => p.theme.radii.sketchy3};
  background-color: ${p => p.theme.colors.blue};
`;

export const StatsItem = styled.li`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :not(:last-child) {
    border-right: ${p => p.theme.borders.thin};
    border-radius: ${p => p.theme.radii.sketchy3};
  }
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes[4]}px; ;
`;
export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
`;
