/** @format */

import type { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

const NewReportButton = (): ReactNode => {
  return (
    <Button
      width='86px'
      height='20px'
      borderRadius='6.584px'
      fontSize='9.218px'
      fontFamily='var(--font-jetbrains)'
      fontWeight='800'
      letterSpacing='.922px'
      color='white'
      backgroundColor='var(--amethyst-500)'
    >
      NEW REPORT
    </Button>
  );
};

export default NewReportButton;
