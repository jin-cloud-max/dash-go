import { Icon, Link, Text, LinkProps as ChakraLinProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} size="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}
