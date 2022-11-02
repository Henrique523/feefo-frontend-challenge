import {render} from "@testing-library/react";
import { SupportDescription } from './index';

describe('Tests for SupportDescription component', () => {
   it('sholud render correctly when props are correctly passed', () => {
      const { getByText } = render(<SupportDescription name="Support Description" />);
      expect(getByText("Support Description")).toBeInTheDocument();
   });

   it('should console an error if the prop type is incorrect', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {});

      render(<SupportDescription name={25} />);

      expect(console.error).toHaveBeenCalled();
   });

   it('should console an error if a required prop is not passed', () => {
      jest.spyOn(console, 'error').mockImplementation(() => {});

      render(<SupportDescription />);

      expect(console.error).toHaveBeenCalled();
   });
});
