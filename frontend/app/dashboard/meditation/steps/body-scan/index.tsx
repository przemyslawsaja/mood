import styled from 'styled-components';

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
`;

export function BodyScan() {
  return (
    <div>
      <strong>Body Scan</strong>
      <SDescription>
        By mentally scanning yourself from head to toe — many people imagine a
        laser copier scanning the length of their body — you are bringing
        awareness to every single part of your body, noticing any aches, pains,
        tension, or general discomfort. Staying present with and breathing into
        these sensations can help bring relief to our minds and bodies by
        evolving our relationship to pain, aches, and discomfort.
      </SDescription>
    </div>
  );
}
