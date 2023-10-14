import styled from 'styled-components';
import { useToggle } from '@/hooks/use-toggle';
import ArrowDownSvg from '@/assets/icons/arrow-down.svg';
import { COLOR } from '@/theme/styles/color';
import { Badge } from '@/components/badge';
import { BadgeVariant } from '@/components/badge/constants';
import React, { useState } from 'react';
import { Modal } from '@/components/modal';
import {
  BreathingTechnique,
  breathingTechniques,
} from '@/app/dashboard/meditation/steps/focus-on-breath/constants';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
`;

const SDropdownTitle = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_100};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
`;

const SArrowContainer = styled.div<{ $isToggled: boolean }>`
  display: flex;
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  transform: ${({ $isToggled }) => ($isToggled ? 'rotate(180deg)' : '')};
`;

const SArrowDownSvg = styled(ArrowDownSvg)`
  transform: scale(0.7);
`;

const SDropdownHeader = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;

  span,
  svg {
    transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  }

  &:hover {
    span,
    svg {
      color: ${({ theme }) => theme.COLOR.PRIMARY_300};
    }
  }
`;

const SDropdownContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export function FocusOnBreath() {
  const [activeBreathingTechnique, setActiveBreathingTechnique] = useState<BreathingTechnique>();
  const { isToggled: isDropdownToggled, toggle: toggleDropdown } = useToggle();
  const {
    isToggled: isModalToggled,
    enable: enableModal,
    disable: disableModal,
  } = useToggle();

  const onBadgeClickHandler = (technic: BreathingTechnique) => {
    setActiveBreathingTechnique(technic);
    enableModal();
  };

  return (
    <SContainer>
      <strong>How to breath?</strong>
      <SDescription>
        In most meditation practices, the goal is to breathe naturally. You dont
        need to control or manipulate your breath. Instead, observe your breath
        as it naturally flows in and out of your body. Allow it to be as it is
        without trying to make it slower, deeper, or shallower.
      </SDescription>
      <SDropdownHeader onClick={toggleDropdown}>
        <SDropdownTitle>Show Other breathing technics</SDropdownTitle>
        <SArrowContainer $isToggled={isDropdownToggled}>
          <SArrowDownSvg color={COLOR.PRIMARY_100} />
        </SArrowContainer>
      </SDropdownHeader>
      {isDropdownToggled && (
        <SDropdownContent>
          {breathingTechniques.map((breathingTechnic) => (
            <Badge
              variant={BadgeVariant.OUTLINE}
              key={breathingTechnic.title}
              onClick={() => onBadgeClickHandler(breathingTechnic)}
            >
              {breathingTechnic.title}
            </Badge>
          ))}
        </SDropdownContent>
      )}
      <Modal
        isOpen={isModalToggled}
        title={activeBreathingTechnique?.title ?? 'Breathing technique'}
        onClose={disableModal}
      >
        {activeBreathingTechnique?.description}
      </Modal>
    </SContainer>
  );
}
