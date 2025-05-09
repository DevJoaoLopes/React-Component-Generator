import type { ITypes } from './FactoryCodes.types';


const codeTsComponent = (nameComponent: string) => (
`import React from 'react';

export const ${nameComponent} = () => {
  return (
    <div>
      Component generated by react-component-generator
    </div>
  );
};
`
);

const codeIndex = (nameComponent: string) => (
`export * from './${nameComponent}';
`
);

const codeTestComponent = (nameComponent: string) => (
`import React from 'react';
import { render, screen } from '@testing-library/react';

import { ${nameComponent} } from './${nameComponent}';

describe('<${nameComponent} />', () => {
  it('should render component', () => {
    createComponent();
    expect(screen.getByText('')).toBeInTheDocument();
  });
});

const createComponent = (props = {}) => {
  const defaultProps = {
    ...props,
  };

  return render(<${nameComponent} {...defaultProps} />);
};
`
);


const getTemplates = (name: string, type: ITypes) => {
  const dictionaryTemplate = {
    'COMPONENT': codeTsComponent(name),
    'INDEX': codeIndex(name),
    'TEST': codeTestComponent(name)
  };

  return dictionaryTemplate[type];
};

export default getTemplates;