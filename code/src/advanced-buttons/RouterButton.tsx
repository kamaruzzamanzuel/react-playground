import { ReactNode, ComponentProps, HTMLAttributeAnchorTarget } from 'react';
import { Button, ButtonOwnProps, ButtonProps, ButtonTypeMap, ExtendButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';

type TypeProps = {
  children: ReactNode;
  to?: string;
  target?: HTMLAttributeAnchorTarget;
} & Omit<ButtonProps, "children" | "to" | "href" | "target">;

const RouterButton = ({
  children,
  to,
  target = "_self",
  ...rest
}: TypeProps) => {
  const defaultButtonProps: ButtonOwnProps = {
    variant: "contained",
  };

  if (to != null) {
    if (target === "_self") {
      return <LinkTagButton
        to={to}
        {...defaultButtonProps}
        {...rest as ExtendButtonBase<ButtonTypeMap<{}, typeof Link>>}
      >
        {children}
      </LinkTagButton>;
    } else {
      return <ATagButton
        to={to}
        target={target}
        {...defaultButtonProps}
        {...rest as ExtendButtonBase<ButtonTypeMap<{}, "a">>}
      >
        {children}
      </ATagButton>;
    }
  } else {
    return <Button
      {...defaultButtonProps}
      {...rest}
    >
      {children}
    </Button>;

  }
};

type TypeLinkTagButtonProps = {
  children: ReactNode;
  to: string;
  state?: Record<string, any>;
} & Omit<ExtendButtonBase<ButtonTypeMap<{}, typeof Link>>, "children" | "component" | "to" | "href" | "target" | "state">;

const LinkTagButton = ({
  children,
  to,
  state,
  ...rest
}: TypeLinkTagButtonProps) => {
  return <Button
    component={Link}
    to={to}
    state={state}
    {...rest}
  >
    {children}
  </Button>
};

type TypeATagButtonProps = {
  children: ReactNode;
  to: string;
  target: HTMLAttributeAnchorTarget;
} & Omit<ComponentProps<ExtendButtonBase<ButtonTypeMap<{}, "a">>>, "children" | "component" | "href" | "target">;

const ATagButton = ({
  children,
  to,
  target,
  ...rest
}: TypeATagButtonProps) => {
  return <Button
    href={to}
    target={target}
    {...rest}
  >
    {children}
  </Button>
};

export default RouterButton