import * as React from 'react';
import { useCallback } from 'react';

interface PopupControllerProps {
  children: React.ReactNode;
  resetPopups?: () => void;
  openPopups?: Set<number>;
  setOpenPopups?: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const PopupController = ({
  children,
  setOpenPopups,
}: PopupControllerProps) => {
  const registerOpenPopup = useCallback(
    (index: number) => {
      console.log('in first');
      if (setOpenPopups) {
        console.log('in func');
        setOpenPopups((prev) => {
          const newSet = new Set(prev);
          newSet.add(index);

          return newSet;
        });
      }
    },
    [setOpenPopups]
  );

  return (
    <>
      {Array.isArray(children)
        ? children.map((child, i) =>
            React.cloneElement(child as React.ReactElement, {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              registerOpenPopup,
              index: i,
            })
          )
        : children}
    </>
  );
};
