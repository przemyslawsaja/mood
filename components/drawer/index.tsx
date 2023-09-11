import styled from "styled-components";

type Props = {
  title: string;
};

const SDrawerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: ${({ theme }) =>
    `${theme.BORDER_RADIUS.XL} ${theme.BORDER_RADIUS.XL} 0 0`} ;
  height: auto;
  padding: 2rem;
  background: ${({ theme }) => theme.COLOR.WHITE};
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHEST}};
`;
export const Drawer = ({ title }: Props) => {
  return <SDrawerWrapper>{title}</SDrawerWrapper>;
};
