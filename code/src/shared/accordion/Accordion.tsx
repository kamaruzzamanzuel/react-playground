import { ExpandMore } from '@mui/icons-material';
import { AccordionDetails, AccordionSummary, Accordion as DefaultAccordion } from '@mui/material';
import React, { useState } from 'react';
import "./Acoordion.scss";

type TypeProps = {
  title: string | React.ReactNode;
  children?: string | React.ReactNode | React.ReactNode[];
  expandIcon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  isExpandIconFloatLeft?: boolean;
  isExpanded?: boolean;
  disabled?: boolean;
};

const Accordion = ({
  title,
  expandIcon,
  children,
  className,
  iconClassName,
  isExpanded,
  isExpandIconFloatLeft = false,
  disabled
}: TypeProps) => {

  const [isOpen, setIsOpen] = useState(isExpanded);

  return (
    <DefaultAccordion
      className={`npd custom-accordion ${className}`}
      disabled={disabled}
      expanded={isOpen}
    >
      <AccordionSummary
        // className="npd nmgt nmgb justify-content-start d-inline-flex"
        className={`accordion-title ${isExpandIconFloatLeft ? "justify-content-start d-inline-flex" : ""}`}
        expandIcon={expandIcon ?? <ExpandMore className={iconClassName ?? ""} />}
        onClick={() => setIsOpen(!isOpen)}

      >
        {title}
      </AccordionSummary>
      <AccordionDetails
        className="npd"
      >
        {children}
      </AccordionDetails>
    </DefaultAccordion>
  );
};

export default Accordion;