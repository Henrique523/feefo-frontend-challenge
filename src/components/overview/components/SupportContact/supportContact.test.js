import {render} from "@testing-library/react";
import { SupportContact } from './index';

describe('Tests for SupportContact component', () => {
   it('should render correctly', () => {
      const { getByText } = render(<SupportContact />);
      expect(getByText('020 3362 4208')).toBeInTheDocument();
   });
});
