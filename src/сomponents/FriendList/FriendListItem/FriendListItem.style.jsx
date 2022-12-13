import styled from 'styled-components';

export const UserCard = styled.li`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]};
  border: ${p => p.theme.borders.thin};
  border-radius: ${p => p.theme.radii.sketchy1};
  background-color: ${p => p.theme.colors.yellow};
  transition: box-shadow ${p => p.theme.transitions}, transform ${p => p.theme.transitions};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]};
  }
  box-shadow: ${p => p.theme.shadows.hover};
  :hover {
    transform: translate(-10px, -10px);
    box-shadow: ${p => p.theme.shadows.default};
  }
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: ${p => p.theme.space[5]};
  border-radius: 50%;
  background-color: ${p => (p.status ? p.theme.colors.primaryDark : p.theme.colors.greenDark)};
`;
export const Avatar = styled.img`
  height: 100px;
  border-radius: ${p => p.theme.radii.sketchy0};
  margin-right: ${p => p.theme.space[5]};
`;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes[5]}px;
`;
