import styled from 'styled-components';

export const CardArea = styled.div`
    border-width: 1px;
    border-radius: 0.5rem; 
    border-style: solid;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 24rem;
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.375rem; /* 1.5 * 0.25rem = 0.375rem, equivalente a 'space-y-1.5' do Tailwind */
    padding: 1.5rem; /* 1.5rem é equivalente a 'p-6' do Tailwind */
`;

export const CardTitle = styled.div`
  font-size: 1.5rem;       /* Equivalente a 'text-2xl' */
  font-weight: 600;        /* Equivalente a 'font-semibold' */
  line-height: 1;          /* Equivalente a 'leading-none' */
  letter-spacing: -0.01562em; /* Equivalente a 'tracking-tight' */
`;


export const CardDescription = styled.div`
  font-size: 0.875rem;        /* Equivalente a 'text-sm' */
  color: #6b7280;  
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;       /* Equivalente a 'p-6' */
  padding-top: 0;       /* Equivalente a 'pt-0' */
`;


export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;       /* Equivalente a 'p-6' */
  padding-top: 0;       /* Equivalente a 'pt-0' */
`;

