import { render, screen } from '@testing-library/react';
import Page from '../../app/page';

describe('Page Component', () => {
  it('renders a heading with correct text', () => {
    render(<Page />);
    
    const heading = screen.getByRole('heading', { 
      name: /hello, next\.js!/i 
    });
    
    expect(heading).toBeInTheDocument();
  });

  it('applies the correct Tailwind classes', () => {
    render(<Page />);
    
    const heading = screen.getByRole('heading', { 
      name: /hello, next\.js!/i 
    });
    
    expect(heading).toHaveClass('text-3xl');
  });

  it('renders only one heading element', () => {
    render(<Page />);
    
    const headings = screen.getAllByRole('heading');
    
    expect(headings).toHaveLength(1);
  });
}); 